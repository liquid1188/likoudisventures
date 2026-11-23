import { Resend } from 'resend';

let _resend: Resend | null = null;

/**
 * Lazy Resend client, so the site builds without RESEND_API_KEY set.
 */
export function getResendClient(): Resend {
  if (!_resend) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) throw new Error('RESEND_API_KEY is not set');
    _resend = new Resend(apiKey);
  }
  return _resend;
}

export function getFromEmail(): string {
  return process.env.RESEND_FROM_EMAIL ?? 'hello@likoudisventures.com';
}

export function getInquiryToEmail(): string | null {
  return process.env.INQUIRY_TO_EMAIL ?? null;
}

/** Audience for The Branch, the general family newsletter. */
export function getAudienceId(): string | null {
  return process.env.RESEND_AUDIENCE_ID ?? null;
}

/** Separate audience for Table launch notices. Never mixed with The Branch. */
export function getTableAudienceId(): string | null {
  return process.env.RESEND_TABLE_AUDIENCE_ID ?? null;
}

/** Separate audience for future Collection announcements. */
export function getCollectionAudienceId(): string | null {
  return process.env.RESEND_COLLECTION_AUDIENCE_ID ?? null;
}

export function isResendConfigured(): boolean {
  return !!process.env.RESEND_API_KEY;
}
