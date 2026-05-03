import Link from 'next/link';
import { OliveBranchMark } from './OliveBranchMark';
import { clsx } from 'clsx';

interface WordmarkProps {
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
}

const sizes = {
  sm: { mark: 22, text: 'text-lg' },
  md: { mark: 30, text: 'text-2xl' },
  lg: { mark: 40, text: 'text-3xl' },
};

export function Wordmark({ size = 'md', href = '/', className }: WordmarkProps) {
  const config = sizes[size];

  const content = (
    <span className={clsx('inline-flex items-center gap-3.5 font-serif font-medium tracking-tight', config.text, className)}>
      <OliveBranchMark size={config.mark} />
      <span>Likoudis Ventures</span>
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block transition-opacity hover:opacity-80">
        {content}
      </Link>
    );
  }

  return content;
}
