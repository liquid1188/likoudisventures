'use client';

import { useState, useTransition } from 'react';
import { notifyTableLaunch } from '@/lib/actions/newsletter-signup';

/**
 * Launch-interest signup for the Table. Kept separate from The Branch:
 * signing up here does not subscribe anyone to the family newsletter.
 */
export function NotifyForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [isPending, startTransition] = useTransition();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    startTransition(async () => {
      const result = await notifyTableLaunch(data);
      setStatus(result.ok ? 'success' : 'error');
      setMessage(result.message ?? (result.ok ? 'Thank you.' : 'Something went wrong. Please try again.'));
      if (result.ok) form.reset();
    });
  };

  if (status === 'success') {
    return <p role="status" className="font-sans text-[17px] text-olive-deep">{message}</p>;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3 max-w-xl">
      <div className="flex flex-col sm:flex-row gap-3">
        <label htmlFor="table-email" className="sr-only">Email address</label>
        <input id="table-email" name="email" type="email" required maxLength={254} autoComplete="email" placeholder="Email address" className="field-input flex-1" />
        <button type="submit" disabled={isPending} className="btn-primary disabled:opacity-60 shrink-0">
          {isPending ? 'Sending…' : 'Notify Me About the Table'}
        </button>
      </div>
      <label className="flex items-start gap-2.5 font-sans text-[14px] leading-snug text-navy/70">
        <input type="checkbox" name="consent" value="yes" required className="mt-1 h-4 w-4 shrink-0 accent-olive-deep" />
        <span>Email me when the Table has something ready. This is separate from our newsletter, and you can unsubscribe at any time.</span>
      </label>
      <div aria-hidden className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      {status === 'error' && <p role="alert" className="font-sans text-[14px] text-[#9B2C1F]">{message}</p>}
    </form>
  );
}
