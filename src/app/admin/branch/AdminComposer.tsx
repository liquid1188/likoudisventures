'use client';

import { useState, useTransition } from 'react';
import { sendNewsletter } from '@/lib/actions/send-newsletter';
import { logoutAdmin } from '@/lib/actions/admin-auth';

interface AdminComposerProps {
  resendConfigured: boolean;
}

export function AdminComposer({ resendConfigured }: AdminComposerProps) {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [confirmSend, setConfirmSend] = useState(false);
  const [status, setStatus] = useState<{ ok: boolean; message: string } | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSend = () => {
    if (!subject.trim() || !body.trim()) {
      setStatus({ ok: false, message: 'Subject and body are required.' });
      return;
    }

    if (!confirmSend) {
      setConfirmSend(true);
      return;
    }

    startTransition(async () => {
      setStatus(null);
      const result = await sendNewsletter({ subject, body });
      setStatus({ ok: result.ok, message: result.message ?? (result.ok ? 'Sent.' : 'Failed.') });
      if (result.ok) {
        setSubject('');
        setBody('');
        setConfirmSend(false);
      }
    });
  };

  const wordCount = body.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="container-tight py-12 lg:py-16 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-10 pb-6 border-b border-navy/15">
        <div>
          <div className="text-[11px] uppercase tracking-eyebrow text-ochre-deep mb-1">
            Compose
          </div>
          <h1 className="font-serif text-3xl text-navy">
            The <em className="italic text-ochre-deep">Branch</em>
          </h1>
        </div>
        <form action={logoutAdmin}>
          <button
            type="submit"
            className="text-[11px] uppercase tracking-eyebrow text-navy/60 hover:text-navy transition-colors"
          >
            Lock →
          </button>
        </form>
      </div>

      {/* Resend warning if not configured */}
      {!resendConfigured && (
        <div className="bg-ochre/10 border border-ochre/30 p-5 mb-8">
          <p className="font-serif italic text-base text-ochre-deep">
            <strong className="not-italic">Resend is not configured.</strong> Set <code className="font-sans text-sm">RESEND_API_KEY</code> and <code className="font-sans text-sm">RESEND_AUDIENCE_ID</code> in your environment to enable sending.
          </p>
        </div>
      )}

      {/* Compose form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="space-y-5">
            <div>
              <label htmlFor="subject" className="field-label">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                disabled={isPending}
                placeholder="The first note from the house"
                className="field-input"
                maxLength={200}
              />
              <p className="text-xs text-navy/50 mt-1">{subject.length}/200</p>
            </div>

            <div>
              <label htmlFor="body" className="field-label">
                Body
              </label>
              <textarea
                id="body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                disabled={isPending}
                rows={20}
                placeholder="Write the note here. Paragraphs are separated by blank lines.&#10;&#10;Plain text only. Formatting is added automatically when sent — you do not need to write HTML."
                className="field-input resize-y min-h-[400px] !text-base !leading-relaxed"
              />
              <p className="text-xs text-navy/50 mt-1">
                {wordCount} word{wordCount === 1 ? '' : 's'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                onClick={() => setShowPreview(!showPreview)}
                disabled={isPending || !subject || !body}
                className="px-6 py-3 border border-navy text-navy text-[11px] uppercase tracking-caps font-medium hover:bg-navy hover:text-bone transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                {showPreview ? 'Hide Preview' : 'Show Preview'}
              </button>
              <button
                onClick={handleSend}
                disabled={isPending || !subject || !body || !resendConfigured}
                className="px-6 py-3 bg-olive-deep text-bone text-[11px] uppercase tracking-caps font-medium hover:bg-olive transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                {isPending
                  ? 'Sending…'
                  : confirmSend
                    ? 'Confirm Send →'
                    : 'Send to All Subscribers →'}
              </button>
              {confirmSend && !isPending && (
                <button
                  onClick={() => setConfirmSend(false)}
                  className="px-6 py-3 text-[11px] uppercase tracking-caps text-navy/60 hover:text-navy transition-colors"
                >
                  Cancel
                </button>
              )}
            </div>

            {status && (
              <div
                className={
                  status.ok
                    ? 'bg-olive/10 border border-olive/40 p-4 font-serif italic text-base text-olive'
                    : 'bg-ochre/10 border border-ochre/40 p-4 font-serif italic text-base text-ochre-deep'
                }
              >
                {status.message}
              </div>
            )}
          </div>
        </div>

        {/* Preview pane */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="text-[11px] uppercase tracking-eyebrow text-navy/60 mb-3">
            Preview
          </div>
          {showPreview && subject && body ? (
            <div className="border border-navy/15 bg-cream">
              <div className="bg-navy-deep text-olive-glow text-[10px] tracking-caps uppercase text-center py-3">
                The Branch · Likoudis Ventures
              </div>
              <div className="bg-bone p-8">
                <div className="text-[10px] uppercase tracking-eyebrow text-ochre-deep mb-3">
                  A Note From the House
                </div>
                <h2 className="font-serif text-2xl text-navy mb-5 leading-tight">{subject}</h2>
                <div className="border-t border-ochre/30 pt-5 space-y-4 font-serif text-base leading-relaxed text-navy/90">
                  {body
                    .trim()
                    .split(/\n\n+/)
                    .filter(Boolean)
                    .map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                </div>
                <div className="border-t border-ochre/30 mt-6 pt-4 font-serif italic text-sm text-ochre-deep">
                  — The brothers, Baltimore
                </div>
              </div>
              <div className="bg-navy-deep text-bone/60 p-5 text-xs">
                <div className="italic mb-1">© Likoudis Legacy LLC, dba Likoudis Ventures.</div>
                <div className="italic text-ochre">ἐκ Κεφαλονιάς</div>
              </div>
            </div>
          ) : (
            <div className="bg-cream/50 border border-navy/10 p-12 text-center">
              <p className="font-serif italic text-base text-navy/50">
                Preview appears here when subject and body are filled.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
