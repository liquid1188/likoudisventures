import { clsx } from 'clsx';

interface GreekSubtitleProps {
  greek: string;
  transliteration?: string;
  showTransliteration?: boolean;
  className?: string;
}

/**
 * Renders a Greek subtitle in italic ochre script.
 * Used under division names on subpage headers and occasionally in the wordmark area.
 */
export function GreekSubtitle({
  greek,
  transliteration,
  showTransliteration = false,
  className,
}: GreekSubtitleProps) {
  return (
    <span className={clsx('font-serif italic text-ochre tracking-normal', className)}>
      {greek}
      {showTransliteration && transliteration && (
        <span className="text-ochre/70 ml-2 text-[0.85em]">({transliteration})</span>
      )}
    </span>
  );
}
