'use client';

import { useState, useTransition } from 'react';
import { clsx } from 'clsx';
import { subscribeToNewsletter } from '@/lib/actions/newsletter-signup';

interface NewsletterSignupProps {
  variant?: 'footer' | 'standalone';
}

export function NewsletterSignup({ variant = 'standalone' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    startTransition(async () => {
      const result = await subscribeToNewsletter(email);
      if (result.ok) {
        setStatus('success');
        setMessage(result.message ?? 'Thank you. Welcome to The Branch.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(result.message ?? 'Something went wrong. Please try again.');
      }
    });
  };

  const isFooter = variant === 'footer';

  return (
    <div>
      <h4
        className={clsx(
          'text-[11px] uppercase tracking-eyebrow font-medium mb-2',
          isFooter ? 'text-olive-glow' : 'text-ochre-deep'
        )}
      >
        The Branch
      </h4>
      <p
        className={clsx(
          'font-serif italic text-base mb-4 leading-relaxed',
          isFooter ? 'text-bone/70' : 'text-navy/75'
        )}
      >
        A monthly note from the house. No more than once a month.
      </p>

      {status === 'success' ? (
        <p
          className={clsx(
            'font-serif italic text-base',
            isFooter ? 'text-olive-glow' : 'text-olive'
          )}
        >
          {message}
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isPending}
            className={clsx(
              'flex-1 px-4 py-3 font-serif text-base outline-none transition-colors',
              isFooter
                ? 'bg-bone/5 border border-sky/25 text-bone placeholder-bone/40 focus:border-sky'
                : 'bg-bone border border-navy/20 text-navy placeholder-navy/40 focus:border-ochre'
            )}
          />
          <button
            type="submit"
            disabled={isPending}
            className={clsx(
              'px-6 py-3 text-[11px] uppercase tracking-caps font-medium transition-colors',
              isFooter
                ? 'bg-olive text-bone hover:bg-olive-light disabled:opacity-50'
                : 'bg-olive-deep text-bone hover:bg-olive disabled:opacity-50'
            )}
          >
            {isPending ? 'Sending…' : 'Subscribe'}
          </button>
        </form>
      )}

      {status === 'error' && (
        <p
          className={clsx(
            'font-serif italic text-sm mt-3',
            isFooter ? 'text-ochre' : 'text-ochre-deep'
          )}
        >
          {message}
        </p>
      )}
    </div>
  );
}
