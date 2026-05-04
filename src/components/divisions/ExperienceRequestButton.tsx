'use client';

interface ExperienceRequestButtonProps {
  experienceSlug: string;
  label?: string;
}

/**
 * Small client island for the "Request this experience" button on the
 * Ithaca House experience cards. Sets ?experience= on the URL (without a
 * full reload) and smooth-scrolls to the inquiry form, which reads the
 * query param and pre-fills its message field with a booking-request
 * template tailored to the chosen experience.
 */
export function ExperienceRequestButton({
  experienceSlug,
  label = 'Request this experience',
}: ExperienceRequestButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Update the URL with the experience query param, preserving the rest
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('experience', experienceSlug);
      url.hash = '';
      window.history.replaceState({}, '', url.toString());
      // Dispatch a popstate so the form re-reads its preset (it uses
      // useEffect that runs once on mount; we trigger a custom event to
      // force a re-mount of the textarea via the key prop)
      window.dispatchEvent(new Event('experience-changed'));
    }
    const target = document.getElementById('inquiry');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <a
      href={`?experience=${experienceSlug}#inquiry`}
      onClick={handleClick}
      className="inline-flex items-center gap-2 mt-5 font-sans text-[10px] uppercase tracking-caps text-ochre-deep hover:text-navy border-b border-ochre-deep/40 hover:border-navy pb-1 transition-colors"
    >
      {label} <span aria-hidden>→</span>
    </a>
  );
}
