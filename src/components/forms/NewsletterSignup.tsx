'use client';

import { useState, useTransition } from 'react';
import { clsx } from 'clsx';
import { subscribeToBranch } from '@/lib/actions/newsletter-signup';

interface NewsletterSignupProps {
  variant?: 'footer' | 'standalone';
}

/** Signup for The Branch only. The Table's launch notice uses NotifyForm. */
export function NewsletterSignup({ variant = 'standalone' }: NewsletterSignupProps) {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [isPending, startTransition] = useTransition();
  const dark = variant === 'footer';
  const id = dark ? 'branch-footer' : 'branch-page';

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    startTransition(async () => {
      const result = await subscribeToBranch(data);
      setStatus(result.ok ? 'success' : 'error');
      setMessage(result.message ?? (result.ok ? 'Thank you.' : 'Something went wrong. Please try again.'));
      if (result.ok) form.reset();
    });
  };

  return (
    <div>
      {dark && (
        <>
          <h2 className="font-display text-xl text-bone mb-1">The Branch</h2>
          <p className="font-sans text-[15px] text-bone/70 mb-4">An occasional note from the family.</p>
        </>
      )}

      {status === 'success' ? (
        <p role="status" className={clsx('font-sans text-[15px]', dark ? 'text-olive-glow' : 'text-olive-deep')}>{message}</p>
      ) : (
        <form onSubmit={onSubmit} className="space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <label htmlFor={`${id}-email`} className="sr-only">Email address</label>
            <input
              id={`${id}-email`}
              name="email"
              type="email"
              required
              maxLength={254}
              autoComplete="email"
              placeholder="Email address"
              className={clsx('flex-1', dark ? 'field-input-dark' : 'field-input')}
            />
            <button type="submit" disabled={isPending} className={clsx(dark ? 'btn-olive-on-dark' : 'btn-primary', 'disabled:opacity-60 shrink-0')}>
              {isPending ? 'Subscribing…' : 'Subscribe'}
            </button>
          </div>
          <label className={clsx('flex items-start gap-2.5 font-sans text-[14px] leading-snug', dark ? 'text-bone/70' : 'text-navy/70')}>
            <input type="checkbox" name="consent" value="yes" required className="mt-1 h-4 w-4 shrink-0 accent-olive-deep" />
            <span>I&rsquo;d like to receive The Branch by email. Every note includes a link to unsubscribe.</span>
          </label>
          <div aria-hidden className="absolute -left-[9999px] w-px h-px overflow-hidden">
            <input name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>
          {status === 'error' && (
            <p role="alert" className={clsx('font-sans text-[14px]', dark ? 'text-[#F2B8A8]' : 'text-[#9B2C1F]')}>{message}</p>
          )}
        </form>
      )}
    </div>
  );
}
