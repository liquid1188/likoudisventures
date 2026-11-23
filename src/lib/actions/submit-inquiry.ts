'use server';

import { getResendClient, getFromEmail, getInquiryToEmail, isResendConfigured } from '@/lib/resend';
import { clean, oneLine, rateLimited, validEmail } from '@/lib/form-guard';
import { site, inquiryTopics } from '@/content/site';

interface InquiryResult {
  ok: boolean;
  message?: string;
}


const FAIL = `Your message could not be sent. Please write to us directly at ${site.email}.`;

/**
 * Send a contact-form message through Resend.
 * Reports success only when Resend has accepted the email for delivery.
 * Message contents are never written to the logs.
 */
export async function submitInquiry(formData: FormData): Promise<InquiryResult> {
  // Honeypot: real visitors never see or fill this field
  if (clean(formData.get('website'), 200)) return { ok: true };

  const name = oneLine(clean(formData.get('name'), 120));
  const email = oneLine(clean(formData.get('email'), 254));
  const topicRaw = clean(formData.get('topic'), 60);
  const message = clean(formData.get('message'), 5000);
  const topic = (inquiryTopics as readonly string[]).includes(topicRaw) ? topicRaw : 'General Inquiry';

  if (!name || !email || !message) return { ok: false, message: 'Please fill in your name, email address, and message.' };
  if (!validEmail(email)) return { ok: false, message: 'Please enter a valid email address.' };
  if (message.length < 2) return { ok: false, message: 'Please add a short message.' };
  if ((message.match(/https?:\/\//g) ?? []).length >= 3) return { ok: false, message: FAIL };

  if (await rateLimited('inquiry', 5)) {
    return { ok: false, message: `Too many messages from this connection. Please try again later or write to ${site.email}.` };
  }

  const to = getInquiryToEmail();
  if (!isResendConfigured() || !to) {
    console.error('[inquiry] email service is not configured (RESEND_API_KEY or INQUIRY_TO_EMAIL missing)');
    return { ok: false, message: FAIL };
  }

  try {
    const { data, error } = await getResendClient().emails.send({
      from: `Likoudis Ventures <${getFromEmail()}>`,
      to: [to],
      replyTo: email,
      subject: `Website message: ${topic}`,
      text: [`From: ${name} <${email}>`, `About: ${topic}`, '', message, '', '---', 'Sent from the Likoudis Ventures contact form'].join('\n'),
    });
    if (error || !data?.id) {
      console.error('[inquiry] provider rejected the message:', error?.name ?? 'no id returned');
      return { ok: false, message: FAIL };
    }
    return { ok: true };
  } catch (err) {
    console.error('[inquiry] send failed:', err instanceof Error ? err.name : 'unknown error');
    return { ok: false, message: FAIL };
  }
}
