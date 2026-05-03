import Link from 'next/link';
import { OliveBranchMark } from '@/components/brand/OliveBranchMark';

export default function NotFound() {
  return (
    <section className="ground-navy min-h-[70vh] flex items-center">
      <div className="container-tight text-center py-20">
        <div className="text-sky mb-8 flex justify-center">
          <OliveBranchMark size={56} />
        </div>
        <h1 className="font-serif text-display-lg text-bone mb-6">
          Lost in the <em className="italic text-sky">groves</em>.
        </h1>
        <p className="font-serif italic text-xl text-bone/75 max-w-md mx-auto mb-10">
          The page you were looking for is not here. Try the front door.
        </p>
        <Link href="/" className="btn-primary">
          Return Home →
        </Link>
      </div>
    </section>
  );
}
