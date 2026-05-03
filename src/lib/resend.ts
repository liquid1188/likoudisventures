import { Resend } from 'resend';

let _resend: Resend | null = null;

/**
 * Lazy-initialized Resend client. Only instantiates on first use,
 * which means the app can be built without RESEND_API_KEY set.
 */
export function getResendClient(): Resend {
  if (!_resend) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error('RESEND_API_KEY is not set');
    }
    _resend = new Resend(apiKey);
  }
  return _resend;
}

/**
 * Get the verified "from" email address.
 */
export function getFromEmail(): string {
  return process.env.RESEND_FROM_EMAIL ?? 'hello@likoudisventures.com';
}

/**
 * Get the inquiry destination email.
 */
export function getInquiryToEmail(): string {
  return process.env.INQUIRY_TO_EMAIL ?? 'hello@likoudisventures.com';
}

/**
 * Get the audience ID for "The Branch" newsletter.
 */
export function getAudienceId(): string | null {
  return process.env.RESEND_AUDIENCE_ID ?? null;
}

export function isResendConfigured(): boolean {
  return !!process.env.RESEND_API_KEY;
}
