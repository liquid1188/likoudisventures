import { cookies } from 'next/headers';

const COOKIE_NAME = 'lv_admin_auth';

/**
 * Check if the current request has a valid admin auth cookie.
 * Compares the cookie value to ADMIN_PASSWORD env var.
 *
 * Note: this is intentionally a very simple auth scheme. Suitable for a single-owner
 * admin endpoint protected behind an obscure URL. Don't use this for multi-user auth.
 */
export async function isAdminAuthed(): Promise<boolean> {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(COOKIE_NAME);
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) return false;
  if (!cookie?.value) return false;

  return cookie.value === adminPassword;
}

/**
 * Set the admin auth cookie. Called from the unlock action.
 */
export async function setAdminAuthCookie(password: string): Promise<boolean> {
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword || password !== adminPassword) return false;

  const cookieStore = await cookies();
  cookieStore.set({
    name: COOKIE_NAME,
    value: password,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 1 week
  });

  return true;
}

/**
 * Clear the admin auth cookie (logout).
 */
export async function clearAdminAuthCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}
