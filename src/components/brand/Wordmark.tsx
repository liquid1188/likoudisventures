'use client';

import Link from 'next/link';
import { OliveBranchMark } from './OliveBranchMark';
import { clsx } from 'clsx';

interface WordmarkProps {
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
}

const sizes = {
  sm: { mark: 22, text: 'text-base' },
  md: { mark: 28, text: 'text-xl' },
  lg: { mark: 38, text: 'text-2xl' },
};

export function Wordmark({ size = 'md', href = '/', className }: WordmarkProps) {
  const config = sizes[size];

  const content = (
    <span
      className={clsx(
        'group inline-flex items-center gap-3 font-display font-medium tracking-tight transition-all',
        config.text,
        className
      )}
    >
      <span className="transition-transform duration-700 group-hover:rotate-[8deg]">
        <OliveBranchMark size={config.mark} />
      </span>
      <span className="leading-none">Likoudis Ventures</span>
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }
  return content;
}
