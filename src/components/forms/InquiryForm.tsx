'use client';

import { useState, useTransition } from 'react';
import { submitInquiry } from '@/lib/actions/submit-inquiry';
import { inquiryTopics, site } from '@/content/site';

interface InquiryFormProps {
  /** Pre-selected topic, e.g. 'The Workshop'. Visitors can always change it. */
  defaultTopic?: string;
  submitLabel?: string;
}

export function InquiryForm({ defaultTopic = 'General Inquiry', submitLabel = 'Send Message' }: InquiryFormProps) {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [isPending, startTransition] = useTransition();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    startTransition(async () => {
      const result = await submitInquiry(data);
      if (result.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setMessage(result.message ?? `Your message could not be sent. Please write to us directly at ${site.email}.`);
      }
    });
  };

  if (status === 'success') {
    return (
      <div role="status" className="border-l-2 border-olive-deep pl-5 py-2">
        <p className="font-display text-2xl text-navy mb-2">Message sent.</p>
        <p className="font-sans text-[17px] text-navy/80">
          Thanks for getting in touch. Your message has been sent, and we&rsquo;ll reply as soon as we can.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate={false}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="inq-name" className="field-label">Name</label>
          <input id="inq-name" name="name" type="text" required maxLength={120} autoComplete="name" className="field-input" />
        </div>
        <div>
          <label htmlFor="inq-email" className="field-label">Email address</label>
          <input id="inq-email" name="email" type="email" required maxLength={254} autoComplete="email" className="field-input" />
        </div>
      </div>

      <div>
        <label htmlFor="inq-topic" className="field-label">What is this about?</label>
        <select id="inq-topic" name="topic" defaultValue={defaultTopic} className="field-input">
          {inquiryTopics.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="inq-message" className="field-label">Message</label>
        <textarea id="inq-message" name="message" required rows={6} maxLength={5000} className="field-input resize-y" />
      </div>

      {/* Leave empty. Hidden from people; catches automated spam. */}
      <div aria-hidden className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <label htmlFor="inq-website">Website</label>
        <input id="inq-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === 'error' && (
        <p role="alert" className="font-sans text-[15px] text-[#9B2C1F]">
          {message}
        </p>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <button type="submit" disabled={isPending} className="btn-primary disabled:opacity-60">
          {isPending ? 'Sending…' : submitLabel}
        </button>
        <p className="font-sans text-[14px] text-navy/65">
          Or write to <a href={`mailto:${site.email}`} className="underline underline-offset-2">{site.email}</a>
        </p>
      </div>
    </form>
  );
}
