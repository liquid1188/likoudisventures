import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { OliveBranchMark } from '@/components/brand/OliveBranchMark';

export const metadata: Metadata = {
  title: 'The Likoudis Legacy Foundation',
  description:
    'A separate Catholic ecumenical research institute, founded by Andrew Likoudis. Distinct from Likoudis Ventures in mission, governance, and finances.',
};

export default function FoundationPage() {
  return (
    <>
      <Hero
        eyebrow="Related Work"
        title={
          <>
            The Likoudis Legacy
            <br />
            <em className="italic text-sky">Foundation</em>.
          </>
        }
        lede="A separate Catholic research institute carrying forward the ecumenical work of James Likoudis (1928–2024) — Andrew's grandfather, a lifelong scholar of Catholic-Orthodox reunion."
        sectionNumber="§ Related"
      />

      {/* What it is — the relationship explained clearly */}
      <section className="ground-cream py-24 lg:py-32">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 max-w-5xl mx-auto">
            <ScrollReveal as="div" className="lg:col-span-3">
              <div className="catalog-num text-sm mb-3">§ I.</div>
              <div className="eyebrow text-ochre-deep mb-5">The relationship</div>
            </ScrollReveal>
            <ScrollReveal as="div" delay={150} className="lg:col-span-9">
              <h2 className="font-display text-display-xl text-navy mb-10 leading-tight">
                A separate house, <em className="italic text-ochre-deep">a shared name</em>.
              </h2>
              <div className="prose-editorial">
                <p>
                  The Likoudis Legacy Foundation is a Catholic research institute Andrew Likoudis founded in 2024, the year of his grandfather's death, to carry forward his grandfather's lifelong scholarship in Catholic-Orthodox ecumenism.
                </p>
                <p>
                  The Foundation operates under its own governance, with its own advisory council of theologians and scholars, its own donors, and its own books. It is a distinct entity from Likoudis Ventures. The two share a family — they do not share commercial activity, financial flows, board members, or marketing.
                </p>
                <p>
                  Why the two are separate: the work is different in kind. The Foundation publishes scholarship; Likoudis Ventures sells goods and services. Mixing the two would be bad for both. Andrew runs both, the family supports both, and we keep the books cleanly apart on principle.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What the Foundation does */}
      <section className="ground-bone py-24 lg:py-32">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 max-w-5xl mx-auto">
            <ScrollReveal as="div" className="lg:col-span-3">
              <div className="catalog-num text-sm mb-3">§ II.</div>
              <div className="eyebrow text-ochre-deep mb-5">What the Foundation does</div>
            </ScrollReveal>
            <ScrollReveal as="div" delay={150} className="lg:col-span-9">
              <h2 className="font-display text-display-lg text-navy mb-10 leading-tight">
                Scholarship, education, ecumenism.
              </h2>
              <ul className="divide-y divide-navy/10">
                <ProgramRow
                  number="01"
                  title="The Kydones Review"
                  description="A peer-reviewed academic journal of Catholic-Orthodox ecumenical scholarship. Named for the 14th-century Greek scholar Demetrios Kydones, an early figure in Catholic-Orthodox reunion."
                />
                <ProgramRow
                  number="02"
                  title="Tradition & Renewal"
                  description="A Substack publication offering daily roundups, analysis, and commentary on the Church's living tradition and reform."
                />
                <ProgramRow
                  number="03"
                  title="The LLF Reading Circle"
                  description="A guided reading program in classic and contemporary works of Catholic ecclesiology and ecumenism."
                />
                <ProgramRow
                  number="04"
                  title="Fellowships and conferences"
                  description="Including co-sponsorship of the annual Orientale Lumen Conference, a gathering of Catholic and Orthodox bishops, theologians, and lay scholars."
                />
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* External link / CTA */}
      <section className="ground-navy py-24 lg:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(143, 166, 125, 0.08) 0%, transparent 65%)',
          }}
        />
        <div className="container-editorial relative">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="text-olive-glow mb-8 flex justify-center">
                <OliveBranchMark size={50} />
              </div>
              <div className="catalog-num text-sm mb-2">§ III.</div>
              <div className="eyebrow text-olive-glow mb-7 inline-block">Visit the Foundation</div>
              <h2 className="font-display text-display-xl text-bone mb-7 leading-tight">
                The Foundation lives at its <em className="italic text-sky">own address</em>.
              </h2>
              <p className="font-serif text-lg lg:text-xl text-bone/85 leading-relaxed mb-10 max-w-2xl mx-auto">
                For the Foundation's publications, programs, governance, donor information, and direct ways to engage with its work, visit the Foundation's site directly.
              </p>
              <a
                href="https://likoudislegacy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-olive-on-dark inline-flex items-center gap-2"
              >
                <span>likoudislegacy.com</span>
                <span aria-hidden>↗</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Legal/clarity footer band */}
      <section className="ground-bone py-16 lg:py-20 border-t border-navy/10">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-serif italic text-base lg:text-lg text-navy/65 leading-relaxed">
              The Likoudis Legacy Foundation is an independent Catholic research institute. Its operations, finances, and governance are entirely separate from Likoudis Ventures (a Maryland LLC). Donations to the Foundation support the Foundation's charitable mission only; purchases from Likoudis Ventures do not benefit the Foundation, and vice versa.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

interface ProgramRowProps {
  number: string;
  title: string;
  description: string;
}

function ProgramRow({ number, title, description }: ProgramRowProps) {
  return (
    <li className="grid grid-cols-[40px_1fr] gap-6 py-5 lg:py-6 items-baseline">
      <span className="catalog-num text-base">{number}</span>
      <div>
        <div className="font-display text-xl lg:text-2xl text-navy mb-1.5">{title}</div>
        <p className="font-serif text-base lg:text-lg text-navy/80 leading-relaxed">
          {description}
        </p>
      </div>
    </li>
  );
}
