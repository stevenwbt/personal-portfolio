'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Lightbox from '../../../components/Lightbox';

export default function DeltaDental() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    ['.friction'].forEach((sel) => {
      document.querySelectorAll(sel).forEach((el, i) => {
        el.classList.add('reveal');
        (el as HTMLElement).style.setProperty('--reveal-delay', (i * 0.07) + 's');
        io.observe(el);
      });
    });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Navbar pageLabel="Delta Dental" isProjectPage />

      <div className="wrap" style={{ '--accent': '#009a5c', '--sans': '"Plus Jakarta Sans", system-ui, sans-serif', fontFamily: 'var(--sans)' } as React.CSSProperties}>

        {/* HERO */}
        <section className="hero reveal" style={{ borderTop: 'none', paddingTop: 48 }}>
          <a className="back" href="/">Back to work</a>

          <div className="meta-row">
            <span className="pill">UX Design Intern</span>
            <span className="pill">Enterprise · B2B</span>
            <span className="pill">End-to-end enrollment</span>
            <span className="pill">Summer 2025</span>
          </div>

          <h1 className="title">Delta Dental</h1>
          <p className="lede">Delta Dental is expanding into ancillary products — but the enrollment experience hadn&apos;t kept pace. Redundant steps, unclear progress, and growing product complexity were frustrating the brokers and employers who depend on it most.</p>

          <Image
            src="/images/delta dental/deltadental-thumbnail.png"
            alt="Delta Dental — internship workspace"
            width={1200}
            height={675}
            style={{ marginTop: 48, width: '100%', display: 'block', borderRadius: 4, border: '1px solid var(--line)', cursor: 'zoom-in' }}
            onClick={() => setLightboxSrc('/images/delta dental/deltadental-thumbnail.png')}
          />
        </section>

        {/* OVERVIEW */}
        <section className="proj-section reveal">
          <div className="eyebrow">Overview</div>
          <h2 className="proj-h2">Redesigning enrollment for brokers and employers.</h2>
          <div className="two-col" style={{ marginTop: 32 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <p className="proj-p">A UX internship at Delta Dental, redesigning the broker and employer enrollment experience as the company expanded into ancillary insurance products. Growing complexity had introduced redundant steps and unclear progress — making an already demanding B2B flow harder to navigate.</p>
              <p className="proj-p">I joined a cross-functional team mid-project, owning design from discovery through developer handoff — research, wireframes, hi-fidelity screens, and usability testing.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { label: 'Type',     val: 'UX Design Internship · Enterprise B2B' },
                { label: 'Scope',    val: 'Research · Wireframes → Hi-fi · Usability testing · Dev handoff' },
                { label: 'Platform', val: 'Web platform' },
                { label: 'Year',     val: 'Summer 2025' },
              ].map((r) => (
                <div key={r.label}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ink-2)', marginBottom: 6 }}>{r.label}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--ink)' }}>{r.val}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SITUATION */}
        <section className="proj-section reveal">
          <div className="eyebrow">Situation</div>
          <h2 className="proj-h2">A growing product line. An enrollment flow that <em>didn&apos;t</em> grow with it.</h2>
          <h3 className="proj-h3" style={{ marginTop: 32 }}>The context</h3>
          <div className="two-col" style={{ marginTop: 16 }}>
            <div>
              <p className="proj-p">Delta Dental is expanding beyond dental into ancillary products — vision and other insurance offerings. This expansion meant more products, more options, and more configuration decisions layered on top of an already complex enrollment experience.</p>
            </div>
            <div>
              <p className="proj-p"><strong>Brokers and employers</strong> are the primary users responsible for enrolling groups into coverage plans. As more product lines were added, the existing flow&apos;s redundancies became harder to ignore — and harder to navigate.</p>
            </div>
          </div>

          <div className="team-grid">
            <div className="team-cell me">
              <span className="role">Me · Product Design Intern</span>
              <span className="tc-name">Steven Heng</span>
              <span className="tc-note">Research · wireframes → hi-fi · usability testing · dev handoff</span>
            </div>
            <div className="team-cell">
              <span className="role">UX Designer</span>
              <span className="tc-name">Designer 01</span>
              <span className="tc-note">Flow architecture · design review</span>
            </div>
            <div className="team-cell">
              <span className="role">UX Engineer</span>
              <span className="tc-name">Designer 02</span>
              <span className="tc-note">Design systems · review</span>
            </div>
            <div className="team-cell">
              <span className="role">PM Intern</span>
              <span className="tc-name">PM Intern</span>
              <span className="tc-note">Co-led user interviews · backlog · stakeholder alignment</span>
            </div>
            <div className="team-cell leave">
              <span className="role">UX Researcher · on leave</span>
              <span className="tc-name">Researcher</span>
              <span className="tc-note">On leave for part of the project — research conducted with PM intern</span>
            </div>
          </div>
        </section>

        {/* TASK */}
        <section className="proj-section reveal">
          <div className="eyebrow">Task</div>
          <h2 className="proj-h2">Reduce redundancy, clarify progress, and <em>accommodate</em> what&apos;s coming.</h2>
          <div className="two-col">
            <div>
              <h3 className="proj-h3">What brokers &amp; employers were running into</h3>
              <p className="proj-p">The existing enrollment flow had accumulated friction over time. Adding ancillary products didn&apos;t just expand the flow — it compounded the existing problems, making an already opaque process even harder to trust.</p>
            </div>
            <div>
              <h3 className="proj-h3">The brief</h3>
              <p className="proj-p">Redesign the <strong>end-to-end enrollment flow</strong> for both brokers and employers — reducing redundancy, clarifying where users are in the process, and building a foundation that can accommodate ancillary products without breaking the experience.</p>
            </div>
          </div>

          <div className="frictions">
            {[
              { n: '01', ttl: <>Redundant steps across <em>the flow</em></>,   p: 'Users were asked for the same information in multiple places. Without a clear sense of progress, it was hard to know what still needed to happen — or what had already been done.' },
              { n: '02', ttl: <>No sense of <em>where you are</em></>,          p: 'Enrollment involves many sequential decisions. Without a visible progress model, users couldn\'t track their position — or how much work was left.' },
              { n: '03', ttl: <>New products, <em>old structure</em></>,        p: 'Ancillary expansion added new product lines to a flow that wasn\'t designed to hold them. The result was confusing navigation and unclear branching between product types.' },
              { n: '04', ttl: <>Two user types, <em>one unclear path</em></>,  p: 'Brokers and employers have different relationships to the enrollment process but shared an undifferentiated experience — causing friction for both, for different reasons.' },
            ].map((f) => (
              <div className="friction" key={f.n}>
                <span className="f-num">{f.n}</span>
                <span className="f-ttl">{f.ttl}</span>
                <p>{f.p}</p>
              </div>
            ))}
          </div>

          <div className="hmw">
            <div className="lbl">Design question</div>
            <div className="q">How might we redesign enrollment so that brokers and employers always know <em>where they are</em>, what comes next, and can navigate a growing product offering <em>without confusion?</em></div>
          </div>
        </section>

        {/* ACTION */}
        <section className="proj-section reveal">
          <div className="eyebrow">Action</div>
          <h2 className="proj-h2" style={{ maxWidth: 'none' }}>Five phases from <em>research</em> to handoff.</h2>
          <p className="proj-p" style={{ marginTop: 24 }}>With the UX researcher on leave, the process required some improvisation — particularly during discovery. Each phase built directly on the last.</p>

          <div className="flow">
            {[
              { n: '01', t: 'Research',        d: 'User interviews conducted with PM intern. Identified key pain points despite researcher absence.' },
              { n: '02', t: 'Ideation',        d: 'Proposed stepper component with 2 designers. Mid-fi wireframes across broker and employer flows.' },
              { n: '03', t: 'Hi-fi design',    d: 'Converted wireframes into complete high-fidelity designs for the full enrollment flow.' },
              { n: '04', t: 'Usability testing', d: 'Tested hi-fi prototype, gathered findings, iterated on key friction points.' },
              { n: '05', t: 'Dev handoff',     d: 'Created design change logs to streamline communication and handoff with the dev team.' },
            ].map((s) => (
              <div className="flow-step" key={s.n}>
                <span className="f-num">{s.n}</span>
                <span className="f-ttl">{s.t}</span>
                <span className="f-ds">{s.d}</span>
              </div>
            ))}
          </div>
        </section>

        {/* REFLECTION */}
        <section className="proj-section reveal" style={{ borderBottom: 'none' }}>
          <div className="eyebrow">Reflection</div>
          <h2 className="proj-h2">A summer in <em>Seattle.</em></h2>

          <div className="two-col" style={{ marginTop: 32 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <p className="proj-p">This summer, I interned at Delta Dental of Washington on Triforza&apos;s Digital Platform Team, where I led end-to-end design of the new enrollment flow for Brokers and Employers.</p>
              <p className="proj-p">I started by breaking down the existing workflow to identify pain points, then collaborated with Brooke K. (PM Intern) to refine our user research interviews and Product Requirements Document. From there, I translated those insights into mid-fidelity and high-fidelity designs, and conducted usability testing to validate the direction.</p>
              <p className="proj-p">Before taking on the enrollment flow, I had the chance to work on other projects, including refining the Multi-Factor Authentication (MFA) experience and the Provider Claims Dashboard.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <p className="proj-p">I also worked closely with engineers based in Ireland, and initiated a design change log so teams could review updates asynchronously, on their own time. The product is currently in development, and I&apos;ll share more once it officially ships.</p>
              <div style={{ padding: '24px 28px', border: '1px solid var(--line)', borderRadius: 4, background: 'var(--bg-2)', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)' }}>Thank you</div>
                <p className="proj-p" style={{ fontSize: 15, maxWidth: 'none' }}>Grateful for this opportunity and for the chance to work alongside fellow designers, PMs, engineers, and all the stakeholders who shaped this project. A special thank you to my mentors, <strong>Jessie Brown</strong> (Designer) and <strong>Kimberly Lum</strong> (UX Marketing Manager). Lots of lessons learned, lots of caffeine involved, and a great summer in Seattle.</p>
              </div>
              <div className="team-hover-wrap">
                <Image
                  src="/images/delta dental/deltadental-pic2.jpg"
                  alt="Delta Dental — summer 2025"
                  width={800}
                  height={500}
                  style={{ width: '100%', display: 'block', cursor: 'zoom-in' }}
                  onClick={() => setLightboxSrc('/images/delta dental/deltadental-pic2.jpg')}
                />
                <div className="team-hover-overlay">Digital Platform Team!</div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
    </>
  );
}
