'use client';

import { useState, useTransition } from 'react';
import { subscribeToNewsletter } from '@/lib/actions/newsletter-signup';

interface NotifyFormProps {
  divisionName: string;
  divisionSlug: string;
}

/**
 * Lightweight signup form for forthcoming divisions.
 * Subscribes the email to the newsletter audience and tags it with the division of interest.
 *
 * For now, it uses the same audience as The Branch (Phase 4 will add a tag for the specific division).
 */
export function NotifyForm({ divisionName, divisionSlug }: NotifyFormProps) {
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
        setMessage(`Thank you. We will write when ${divisionName} is ready.`);
        setEmail('');
      } else {
        setStatus('error');
        setMessage(result.message ?? 'Something went wrong. Please try again.');
      }
    });
  };

  if (status === 'success') {
    return (
      <div className="bg-cream p-8 lg:p-10 max-w-xl">
        <p className="font-serif text-2xl text-navy leading-tight mb-3">Thank you.</p>
        <p className="font-serif italic text-base text-navy/75">{message}</p>
      </div>
    );
  }

  return (
    <div className="bg-cream p-8 lg:p-10 max-w-xl">
      <h3 className="font-serif text-2xl text-navy mb-3 leading-tight">
        Be the first to know.
      </h3>
      <p className="font-serif italic text-base text-navy/75 mb-6">
        Leave your email and we will write when {divisionName} opens — once, and for nothing else.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor={`notify-email-${divisionSlug}`} className="field-label">
            Your Email
          </label>
          <input
            type="email"
            id={`notify-email-${divisionSlug}`}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isPending}
            className="field-input"
            autoComplete="email"
          />
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="bg-navy text-bone px-7 py-3 text-[11px] uppercase tracking-caps font-medium hover:bg-navy-deep transition-colors disabled:opacity-50"
        >
          {isPending ? 'Sending…' : 'Notify Me →'}
        </button>
      </form>
      {status === 'error' && (
        <p className="font-serif italic text-sm text-ochre-deep mt-3">{message}</p>
      )}
    </div>
  );
}
