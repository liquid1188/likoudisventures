import { site } from '@/content/site';

export function TopRule() {
  return (
    <div className="bg-navy-deep text-olive-glow text-[11px] uppercase tracking-eyebrow text-center py-2.5 px-6">
      {site.topRule}
      <span className="text-ochre normal-case font-serif italic tracking-normal text-sm mx-2">
        — with roots in {site.greekRoot}
      </span>
    </div>
  );
}
