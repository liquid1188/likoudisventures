'use server';

import { getResendClient, getAudienceId, getTableAudienceId, isResendConfigured } from '@/lib/resend';
import { clean, rateLimited, validEmail } from '@/lib/form-guard';
import { site } from '@/content/site';

interface SubscribeResult {
  ok: boolean;
  message?: string;
}

/**
 * Signups for two separate lists, kept apart on purpose:
 *   'branch'  The Branch, the occasional family newsletter
 *   'table'   a one-off notice when the Table has something ready
 * Signing up for one never adds the address to the other. Success is only
 * reported once Resend has stored the contact.
 */
async function addContact(list: 'branch' | 'table', formData: FormData): Promise<SubscribeResult> {
  if (clean(formData.get('website'), 200)) return { ok: true };

  const email = clean(formData.get('email'), 254).toLowerCase();
  const consent = formData.get('consent') === 'yes';
  if (!validEmail(email)) return { ok: false, message: 'Please enter a valid email address.' };
  if (!consent) return { ok: false, message: 'Please tick the box to confirm you would like these emails.' };
  if (await rateLimited(`signup-${list}`, 5)) return { ok: false, message: 'Too many attempts. Please try again later.' };

  const audienceId = list === 'branch' ? getAudienceId() : getTableAudienceId();
  if (!isResendConfigured() || !audienceId) {
    console.error(`[signup:${list}] email list is not configured`);
    return { ok: false, message: `Signups aren't working right now. Please write to ${site.email} and we'll add you.` };
  }

  try {
    const { data, error } = await getResendClient().contacts.create({ email, audienceId, unsubscribed: false });
    if (error) {
      if (String(error.message ?? '').toLowerCase().includes('already exists')) {
        return { ok: true, message: "You're already on the list." };
      }
      console.error(`[signup:${list}] provider error:`, error.name);
      return { ok: false, message: `Something went wrong. Please try again or write to ${site.email}.` };
    }
    if (!data?.id) return { ok: false, message: `Something went wrong. Please try again or write to ${site.email}.` };
    return {
      ok: true,
      message: list === 'branch' ? "Thank you. You're subscribed to The Branch." : "Thank you. We'll write when the Table has something ready.",
    };
  } catch (err) {
    console.error(`[signup:${list}] failed:`, err instanceof Error ? err.name : 'unknown error');
    return { ok: false, message: `Something went wrong. Please try again or write to ${site.email}.` };
  }
}

export async function subscribeToBranch(formData: FormData): Promise<SubscribeResult> {
  return addContact('branch', formData);
}

export async function notifyTableLaunch(formData: FormData): Promise<SubscribeResult> {
  return addContact('table', formData);
}
