'use client';

import { useState, useTransition } from 'react';
import { submitInquiry } from '@/lib/actions/submit-inquiry';
import { divisions } from '@/content/divisions';

interface InquiryFormProps {
  defaultDivision?: string;
}

export function InquiryForm({ defaultDivision }: InquiryFormProps) {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      const result = await submitInquiry(formData);
      if (result.ok) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(result.message ?? 'Something went wrong. Please try again.');
      }
    });
  };

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <p className="font-serif text-2xl text-navy leading-tight mb-3">
          Thank you.
        </p>
        <p className="font-serif italic text-base text-navy/75 max-w-sm mx-auto">
          Your message is in good hands. We respond to every note, in order, by hand. Expect to hear from us within a few days.
        </p>
      </div>
    );
  }

  return (
    <form action={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="field-label">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          disabled={isPending}
          className="field-input"
          autoComplete="name"
        />
      </div>

      <div>
        <label htmlFor="email" className="field-label">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          disabled={isPending}
          className="field-input"
          autoComplete="email"
        />
      </div>

      <div>
        <label htmlFor="division" className="field-label">
          Concerning
        </label>
        <select
          id="division"
          name="division"
          required
          defaultValue={defaultDivision ?? ''}
          disabled={isPending}
          className="field-input cursor-pointer"
        >
          <option value="" disabled>
            Select a division…
          </option>
          {divisions.map((d) => (
            <option key={d.slug} value={d.slug}>
              {d.name} — {d.tagline}
            </option>
          ))}
          <option value="press">Press or media</option>
          <option value="partnership">Partnership</option>
          <option value="other">Something else</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="field-label">
          The Particulars
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          disabled={isPending}
          className="field-input resize-y min-h-[100px]"
          placeholder="Tell us what you have in mind."
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="bg-navy text-bone px-8 py-3.5 text-[11px] uppercase tracking-caps font-medium hover:bg-navy-deep transition-colors disabled:opacity-50 mt-2"
      >
        {isPending ? 'Sending…' : 'Send Inquiry →'}
      </button>

      {status === 'error' && (
        <p className="font-serif italic text-sm text-ochre-deep mt-3">{errorMessage}</p>
      )}
    </form>
  );
}
