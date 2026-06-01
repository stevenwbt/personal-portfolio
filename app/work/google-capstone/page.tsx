'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export default function GoogleCapstone() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightboxSrc(null); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightboxSrc ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxSrc]);

  return (
    <>
      <Navbar pageLabel="Google" isProjectPage />

      <div className="wrap" style={{ '--accent': '#E8630A', '--sans': '"Plus Jakarta Sans", system-ui, sans-serif', fontFamily: 'var(--sans)' } as React.CSSProperties}>

        {/* HERO */}
        <section className="hero reveal" style={{ borderTop: 'none' }}>
          <div className="meta-row">
            <span className="pill">Capstone · Google</span>
            <span className="pill">Team · Ceteras</span>
            <span className="pill">Role · Product Design + Research</span>
            <span className="pill live">Year · January 2025 to June 2025</span>
          </div>

          <h1 className="title">Google Android Security</h1>
          <p className="lede">A capstone project with Google automating Android security patch porting — using LLMs and agentic workflows to cut patch deployment time by 83%, from 30 minutes to 5 minutes per vulnerability.</p>

          <div className="nda-wrap" style={{ marginTop: 48 }}>
            <Image
              src="/images/google/google-thumbnail-blurred.png"
              alt="Google Android Security — patch porting automation"
              width={1200}
              height={675}
              style={{ width: '100%', display: 'block' }}
            />
            <div className="nda-overlay"><span>Redacted for NDA</span></div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="proj-section reveal">
          <div className="eyebrow">Overview</div>
          <h2 className="proj-h2">Automating Android security patch porting with LLMs.</h2>
          <div className="two-col" style={{ marginTop: 32 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <p className="proj-p">Google Android Security is a capstone project developed in partnership with Google, addressing the time-intensive and error-prone process of backporting security patches across the Android ecosystem. The system uses LLMs and agentic workflows to automate what engineers previously resolved by hand.</p>
              <p className="proj-p">Built by team Ceteras — Carolyn Chen, Enrico Pratama, Eugene Wongso, and Theophila Setiawan — through the UW iSchool capstone program.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ink-2)', marginBottom: 6 }}>Team</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--ink)', display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span>Carolyn Chen</span>
                  <span>Enrico Pratama</span>
                  <span>Eugene Wongso</span>
                  <span>Theophila Setiawan</span>
                </div>
              </div>
              {[
                { label: 'Partner', val: 'Google × UW iSchool' },
                { label: 'My role', val: 'Product Design · Research · Product Engineer' },
                { label: 'Year',    val: 'January 2025 to June 2025' },
              ].map((r) => (
                <div key={r.label}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ink-2)', marginBottom: 6 }}>{r.label}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--ink)' }}>{r.val}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="proj-section reveal">
          <div className="eyebrow">The problem</div>
          <h2 className="proj-h2">Security patch backporting is slow, manual, and <em style={{ color: 'var(--accent)' }}>inconsistent.</em></h2>
          <div className="two-col" style={{ marginTop: 32 }}>
            <p className="proj-p">In the Android ecosystem, security patches developed upstream must be ported to dozens of downstream branches maintained by OEM partners. Tools like git cherry-pick handle simple cases, but many patches require manual resolution due to structural or API differences — a process that averages 30 minutes per vulnerability.</p>
            <p className="proj-p">This manual effort slows patch deployment, increases the risk of inconsistent security coverage across devices, and places a heavy recurring burden on engineers across OEM partners at scale.</p>
          </div>

          <div className="stat-grid" style={{ marginTop: 48 }}>
            <div className="stat-block-g"><span className="n">30<em>min</em></span><span className="l">average time per patch, manually</span></div>
            <div className="stat-block-g"><span className="n">128<em>×</em></span><span className="l">Android downstream versions tested</span></div>
            <div className="stat-block-g"><span className="n">262</span><span className="l">merge conflicts evaluated</span></div>
          </div>
        </section>

        {/* SOLUTION */}
        <section className="proj-section reveal">
          <div className="eyebrow">Solution</div>
          <h2 className="proj-h2">A four-stage automated <em style={{ color: 'var(--accent)' }}>pipeline.</em></h2>
          <p className="proj-p" style={{ marginTop: 24 }}>The pipeline ingests Vanir vulnerability reports and runs them through a sequential pipeline — parsing, applying, fixing, and validating — so engineers receive a ready-to-merge patch rather than a conflict to resolve by hand.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: 'var(--line)', border: '1px solid var(--line)', borderRadius: 4, overflow: 'hidden', marginTop: 48 }}>
            {[
              { n: '01', t: 'Vanir Parser',  d: 'Parses Vanir reports into structured format for pipeline processing.' },
              { n: '02', t: 'Patch Adopter', d: 'Applies upstream diffs to downstream Android codebases for all vulnerabilities.' },
              { n: '03', t: 'LLM',           d: 'Fixes failed patches using code context and iterative refinement with agentic workflows.' },
              { n: '04', t: 'Validation',    d: 'Checks patch correctness via automated build and test.' },
            ].map((s) => (
              <div key={s.n} style={{ background: 'var(--bg)', padding: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)' }}>{s.n}</span>
                <span style={{ fontFamily: 'var(--display)', fontWeight: 500, fontSize: 18, letterSpacing: '-.015em', color: 'var(--ink)' }}>{s.t}</span>
                <span style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.5 }}>{s.d}</span>
              </div>
            ))}
          </div>
        </section>

        {/* EVALUATION */}
        <section className="proj-section reveal">
          <div className="eyebrow">Evaluation</div>
          <h2 className="proj-h2">Tested across <em style={{ color: 'var(--accent)' }}>128</em> downstream versions.</h2>
          <div className="two-col" style={{ marginTop: 32 }}>
            <div>
              <p className="proj-p" style={{ marginBottom: 24 }}>Evaluated against 262 merge conflicts using a multi-dimensional metrics suite to measure patch quality and similarity to ground-truth human-resolved patches.</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { h: 'Length metrics',  d: 'Characters, tokens, lines' },
                  { h: 'Edit distance',   d: 'Token-level edit distance' },
                  { h: 'Similarity',      d: 'Normalized edit similarity, cosine similarity, CodeBERT similarity' },
                  { h: 'Manual handcheck', d: 'Human verification of patch correctness' },
                ].map((m) => (
                  <li key={m.h} style={{ fontFamily: 'var(--sans)', fontSize: 16, color: 'var(--ink-2)' }}><strong style={{ color: 'var(--ink)', fontWeight: 500 }}>{m.h}</strong> — {m.d}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="quote">
                <div className="q">Reduced average patch-porting time from <em>~30 min to ~5 min</em> per vulnerability.</div>
                <div className="src">Key result · ±83% efficiency gain</div>
              </div>
            </div>
          </div>
        </section>

        {/* DESIGN PROCESS */}
        <section className="proj-section reveal">
          <div className="eyebrow">Design process</div>
          <h2 className="proj-h2">Translating workflow into <em style={{ color: 'var(--accent)' }}>GUI.</em></h2>

          <Image
            src="/images/google/google-workflow.png"
            alt="10-stage patch-porting workflow diagram"
            width={1200}
            height={600}
            className="zoomable"
            onClick={() => setLightboxSrc('/images/google/google-workflow.png')}
            style={{ marginTop: 32, width: '100%', display: 'block', borderRadius: 4, border: '1px solid var(--line)' }}
          />

          <div className="two-col" style={{ marginTop: 48 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <p className="proj-p">Before designing any screens, I mapped the full workflow as ten distinct stages — from vulnerability ingestion through to patch validation. Laying them out sequentially made visible what the system was actually doing at each step, and where decisions were made by rules versus by the model.</p>
              <p className="proj-p">Translating that into the GUI meant treating each stage as its own card in a stepper — scoped, legible, and unambiguous about what action, if any, the engineer needed to take.</p>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ink-2)', marginBottom: 16 }}>Step types</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  { color: 'oklch(0.52 0.13 240)', label: 'Deterministic', desc: 'Rule-based steps with predictable, traceable outputs.' },
                  { color: 'var(--accent)',         label: 'AI-driven',     desc: 'Model-driven steps requiring reasoning over code context.' },
                ].map((s) => (
                  <div key={s.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: 16, border: '1px solid var(--line)', borderRadius: 4, background: 'var(--bg-2)' }}>
                    <div style={{ width: 10, height: 10, borderRadius: 2, background: s.color, flex: 'none', marginTop: 3 }} />
                    <div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--ink)', marginBottom: 4 }}>{s.label}</div>
                      <div style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.5 }}>{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="quote" style={{ marginTop: 40 }}>
            <div className="q">Each card answered one question: what does the engineer need to know, and what do they need to be able to do, at this exact step?</div>
          </div>
        </section>

        {/* INTERFACE */}
        <section className="proj-section reveal">
          <div className="eyebrow">The interface</div>
          <h2 className="proj-h2">Three principles behind <em style={{ color: 'var(--accent)' }}>every screen.</em></h2>

          <div className="nda-wrap">
            <Image
              src="/images/google/google-gui.png"
              alt="GUI stepper interface for patch porting"
              width={1200}
              height={675}
              style={{ width: '100%', display: 'block' }}
            />
            <div className="nda-overlay"><span>Redacted for NDA</span></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'var(--line)', border: '1px solid var(--line)', borderRadius: 4, overflow: 'hidden', marginTop: 48 }}>
            {[
              { n: '01', t: 'Transparency',      d: 'Each stage surfaced what the system was doing and why — the CVE being processed, conflict type detected, model selected, strategy applied. Nothing happened off-screen.' },
              { n: '02', t: 'Familiar workflow', d: 'The stepper mirrored the mental model engineers already had for patch porting — a structured version of their existing process, not a new one to learn.' },
              { n: '03', t: 'Always oriented',   d: 'A progress indicator at each card showed the exact step (4 of 8, 5 of 8) with status colors and timing — so engineers always knew what had finished, what was running, and what was next.' },
            ].map((p) => (
              <div key={p.n} style={{ background: 'var(--bg)', padding: '28px 32px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)' }}>{p.n}</span>
                <span style={{ fontFamily: 'var(--display)', fontWeight: 500, fontSize: 22, letterSpacing: '-.02em', color: 'var(--ink)' }}>{p.t}</span>
                <span style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.6 }}>{p.d}</span>
              </div>
            ))}
          </div>
        </section>

        {/* USABILITY TESTING */}
        <section className="proj-section reveal">
          <div className="eyebrow">Usability testing</div>
          <h2 className="proj-h2">Tested against three principles. <em style={{ color: 'var(--accent)' }}>Then pivoted.</em></h2>

          <div className="two-col" style={{ marginTop: 32 }}>
            <p className="proj-p">We ran usability testing sessions with Android security engineers, evaluating the GUI against the three design principles that guided every screen. The sessions confirmed what the design was doing right — and surfaced a more fundamental problem with the medium itself.</p>
            <div className="quote">
              <div className="q">The GUI checked every box. But engineers live in the terminal — and pulling them out of it created friction no interface could fix.</div>
            </div>
          </div>

          <div style={{ marginTop: 48, border: '1px solid var(--line)', borderRadius: 4, overflow: 'hidden' }}>
            {[
              { n: '01', t: 'Transparency',        d: 'Each stage exposed what the system was doing and why — the specific CVE being processed, the conflict type detected, the model selected, and the strategy applied. Nothing happened off-screen.' },
              { n: '02', t: 'Staying close',        d: 'The stepper mirrored the mental model engineers already had for patch porting, so the tool felt like a structured version of their existing process rather than a new one to learn.' },
              { n: '03', t: 'Visualizing progress', d: 'A progress indicator at the top of each card showed exactly which step (4 of 8, 5 of 8) the system was on — with status colors and timing, so engineers always knew what had finished, what was running, and what was next.' },
            ].map((row, i, arr) => (
              <div key={row.n} style={{ display: 'grid', gridTemplateColumns: '52px 180px 1fr', borderBottom: i < arr.length - 1 ? '1px solid var(--line)' : 'none' }}>
                <div style={{ padding: '24px 16px', borderRight: '1px solid var(--line)', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)' }}>{row.n}</div>
                <div style={{ padding: 24, borderRight: '1px solid var(--line)', fontFamily: 'var(--display)', fontWeight: 500, fontSize: 17, letterSpacing: '-.015em', color: 'var(--ink)', display: 'flex', alignItems: 'flex-start' }}>{row.t}</div>
                <div style={{ padding: 24, fontFamily: 'var(--sans)', fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.6 }}>{row.d}</div>
              </div>
            ))}
          </div>

          <div className="ip-strip" style={{ marginTop: 40 }}>
            <div>
              <div className="ip-lbl">The pivot</div>
              <div className="ip-msg">Engineers who tested the tool lived in their terminal — switching into a GUI interrupted that flow, no matter how well-designed. We rebuilt the interface as a CLI, and the tool finally felt like it belonged in their workflow.</div>
            </div>
          </div>
        </section>

        {/* REFLECTION */}
        <section className="proj-section reveal">
          <div className="eyebrow">Reflection</div>
          <h2 className="proj-h2">Good design is meeting people inside the workflows <em style={{ color: 'var(--accent)' }}>they already trust.</em></h2>
          <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 24 }}>
            <p className="proj-p" style={{ maxWidth: 'none' }}>When I first took this role, I was genuinely excited because this would be the first time I&apos;d work on the technical side of a project. I got to explore LLM prompting, feed context into the model to shape desired outputs for our AI tooling, and contribute to designing our evaluation metrics. Working closely with the same technology I&apos;d been using every day, but now from the inside, was fascinating.</p>
            <p className="proj-p" style={{ maxWidth: 'none' }}>Early on, I designed a graphical user interface for our end users (Android security engineers), assuming a visual tool would make patch porting more approachable. But after gathering feedback, we pivoted to a command-line interface, because that was the environment they already lived in. Learning to build a CLI was a technical lift, but the bigger lesson was about design itself: <span style={{ background: 'color-mix(in oklch,var(--accent) 18%,transparent)', padding: '1px 4px', borderRadius: 3 }}>good design isn&apos;t about introducing something better in the abstract; it&apos;s about meeting people inside the workflows they already trust.</span> A polished GUI that pulls an engineer out of their terminal creates friction, no matter how well-crafted it looks.</p>
            <p className="proj-p" style={{ maxWidth: 'none' }}>This reframed how I think about AI tooling more broadly. When the underlying system is a black box, like an LLM making patch decisions, familiarity in the surrounding interface becomes a form of transparency. Engineers could read our tool&apos;s output, trace its reasoning, and intervene in the same environment where they&apos;d normally review a diff. The CLI didn&apos;t just match their habits; it made the AI feel legible, like another tool in their pipeline rather than a separate system asking for their trust.</p>
          </div>
        </section>

        {/* NEXT STEPS */}
        <section className="proj-section reveal" style={{ borderBottom: 'none' }}>
          <div className="eyebrow">What&apos;s next</div>
          <h2 className="proj-h2">Research paper, further development, <em style={{ color: 'var(--accent)' }}>open sourcing.</em></h2>
          <div className="two-col" style={{ marginTop: 32 }}>
            <p className="proj-p">The team is working toward publishing a research paper on the approach and results, continuing development of the pipeline, and open sourcing the tool so the broader Android security community can build on it.</p>
            <p className="proj-p">For me, this project deepened my understanding of where design sits in systems-level engineering work — how to contribute meaningfully to a technically complex product without losing sight of the human judgment that still matters at each step.</p>
          </div>
        </section>

        <Footer />
      </div>

      {/* Lightbox */}
      {lightboxSrc && (
        <div className="lightbox open" onClick={() => setLightboxSrc(null)}>
          <button className="lightbox-close" onClick={() => setLightboxSrc(null)}>Close ✕</button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={lightboxSrc} alt="Zoomed view" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
}
