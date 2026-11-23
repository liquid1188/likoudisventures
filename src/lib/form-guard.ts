import { headers } from 'next/headers';

/**
 * Basic protection for public forms: a per-address rate limit and helpers for
 * cleaning input. The rate limit lives in memory on each server instance, so
 * it is a speed bump for bursts, not a hard guarantee.
 */
const hits = new Map<string, number[]>();

export async function rateLimited(bucket: string, max = 5, windowMs = 10 * 60 * 1000): Promise<boolean> {
  const h = await headers();
  const ip = (h.get('x-forwarded-for') ?? '').split(',')[0].trim() || h.get('x-real-ip') || 'unknown';
  const key = `${bucket}:${ip}`;
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  if (recent.length >= max) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) hits.clear();
  return false;
}

/** Trim, drop control characters, and cap length. */
export function clean(value: FormDataEntryValue | null, max: number): string {
  return String(value ?? '')
    // eslint-disable-next-line no-control-regex
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .trim()
    .slice(0, max);
}

/** One line only, for names and subject fields (blocks header injection). */
export function oneLine(value: string): string {
  return value.replace(/[\r\n]+/g, ' ');
}

export function validEmail(email: string): boolean {
  return /^[^\s@<>()]+@[^\s@<>()]+\.[^\s@<>()]{2,}$/.test(email) && email.length <= 254;
}
