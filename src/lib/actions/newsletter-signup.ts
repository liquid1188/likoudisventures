'use server';

import { getResendClient, getAudienceId, isResendConfigured } from '@/lib/resend';

interface SubscribeResult {
  ok: boolean;
  message?: string;
}

/**
 * Subscribe an email to "The Branch" newsletter via Resend Audiences.
 *
 * If Resend is not configured (no API key or no audience ID), logs to console
 * and returns success — so dev/local works without setup.
 */
export async function subscribeToNewsletter(email: string): Promise<SubscribeResult> {
  const trimmed = email.trim().toLowerCase();

  if (!trimmed || !trimmed.includes('@') || trimmed.length < 5) {
    return { ok: false, message: 'Please enter a valid email address.' };
  }

  // If Resend or audience isn't configured, log and return success for dev
  const audienceId = getAudienceId();
  if (!isResendConfigured() || !audienceId) {
    console.log('[Newsletter — Resend not fully configured, logging only]', { email: trimmed });
    return {
      ok: true,
      message: 'Thank you. The first note from the house arrives soon.',
    };
  }

  try {
    const resend = getResendClient();

    // Add to audience (Resend's contacts API)
    await resend.contacts.create({
      email: trimmed,
      audienceId,
      unsubscribed: false,
    });

    return {
      ok: true,
      message: 'Thank you. The first note from the house arrives soon.',
    };
  } catch (error: unknown) {
    // Resend returns 422 if the contact already exists — treat as success
    const errorMessage = error instanceof Error ? error.message : String(error);
    if (errorMessage.toLowerCase().includes('already exists')) {
      return {
        ok: true,
        message: 'You are already subscribed. Thank you.',
      };
    }

    console.error('[Newsletter] Resend error:', error);
    return {
      ok: false,
      message: 'Something went wrong. Please try again or write to us directly.',
    };
  }
}
