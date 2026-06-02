'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Lightbox from '../../../components/Lightbox';

export default function Recycloop() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    document.querySelectorAll('.rl-feature').forEach((el, i) => {
      el.classList.add('reveal');
      (el as HTMLElement).style.setProperty('--reveal-delay', (i * 0.08) + 's');
      io.observe(el);
    });
    document.querySelectorAll('.stat-block').forEach((el, i) => {
      el.classList.add('reveal');
      (el as HTMLElement).style.setProperty('--reveal-delay', (i * 0.07) + 's');
      io.observe(el);
    });
    document.querySelectorAll('.learn-item').forEach((el, i) => {
      el.classList.add('reveal');
      (el as HTMLElement).style.setProperty('--reveal-delay', (i * 0.08) + 's');
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Navbar pageLabel="Recycloop" isProjectPage />

      <div className="wrap" style={{ '--accent': '#1a6b3a', '--sans': '"Plus Jakarta Sans", system-ui, sans-serif', fontFamily: 'var(--sans)' } as React.CSSProperties}>
        {/* HERO */}
        <section className="hero reveal" style={{ borderTop: 'none', paddingTop: 48 }}>
          <a className="back" href="/">Back to work</a>

          <div className="meta-row">
            <span className="pill">Mobile design</span>
            <span className="pill">Business case</span>
            <span className="pill">UX Designer · Branding</span>
            <span className="pill">February 2024</span>
          </div>

          <h1 className="title">Recycloop</h1>
          <p className="lede">The U.S. recycling system is broken by inconsistency — rules vary by city, contamination rates are high, and most people simply don&apos;t know what goes where. Recycloop is a mobile platform that fixes that with AI, rewards, and a circular marketplace.</p>

          <div className="recycloop-hero-canvas">
            <Image
              src="/images/recycloop/recycloop-onboarding.webp"
              alt="Recycloop app screens"
              width={1200}
              height={700}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="proj-section reveal">
          <div className="eyebrow">Overview</div>
          <h2 className="proj-h2">Turning recycling confusion into confident, rewarded action.</h2>
          <div className="two-col" style={{ marginTop: 32 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <p className="proj-p">Recycloop is an innovative mobile platform that champions the recycling movement for future generations. The mission centers on nurturing a sustainability culture that benefits both humanity and the earth — by making the right choice the easy choice.</p>
              <p className="proj-p">The app encourages users to break down items into recyclable raw materials for nearby drop-off stations, converting collected materials into reward points as tangible incentives for sustainable behavior.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { label: 'Type',    val: 'Mobile design · Business case' },
                { label: 'Scope',   val: 'UX design · Branding · Icon design' },
                { label: 'Context', val: 'UW Environmental Innovation Challenge' },
                { label: 'Year',    val: 'February 2024' },
              ].map((r) => (
                <div key={r.label}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ink-2)', marginBottom: 6 }}>{r.label}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--ink)' }}>{r.val}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CHALLENGE */}
        <section className="proj-section reveal">
          <div className="eyebrow">The challenge</div>
          <h2 className="proj-h2">People want to recycle. The system makes it nearly impossible.</h2>
          <div className="two-col">
            <div>
              <h3 className="proj-h3">The gap</h3>
              <p className="proj-p">The U.S. recycling system suffers from <strong>consumer confusion due to inconsistent recycling policies across regions</strong>, causing high contamination rates, operational inefficiencies, and cascading environmental and economic impacts.</p>
              <p className="proj-p">Many individuals lack the knowledge and tools needed to participate effectively — resulting in improper disposal and chronically underutilized recycling programs.</p>
            </div>
            <div>
              <h3 className="proj-h3">The brief</h3>
              <p className="proj-p">Design a unified, accessible recycling platform that <em>educates consumers on location-specific rules</em>, reduces confusion and contamination, and promotes sustainable behaviors through meaningful incentives.</p>
            </div>
          </div>

          <div className="hmw">
            <div className="lbl">How might we statement</div>
            <div className="q">How might we create a <em>unified recycling platform</em> that educates consumers on local rules, reduces contamination, and promotes <em>sustainable behaviors</em>?</div>
          </div>
        </section>

        {/* RESEARCH */}
        <section className="proj-section reveal">
          <div className="eyebrow">Research foundation</div>
          <h2 className="proj-h2">The intent to recycle is there. The infrastructure to support it isn&apos;t.</h2>
          <p className="proj-p" style={{ marginTop: 24 }}>Americans broadly support recycling — but the system consistently fails them through complexity, inconsistency, and a lack of feedback. These numbers show the size of the gap between intention and action.</p>

          <div className="stats-grid">
            {[
              { pct: '94%', src: 'The Recycling Partnership · National Survey',         text: 'of Americans say they support recycling — yet only a fraction recycle correctly, revealing a massive gap between intent and informed action.' },
              { pct: '25%', src: 'Waste Management · Contamination Report',             text: 'of materials placed in recycling bins are contaminated. One wrong item can render an entire batch unrecyclable, costing municipalities millions annually.' },
              { pct: '62%', src: 'Ipsos · Consumer Recycling Behavior Study',           text: 'of consumers are confused about which plastics can be recycled — the single most cited barrier to participation across all demographic groups.' },
              { pct: '3×',  src: 'Nielsen · Sustainability Incentives Research',        text: 'more likely to adopt a sustainable behavior consistently when a reward or tangible incentive is attached — validating the points-based model at Recycloop\'s core.' },
            ].map((s, i) => (
              <div className="stat-block" key={i}>
                <div className="pct">{s.pct}</div>
                <div className="src">{s.src}</div>
                <p>{s.text}</p>
              </div>
            ))}
          </div>

          <Image
            src="/images/recycloop/recycloop-solution.avif"
            alt="Recycloop solution overview"
            width={1200}
            height={600}
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 4, marginTop: 48, cursor: 'zoom-in' }}
            onClick={() => setLightboxSrc('/images/recycloop/recycloop-solution.avif')}
          />
        </section>

        {/* FEATURES */}
        <section className="proj-section reveal">
          <div className="eyebrow">Design</div>
          <h2 className="proj-h2">Three systems that close the loop between intent and action.</h2>

          <div className="rl-features">
            {/* Feature 1 */}
            <div className="rl-feature">
              <div className="rl-body">
                <span className="lbl">01 · AI sorting assistance</span>
                <h3 className="proj-h3">Scan it. Know instantly.</h3>
                <p className="proj-p" style={{ fontSize: 14 }}>Image recognition identifies any item and tells users exactly whether it&apos;s recyclable at their location — eliminating the guesswork that causes contamination in the first place.</p>
              </div>
              <div className="rl-img">
                <Image src="/images/recycloop/recycloop-feature1.webp" alt="AI sorting feature" width={1200} height={600} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 4, cursor: 'zoom-in' }} onClick={() => setLightboxSrc('/images/recycloop/recycloop-feature1.webp')} />
              </div>
            </div>

            {/* Feature 2 — side by side */}
            <div className="rl-feature" style={{ flexDirection: 'row', alignItems: 'center', gap: 64 }}>
              <div className="rl-body" style={{ flex: 1, minWidth: 0 }}>
                <span className="lbl">02 · ChatBot assistance</span>
                <h3 className="proj-h3">When recycling isn&apos;t an option, repurpose.</h3>
                <p className="proj-p" style={{ fontSize: 14 }}>The AI assistant surfaces creative reuse suggestions for items that can&apos;t be recycled conventionally — shifting user mindset from disposal to circular thinking.</p>
              </div>
              <div style={{ flex: 2, minWidth: 0 }}>
                <Image src="/images/recycloop/recycloop-feature2.webp" alt="Recycloobot chatbot feature" width={800} height={500} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 4, cursor: 'zoom-in' }} onClick={() => setLightboxSrc('/images/recycloop/recycloop-feature2.webp')} />
              </div>
            </div>

            {/* Feature 3 */}
            <div className="rl-feature">
              <div className="rl-body">
                <span className="lbl">03 · Secondhand marketplace</span>
                <h3 className="proj-h3">One person&apos;s waste is someone&apos;s resource.</h3>
                <p className="proj-p" style={{ fontSize: 14 }}>A B2B and C2C marketplace connects individuals with businesses and peers to buy and sell recycled materials — giving waste economic value and keeping materials in circulation longer.</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div>
                  <Image src="/images/recycloop/recycloop-feature3.webp" alt="B2B marketplace" width={1200} height={600} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 4, cursor: 'zoom-in' }} onClick={() => setLightboxSrc('/images/recycloop/recycloop-feature3.webp')} />
                  <p style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--ink-2)', marginTop: 10, maxWidth: 'none' }}>B2B Marketplace</p>
                </div>
                <div>
                  <Image src="/images/recycloop/recycloop-feature3b.webp" alt="C2C marketplace" width={900} height={500} style={{ width: '75%', height: 'auto', display: 'block', borderRadius: 4, cursor: 'zoom-in' }} onClick={() => setLightboxSrc('/images/recycloop/recycloop-feature3b.webp')} />
                  <p style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--ink-2)', marginTop: 10, maxWidth: 'none' }}>C2C Marketplace</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LEARNINGS */}
        <section className="proj-section reveal" style={{ borderBottom: 'none' }}>
          <div className="eyebrow">What I learned</div>
          <h2 className="proj-h2">Embedding sustainability into daily life starts with removing friction.</h2>
          <div className="learn">
            <div className="col">
              <p>This project came out of the University of Washington&apos;s 2024 Environmental Innovation Challenge. As the sole UX Designer, I directed the full creative vision — from designing the logo to crafting custom organic-feeling icons that aligned with Recycloop&apos;s ethos.</p>
              <p style={{ marginTop: 14 }}>The most important realization: <em>people don&apos;t fail to recycle because they don&apos;t care</em> — they fail because the system punishes good intentions with confusion and zero feedback.</p>
            </div>
            <div className="col">
              <p>Designing around behavior change rather than feature delivery shaped every decision. The rewards system, the AI scanner, and the marketplace aren&apos;t separate features — they form a single loop: scan, act, earn, repeat.</p>
              <p style={{ marginTop: 14 }}>The next iteration would explore community-level impact dashboards — <em>neighborhood recycling leaderboards</em> that make collective progress as visible as individual effort.</p>
            </div>
          </div>

          <div className="learn-list" style={{ marginTop: 48 }}>
            {[
              { n: '01', h: 'Friction is the', em: 'real problem', p: 'Every design decision was stress-tested against one question: does this add steps or remove them? The AI scanner exists precisely because looking up recycling rules is the step people skip.' },
              { n: '02', h: 'Incentives change', em: 'habits',      p: 'Intrinsic motivation alone isn\'t enough for sustained behavior change. The points system provides the external loop that bridges intention and action until the habit forms on its own.' },
              { n: '03', h: 'Branding as',     em: 'trust',        p: 'Designing the logo and icon set wasn\'t decoration — it was a core UX decision. Organic, approachable visuals signal that this is a tool for everyone, not an environmental guilt machine.' },
              { n: '04', h: 'Systems over',    em: 'screens',      p: 'The three solutions — AI sorting, chatbot, marketplace — only work because they reinforce each other. Designing them as a connected system, not isolated features, was the hardest and most important call.' },
            ].map((l) => (
              <div className="learn-item" key={l.n}>
                <span className="num">{l.n}</span>
                <h3>{l.h} <em>{l.em}</em></h3>
                <p>{l.p}</p>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </div>

      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
    </>
  );
}
