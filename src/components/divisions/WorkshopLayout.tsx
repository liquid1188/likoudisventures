import Link from 'next/link';
import type { Division } from '@/content/divisions';
import { PageHero, SectionHeading } from '@/components/sections/PageHero';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { InquiryForm } from '@/components/forms/InquiryForm';

const areas = [
  { name: 'Research & Analysis', text: 'Background research, organizational assessments, industry research, briefing materials, and preparation for decisions or new initiatives.' },
  { name: 'Communications & Editorial Work', text: 'Writing, editing, publication planning, messaging, outreach materials, and assistance with external communications.' },
  { name: 'Nonprofit & Organizational Support', text: 'Fundraising communications, donor stewardship processes, organizational planning, program support, and administrative improvements.' },
  { name: 'Business Development & Strategy', text: 'Market research, positioning, outreach planning, and practical support for small businesses developing new initiatives.' },
];

/**
 * Earlier work, done as a fellow or staff member at these institutions before
 * Likoudis Ventures existed. None of these institutions are clients.
 */
const priorWork = [
  {
    year: '2022',
    title: 'Research on procurement access for small businesses',
    where: 'Johns Hopkins University, with Julep Consulting and Bloomberg Philanthropies',
    role: 'Fellow, Economic Development, Johns Hopkins University',
    text: 'Research for the OneStop initiative on how university procurement could be made more accessible to small businesses. Andrew compiled the findings in a research workbook and drafted a policy memo with observations and recommendations, which opened a presentation to Bloomberg Philanthropies leadership in July 2022.',
  },
  {
    year: '2022',
    title: 'Federal contracting research and outreach',
    where: 'TargetGov, through Goldman Sachs 10,000 Small Businesses',
    role: 'Fellow, Marketing Development, Goldman Sachs 10,000 Small Businesses',
    text: 'Marketing and business development support for a firm specializing in federal procurement: expanding the client and contracting databases, researching federal opportunities, and supporting pipeline outreach.',
  },
  {
    year: '2023',
    title: 'Development operations for a capital campaign',
    where: 'Cathedral of Mary Our Queen, Baltimore',
    role: 'Development Administrative Assistant (staff)',
    text: 'Communications, donation tracking, grant writing, compliance, and database management for a $5 million capital campaign.',
  },
];

export function WorkshopLayout({ division }: { division: Division }) {
  return (
    <>
      <PageHero
        kicker={division.name}
        greek={division.greek}
        title="A second set of eyes can be useful."
        status="Developing. Selected inquiries welcome."
        actions={<Link href="#contact" className="btn-olive-on-dark">Discuss a Project</Link>}
      >
        <p>The Workshop provides research, consulting, and practical support for businesses, nonprofit organizations, and individuals working through particular projects or decisions.</p>
        <p>Our experience is strongest in communications, publishing, economic development, nonprofit operations, and organizational research.</p>
        <p>We take on selected projects where that background can be useful.</p>
      </PageHero>

      <section className="ground-bone section">
        <div className="container-editorial">
          <SectionHeading
            title="Areas of work"
            intro={
              <p>
                Websites and practical digital systems are handled by{' '}
                <a href="https://lickitysplitweb.com/technology-consulting" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Lickity Split</a>. The Workshop takes on research, communications, planning, and organizational work.
              </p>
            }
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {areas.map((a) => (
              <div key={a.name} className="border-t border-navy/15 pt-5">
                <h3 className="font-display text-2xl text-navy">{a.name}</h3>
                <p className="font-sans text-[16px] text-navy/80 leading-relaxed mt-3">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ground-cream section">
        <div className="container-editorial">
          <SectionHeading
            title="Experience behind the work"
            intro={
              <>
                <p>Andrew&rsquo;s professional background includes a fellowship in economic development at Johns Hopkins University, participation in Goldman Sachs 10,000 Small Businesses, completion of McKinsey&rsquo;s Forward program, and development operations at the Cathedral of Mary Our Queen in Baltimore.</p>
                <p>His other work includes publishing, editorial leadership, and nonprofit administration.</p>
                <p>These experiences preceded or exist independently of Likoudis Ventures. They inform the consulting services offered through the Workshop.</p>
              </>
            }
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {priorWork.map((w, i) => (
              <ScrollReveal key={w.title} delay={i * 60}>
                <article className="bg-bone/70 border border-navy/10 p-6 lg:p-7 h-full">
                  <p className="font-sans text-[14px] text-olive-deep">{w.year} · {w.where}</p>
                  <h3 className="font-display text-xl text-navy leading-snug mt-2">{w.title}</h3>
                  <p className="font-sans text-[15px] text-navy/80 leading-relaxed mt-3">{w.text}</p>
                  <p className="font-sans text-[14px] text-navy/60 mt-4 pt-4 border-t border-navy/10">Role: {w.role}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
          <p className="font-sans text-[14px] text-navy/60 mt-6 max-w-3xl">
            This work was done as a fellow or staff member at the institutions named, before Likoudis Ventures was formed. They are not clients of Likoudis Ventures.
          </p>
          <figure className="mt-12 max-w-3xl border-l-2 border-olive-deep pl-6">
            <blockquote className="font-serif text-[21px] lg:text-[23px] leading-[1.5] text-navy">
              &ldquo;Andrew was a thoughtful and dependable collaborator. He took initiative, engaged seriously with the work, and consistently delivered quality research and analysis.&rdquo;
            </blockquote>
            <figcaption className="font-sans text-[15px] text-navy/70 mt-3">Rick Little, Principal, Julep Consulting (a past supervisor)</figcaption>
          </figure>
        </div>
      </section>

      <section className="ground-bone section">
        <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <p className="status-note">A project in development</p>
            <h2 className="font-display text-display-md text-navy leading-tight mt-3">The Likoudis Collection</h2>
            <p className="font-sans text-[17px] text-navy/80 leading-relaxed mt-4">
              We&rsquo;re also exploring a small collection of selected objects, including books, ceramics, decorative pieces, and other items of particular interest.
            </p>
            <p className="font-sans text-[17px] text-navy/80 leading-relaxed mt-4">
              This is a developing project rather than an open retail catalogue. We will share more as specific objects and sourcing arrangements become available.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link href="/collection" className="btn-outline">Explore the Collection</Link>
          </div>
        </div>
      </section>

      <section id="contact" className="ground-cream section scroll-mt-20">
        <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="font-display text-display-lg text-navy leading-tight">Tell us about the project.</h2>
            <p className="font-sans text-[17px] text-navy/80 leading-relaxed mt-5">
              A short description of what you need, the relevant background, and your intended timeline is enough to begin. We&rsquo;ll let you know whether the Workshop is a suitable fit.
            </p>
            <p className="font-sans text-[15px] text-navy/60 mt-5">There are no fixed consulting rates. Each project is quoted according to its scope.</p>
          </div>
          <div className="lg:col-span-7">
            <InquiryForm defaultTopic="The Workshop" submitLabel="Contact the Workshop" />
          </div>
        </div>
      </section>
    </>
  );
}
