'use client';

import { useState, useTransition } from 'react';
import { unlockAdmin } from '@/lib/actions/admin-auth';
import { OliveBranchMark } from '@/components/brand/OliveBranchMark';

export function AdminUnlockForm() {
  const [error, setError] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    setError('');
    startTransition(async () => {
      const result = await unlockAdmin(formData);
      // If unlockAdmin didn't redirect, it failed
      if (result && !result.ok) {
        setError(result.message ?? 'Unable to unlock.');
      }
    });
  };

  return (
    <div className="min-h-[80vh] flex items-center">
      <div className="container-tight">
        <div className="max-w-md mx-auto bg-cream p-10 lg:p-12 text-center">
          <div className="text-ochre mb-6 flex justify-center">
            <OliveBranchMark size={42} />
          </div>
          <h1 className="font-serif text-3xl text-navy mb-3">
            The <em className="italic text-ochre-deep">Branch</em>
          </h1>
          <p className="font-serif italic text-base text-navy/70 mb-8">
            Compose and send the monthly note from the house.
          </p>

          <form action={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="password" className="field-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                disabled={isPending}
                autoFocus
                className="field-input text-center"
              />
            </div>
            <button
              type="submit"
              disabled={isPending}
              className="bg-navy text-bone px-7 py-3 text-[11px] uppercase tracking-caps font-medium hover:bg-navy-deep transition-colors disabled:opacity-50 w-full"
            >
              {isPending ? 'Unlocking…' : 'Unlock →'}
            </button>
          </form>

          {error && (
            <p className="font-serif italic text-sm text-ochre-deep mt-5">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
}
