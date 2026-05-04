'use server';

import { divisions } from '@/content/divisions';
import { getResendClient, getFromEmail, getInquiryToEmail, isResendConfigured } from '@/lib/resend';

interface InquiryResult {
  ok: boolean;
  message?: string;
}

/**
 * Submit an inquiry from the contact form.
 * Sends an email to the configured INQUIRY_TO_EMAIL via Resend.
 *
 * If Resend is not configured (no API key), logs to console and returns success
 * — useful for local dev and for verifying the form before Resend is set up.
 */
export async function submitInquiry(formData: FormData): Promise<InquiryResult> {
  const name = String(formData.get('name') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const division = String(formData.get('division') ?? '').trim();
  const message = String(formData.get('message') ?? '').trim();

  // Basic validation
  if (!name || !email || !message) {
    return { ok: false, message: 'Please fill in all required fields.' };
  }

  if (!email.includes('@') || email.length < 5) {
    return { ok: false, message: 'Please enter a valid email address.' };
  }

  if (message.length > 5000) {
    return { ok: false, message: 'Message is too long. Please keep it under 5000 characters.' };
  }

  // Light spam detection — reject obvious bot signals
  if (/https?:\/\/.*https?:\/\/.*https?:\/\//.test(message)) {
    // Three or more URLs in the message body — almost certainly spam
    return { ok: false, message: 'Your message could not be sent. Please write to us directly.' };
  }

  // Resolve division to a friendly label
  const divisionRecord = divisions.find((d) => d.slug === division);
  const divisionLabel = divisionRecord?.name ?? 'Inquiry';

  // If Resend isn't configured, log and return success so dev/local doesn't block
  if (!isResendConfigured()) {
    console.log('[Inquiry — Resend not configured, logging only]', {
      name,
      email,
      divisionLabel,
      message,
    });
    return { ok: true };
  }

  // Send via Resend
  try {
    const resend = getResendClient();
    await resend.emails.send({
      from: `Likoudis Ventures <${getFromEmail()}>`,
      to: [getInquiryToEmail()],
      replyTo: email,
      subject: `New Inquiry — ${divisionLabel}`,
      text: [
        `New inquiry from ${name} <${email}>`,
        `Concerning: ${divisionLabel}`,
        '',
        '---',
        '',
        message,
        '',
        '---',
        'Sent from likoudisventures.com',
      ].join('\n'),
    });

    return { ok: true };
  } catch (error) {
    console.error('[Inquiry] Resend error:', error);
    return {
      ok: false,
      message:
        'We could not send your message. Please write to us directly at hello@likoudisventures.com.',
    };
  }
}
