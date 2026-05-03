'use server';

import { redirect } from 'next/navigation';
import { setAdminAuthCookie, clearAdminAuthCookie } from '@/lib/auth';

export async function unlockAdmin(formData: FormData): Promise<{ ok: boolean; message?: string }> {
  const password = String(formData.get('password') ?? '');

  if (!password) {
    return { ok: false, message: 'Password required.' };
  }

  const success = await setAdminAuthCookie(password);

  if (!success) {
    return { ok: false, message: 'Incorrect password.' };
  }

  redirect('/admin/branch');
}

export async function logoutAdmin(): Promise<void> {
  await clearAdminAuthCookie();
  redirect('/');
}
