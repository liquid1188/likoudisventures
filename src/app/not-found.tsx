import Link from 'next/link';
import { OliveBranchMark } from '@/components/brand/OliveBranchMark';

export default function NotFound() {
  return (
    <section className="ground-navy min-h-[70vh] flex items-center">
      <div className="container-tight text-center py-24">
        <div className="text-olive-glow mb-6 flex justify-center">
          <OliveBranchMark size={48} />
        </div>
        <h1 className="font-display text-display-lg text-bone mb-4">Page not found</h1>
        <p className="font-sans text-[17px] text-bone/75 max-w-md mx-auto mb-8">The page you were looking for isn&rsquo;t here.</p>
        <Link href="/" className="btn-olive-on-dark">Go to the homepage</Link>
      </div>
    </section>
  );
}
