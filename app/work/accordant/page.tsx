'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Lightbox from '../../../components/Lightbox';

export default function Accordant() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Navbar pageLabel="Accordant" isProjectPage />

      <div className="wrap" style={{ '--accent': '#B62D07', '--sans': '"Plus Jakarta Sans", system-ui, sans-serif', fontFamily: 'var(--sans)' } as React.CSSProperties}>

        {/* HERO */}
        <section className="hero reveal" style={{ borderTop: 'none', paddingTop: 48 }}>
          <a className="back" href="/">Back to work</a>

          <div className="meta-row">
            <span className="pill">Passion project</span>
            <span className="pill">Speculative product</span>
            <span className="pill">UX case study</span>
            <span className="pill">March to April 2026</span>
          </div>

          <h1 className="title">Accordant</h1>
          <p className="lede">A platform that helps teams discover, compare, and confidently use design system components — through intent-based search, structured guidance, and direct integration with Figma.</p>

          <Image
            src="/images/accordant/accordant-title.png"
            alt="Accordant — Search, understand, compare, choose, insert"
            width={1200}
            height={675}
            style={{ marginTop: 48, width: '100%', display: 'block', borderRadius: 4, cursor: 'zoom-in' }}
            onClick={() => setLightboxSrc('/images/accordant/accordant-title.png')}
          />
        </section>

        {/* OVERVIEW */}
        <section className="proj-section reveal">
          <div className="eyebrow">Overview</div>
          <h2 className="proj-h2">A decision-support layer for design systems.</h2>
          <div className="two-col" style={{ marginTop: 32 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <p className="proj-p">Accordant is a speculative product that sits between a design system and the designers who actually use it. It doesn&apos;t help author components or govern a library, it helps designers find the right component, understand it, and compare it against near-alternatives at the moment of choice.</p>
              <p className="proj-p">The project spans concept, information architecture, and UI design, built around a fictional enterprise company called Stex with two active design systems.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { label: 'Type',     val: 'Passion project · Speculative product' },
                { label: 'Scope',    val: 'Concept · IA · UI design' },
                { label: 'Surfaces', val: 'Web platform · Figma plugin' },
                { label: 'Year',     val: 'March to April 2026' },
              ].map((r) => (
                <div key={r.label}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ink-2)', marginBottom: 6 }}>{r.label}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--ink)' }}>{r.val}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="proj-section reveal">
          <div className="eyebrow">Why I made this</div>
          <h2 className="proj-h2">Designers can <em>reach</em> the system. Understanding it is another story.</h2>
          <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 40 }}>
            <div>
              <h3 className="proj-h3">The moment</h3>
              <p className="proj-p" style={{ maxWidth: 'none' }}>Most of the time, choosing the right component is automatic. Designers focus on the flow, the user&apos;s mental model, and edge cases — components fall into place from memory.</p>
              <p className="proj-p" style={{ maxWidth: 'none', marginTop: 14 }}>But almost every designer hits moments where they need to <em>check</em>. And every check means leaving Figma, searching, reading, switching back, searching the library.</p>
            </div>
            <div>
              <h3 className="proj-h3">The workflow tax</h3>
              <p className="proj-p">The same act of checking guidance, repeated across a project, becomes a tax on flow. Multiplied across a team, it becomes a tax on the system itself.</p>

              <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <Image src="/images/accordant/accordant-workflow1.png" alt="Today: 9 steps across 2 windows" width={1200} height={400} style={{ width: '100%', borderRadius: 4, cursor: 'zoom-in' }} onClick={() => setLightboxSrc('/images/accordant/accordant-workflow1.png')} />
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--ink-2)' }}>9 steps, 2 windows</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: '85%', marginTop: 48 }}>
                  <span style={{ fontFamily: 'var(--sans)', fontSize: 18, color: 'var(--ink-2)' }}>With Accordant</span>
                  <Image src="/images/accordant/accordant-worfklow2.png" alt="With Accordant web platform" width={1200} height={400} style={{ width: '100%', borderRadius: 4, cursor: 'zoom-in' }} onClick={() => setLightboxSrc('/images/accordant/accordant-worfklow2.png')} />
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)' }}>3 less steps, with comprehensive understanding</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: '59%' }}>
                  <Image src="/images/accordant/accordant-workflow3.png" alt="With Accordant plugin" width={900} height={400} style={{ width: '100%', borderRadius: 4, cursor: 'zoom-in' }} onClick={() => setLightboxSrc('/images/accordant/accordant-workflow3.png')} />
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)' }}>5 less steps</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="proj-section reveal">
          <div className="eyebrow">The problem space</div>
          <h2 className="proj-h2" style={{ maxWidth: 'none' }}>Access is not the same as <em>understanding.</em></h2>
          <p className="proj-p" style={{ marginTop: 24, color: 'var(--ink)', maxWidth: 'none' }}>Designers may have access to a Figma library and documentation site — yet still struggle to answer the simplest question of all: <em style={{ fontFamily: 'var(--display)', color: 'var(--ink)', fontStyle: 'normal' }}>which component should I use here?</em></p>
          <p className="proj-p" style={{ marginTop: 14 }}>They fall back on memory, scattered docs, or team knowledge. The gap is not access — it&apos;s <strong>informed access.</strong></p>

          <div className="two-col-mobile-stack" style={{ marginTop: 32, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            <div>
              <h3 className="proj-h3">Questions they can&apos;t easily answer</h3>
              <Image src="/images/accordant/accordant-questions.png" alt="Questions designers can't easily answer" width={600} height={400} style={{ marginTop: 16, width: '100%', height: 'auto', display: 'block', borderRadius: 4, cursor: 'zoom-in' }} onClick={() => setLightboxSrc('/images/accordant/accordant-questions.png')} />
            </div>
            <div>
              <h3 className="proj-h3">What erodes when choosing is unclear</h3>
              <Image src="/images/accordant/accordant-erodes.png" alt="What erodes when choosing is unclear" width={600} height={400} style={{ marginTop: 16, width: '100%', height: 'auto', display: 'block', borderRadius: 4, cursor: 'zoom-in' }} onClick={() => setLightboxSrc('/images/accordant/accordant-erodes.png')} />
            </div>
          </div>
        </section>

        {/* RESEARCH */}
        <section className="proj-section reveal">
          <div className="eyebrow">Research</div>
          <h2 className="proj-h2">What designers <em>actually</em> struggle with.</h2>
          <p className="proj-p" style={{ marginTop: 24 }}>I coded 14 practitioner accounts published 2023–2026 using inductive thematic coding (Braun &amp; Clarke). Eight recurring themes emerged.</p>

          <div className="themes">
            {[
              { n: '01', ttl: 'Near-alternative confusion',  sub: 'Modal vs. Prompt vs. Popover' },
              { n: '02', ttl: 'Documentation hard to find',  sub: 'Or stale once they find it' },
              { n: '03', ttl: 'Components without limits',   sub: 'No "when not to use"' },
              { n: '04', ttl: 'Drift between Figma & code',  sub: 'Library and prod desync' },
              { n: '05', ttl: 'Onboarding overload',         sub: 'Steep curve for new joiners' },
              { n: '06', ttl: "Use case isn't covered",      sub: 'Bend, build custom, or wait' },
              { n: '07', ttl: 'DS team as bottleneck',       sub: 'Repeated questions, slow loop' },
              { n: '08', ttl: 'Built but unused',            sub: 'System exists, ignored' },
            ].map((r) => (
              <div className="themes-row" key={r.n}>
                <span className="t-num">{r.n}</span>
                <span className="t-ttl">{r.ttl}</span>
                <span className="t-sub">{r.sub}</span>
              </div>
            ))}
          </div>

          <h3 className="proj-h3" style={{ marginTop: 48 }}>What we learned</h3>
          <ul style={{ listStyle: 'none', padding: 0, marginTop: 24, display: 'flex', flexDirection: 'column', gap: 16, fontFamily: 'var(--sans)', fontSize: 18, color: 'var(--ink-2)', lineHeight: 1.6 }}>
            <li>— Designers think in tasks, not names. They search by intent, &ldquo;display warning&rdquo;, and not &ldquo;alert&rdquo;</li>
            <li>— Decisions live between near-alternatives</li>
            <li>— Documentation needs &ldquo;when not to use&rdquo; as much as &ldquo;when to use.&rdquo;</li>
            <li>— If guidance isn&apos;t in Figma, designers won&apos;t reach for it</li>
          </ul>
        </section>

        {/* COMPETITIVE */}
        <section className="proj-section reveal">
          <div className="eyebrow">Competitive landscape</div>
          <h2 className="proj-h2" style={{ maxWidth: 'none' }}>Most tools document and govern.<br />None help <em>decide</em> between near-alternatives at the moment of choice.</h2>

          <div className="compete">
            <div className="c" style={{ borderTopColor: '#1BC47D' }}>
              <span className="c-lbl">01 / default</span>
              <span className="c-nm">Figma library</span>
              <div className="c-row s"><b>Strength</b>Zero context switch — what designers already use.</div>
              <div className="c-row g"><b>Gap</b>Name-based search only. No comparison, no usage rules.</div>
            </div>
            <div className="c" style={{ borderTopColor: '#5C50E8' }}>
              <span className="c-lbl">02 / docs</span>
              <span className="c-nm">zeroheight</span>
              <div className="c-row s"><b>Strength</b>Strong publishing. MCP + Assistant (2026).</div>
              <div className="c-row g"><b>Gap</b>Read-first. AI returns text, not structured comparison.</div>
            </div>
            <div className="c" style={{ borderTopColor: '#FF5900' }}>
              <span className="c-lbl">03 / pivoted</span>
              <span className="c-nm">Supernova</span>
              <div className="c-row s"><b>Strength</b>Vibe coding &amp; PRD generation. Design-to-code.</div>
              <div className="c-row g"><b>Gap</b>Pivoted away from decision support — different product now.</div>
            </div>
            <div className="c me" style={{ borderTopColor: 'var(--accent)' }}>
              <span className="c-lbl">04 / decision-support</span>
              <span className="c-nm">Accordant</span>
              <div className="c-row s"><b>Strength</b>Intent search. Side-by-side comparison. Figma plugin.</div>
              <div className="c-row g"><b>Position</b>Doesn&apos;t author or govern — extends, doesn&apos;t replace.</div>
            </div>
          </div>

          <blockquote style={{ marginTop: 32, borderLeft: '2px solid var(--accent)', padding: '4px 0 4px 24px' }}>
            <p className="proj-p" style={{ fontFamily: 'var(--display)', fontWeight: 300, fontSize: 'clamp(20px,2.5vw,28px)', lineHeight: 1.35, letterSpacing: '-.02em', color: 'var(--ink)', maxWidth: '52ch' }}>Comparison is the missing primary view. Every platform sells to DS teams, but none is built for the <em style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400 }}>consumer</em> of a design system.</p>
          </blockquote>
        </section>

        {/* PRINCIPLES */}
        <section className="proj-section reveal">
          <div className="eyebrow">Design principles</div>
          <h2 className="proj-h2">Decisions, not <em>preferences.</em></h2>

          <div className="principles">
            {[
              { n: '01', t: 'Discovery should feel intuitive',    arr: '→ Browse with intent search' },
              { n: '02', t: 'Guidance appears before misuse',     arr: '→ Component detail' },
              { n: '03', t: 'Learning should be embedded',        arr: '→ Onboarding paths' },
              { n: '04', t: 'Comparison is first-class',          arr: '→ Compare as a primary surface' },
              { n: '05', t: 'Workflow matters',                   arr: '→ Figma plugin extension' },
            ].map((p) => (
              <div className="pr" key={p.n}>
                <span className="n">{p.n}</span>
                <span className="t">{p.t}</span>
                <span className="arr">{p.arr}</span>
              </div>
            ))}
          </div>
        </section>

        {/* PRODUCT */}
        <section className="proj-section reveal">
          <div className="eyebrow">The product</div>
          <h2 className="proj-h2">One product, <em>two surfaces.</em></h2>
          <p className="proj-p" style={{ marginTop: 24 }}>The browser supports depth, documentation, and onboarding. The plugin supports in-context action.</p>

          <div className="surfaces">
            <div className="surface">
              <span className="surface-label">A · Web platform — for depth</span>
              <h3>Browse the full system</h3>
              <ul>
                <li>Compare related components</li>
                <li>Learn principles &amp; onboarding</li>
                <li>View detailed component guidance</li>
              </ul>
              <Image src="/images/accordant/accordant-browse.png" alt="Accordant browse view" width={800} height={500} style={{ width: '100%', display: 'block', borderRadius: 4, cursor: 'zoom-in' }} onClick={() => setLightboxSrc('/images/accordant/accordant-browse.png')} />
            </div>
            <div className="surface">
              <span className="surface-label">B · Figma plugin — for fast in-context action</span>
              <h3>Search by intent inside Figma</h3>
              <ul>
                <li>See recommended components</li>
                <li>View quick use-case guidance</li>
                <li>Insert the best-fit component</li>
              </ul>
              <div style={{ background: 'var(--bg-2)', border: '1px solid var(--line)', borderRadius: 4, padding: 24, overflow: 'hidden' }}>
                <Image src="/images/accordant/accordant-plugin-preview.png" alt="Accordant Figma plugin" width={800} height={500} style={{ width: '100%', display: 'block', borderRadius: 4, cursor: 'zoom-in' }} onClick={() => setLightboxSrc('/images/accordant/accordant-plugin-preview.png')} />
              </div>
            </div>
          </div>
        </section>

        {/* IA */}
        <section className="proj-section reveal">
          <div className="eyebrow">Information architecture</div>
          <h2 className="proj-h2">Four areas, <em>one</em> decision flow.</h2>
          <div className="flow">
            {[
              { n: '01', t: 'Browse',   d: 'Searchable library, filter by category and intent.' },
              { n: '02', t: 'Compare',  d: 'Side-by-side view of similar or confusable patterns.' },
              { n: '03', t: 'Learn',    d: 'Onboarding, principles, and curated learning paths.' },
              { n: '04', t: 'Insights', d: 'Future: usage data and recommendation intelligence.' },
            ].map((s) => (
              <div className="flow-step" key={s.n}>
                <span className="f-num">{s.n}</span>
                <span className="f-ttl">{s.t}</span>
                <span className="f-ds">{s.d}</span>
              </div>
            ))}
          </div>
          <blockquote style={{ marginTop: 32, borderLeft: '2px solid var(--accent)', padding: '4px 0 4px 24px' }}>
            <p className="proj-p" style={{ fontFamily: 'var(--display)', fontWeight: 300, fontSize: 'clamp(20px,2.5vw,28px)', lineHeight: 1.35, letterSpacing: '-.02em', color: 'var(--ink)', maxWidth: '52ch' }}>Search → Understand → Compare → Choose → Insert</p>
          </blockquote>
        </section>

        {/* HOW IT WORKS */}
        <section className="proj-section reveal">
          <div className="eyebrow">How Accordant works</div>
          <h2 className="proj-h2" style={{ maxWidth: 'none' }}>Two surfaces. <em>Four</em> areas. One decision flow.</h2>
          <p className="proj-p" style={{ marginTop: 24 }}>The walkthrough below is set inside <em>Stex</em>, a fictional enterprise stack used as a working context for the prototype.</p>

          {/* Stex context card */}
          <div className="context-card">
            <Image
              src="/images/accordant/accordant-stex-components.png"
              alt=""
              aria-hidden
              width={1200}
              height={600}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.24, pointerEvents: 'none' }}
            />
            <div style={{ position: 'relative', display: 'flex', gap: 16, alignItems: 'baseline' }}>
              <div className="cc-lbl">Context</div>
              <div className="cc-meta">Fictional Company</div>
            </div>
            <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 48, alignItems: 'start' }}>
              <Image src="/images/accordant/accordant-stex.png" alt="Stex" width={400} height={200} style={{ width: '75%', borderRadius: 8, display: 'block', cursor: 'zoom-in' }} onClick={() => setLightboxSrc('/images/accordant/accordant-stex.png')} />
              <ul style={{ fontSize: 18 }}>
                <li>Multiple enterprise products in active development</li>
                <li>Internal tools and customer-facing workflows</li>
                <li>Two design systems: Enterprise and Mobile</li>
                <li>A growing design team working across both</li>
              </ul>
            </div>
          </div>

          {/* How it gets set up */}
          <div style={{ marginTop: 96 }}>
            <div className="eyebrow">How it gets set up</div>
            <h2 className="proj-h2" style={{ marginTop: 14, maxWidth: 'none' }}>Two ways to get started.</h2>
            <p className="proj-p" style={{ marginTop: 16 }}>Whether your design system is documented or just lived-in, Accordant meets you where you are.</p>

            <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { path: 'Path A', h: 'Connecting dots',  sub: 'For teams with existing documentation.', p: 'Connect Figma + your existing documentation. Accordant pulls components from Figma and structures your guidance against them.' },
                { path: 'Path B', h: 'Generating drafts', sub: 'For teams without formal documentation yet.', p: 'Connect Figma only. Accordant generates initial drafts of intent, usage, and comparisons — team refines from there.' },
              ].map((item) => (
                <div key={item.path} style={{ border: '1px solid var(--line)', borderRadius: 4, padding: 28, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)' }}>{item.path}</span>
                  <h3 style={{ fontFamily: 'var(--display)', fontWeight: 400, fontSize: 28, letterSpacing: '-.02em', margin: 0 }}>{item.h}</h3>
                  <p style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 15, color: 'var(--ink-2)', fontWeight: 300 }}>{item.sub}</p>
                  <p style={{ fontFamily: 'var(--sans)', fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.6 }}>{item.p}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 16, border: '1px solid var(--accent)', borderRadius: 4, padding: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)' }}>Both paths</span>
              <h3 style={{ fontFamily: 'var(--display)', fontWeight: 400, fontSize: 28, letterSpacing: '-.02em', margin: 0, color: 'var(--ink)' }}>Designers sign in to the plugin once.</h3>
            </div>
          </div>

          {/* Feature walkthroughs */}
          {[
            { num: '01 · Browse',           h3: <>Search by <em>intent</em>, not just by name.</>,               src: '/images/accordant/accordant-feature-01.mp4',  p: 'A designer searching "display warning" should not need to know the word "alert" beforehand — and can learn the names after.' },
            { num: '02 · Component detail', h3: <>Answer the questions designers <em>actually</em> ask.</>,      src: '/images/accordant/accordant-feature-2.mp4',   p: 'Each component opens to a structured page with core guidance for everyone, every time — and advanced guidance for deeper, contextual work.' },
            { num: '03 · Compare',          h3: <>Decisions live <em>between</em> near-alternatives.</>,         src: '/images/accordant/accordant-feature-03.mp4',  p: 'Comparison is treated as a primary surface, not a footnote. Place two confusable components side-by-side and see how their intent, behavior, and rules differ.' },
            { num: '04 · Learn',            h3: <>Teach through <em>use</em>, not isolated documents.</>,        src: '/images/accordant/accordant-feature-04.mp4',  p: 'Onboarding paths, system principles, and curated learning sequences embedded in the same surface designers already use to choose components.' },
            { num: '05 · Figma plugin',     h3: <>Guidance, <em>inside</em> the canvas.</>,                      src: '/images/accordant/accordant-plugin.mp4',      p: 'For fast in-context action: search by intent inside Figma, see recommended components ranked against your query, view quick use-case guidance, and insert the best-fit component without leaving the file.' },
          ].map((f) => (
            <div className="feat" key={f.num}>
              <div className="feat-copy">
                <span className="num">{f.num}</span>
                <h3>{f.h3}</h3>
                <p>{f.p}</p>
              </div>
              <video autoPlay muted loop playsInline>
                <source src={f.src} type="video/mp4" />
              </video>
            </div>
          ))}
        </section>

        {/* REFLECTION */}
        <section className="proj-section reveal" style={{ borderBottom: 'none' }}>
          <div className="eyebrow">Reflection</div>
          <h2 className="proj-h2" style={{ maxWidth: 'none' }}>The <em>library</em> isn&apos;t the product. The decision is.</h2>
          <div className="two-col">
            <p className="proj-p">Designers don&apos;t lack access — they lack a structural surface for the decision they&apos;re already making. Accordant treats <em>comparison</em> as the primary view, not an afterthought, and meets the work where it actually happens: inside Figma.</p>
            <p className="proj-p">If Figma libraries make components <em>accessible</em>, Accordant&apos;s job is to make them <em>understandable</em> — and to teach by use, not by document.</p>
          </div>

          <h3 className="proj-h3" style={{ marginTop: 64 }}>Future step</h3>
          <Image
            src="/images/accordant/accordant-next-steps.png"
            alt="Future steps"
            width={1200}
            height={600}
            style={{ marginTop: 16, width: '100%', display: 'block', borderRadius: 4, cursor: 'zoom-in' }}
            onClick={() => setLightboxSrc('/images/accordant/accordant-next-steps.png')}
          />
        </section>

        <Footer />
      </div>

      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
    </>
  );
}
