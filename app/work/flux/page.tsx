'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Lightbox from '../../../components/Lightbox';

export default function Flux() {
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
      <Navbar pageLabel="FLUX" isProjectPage />

      <div className="wrap" style={{ '--accent': '#7C3AED', '--sans': '"Plus Jakarta Sans", system-ui, sans-serif', fontFamily: 'var(--sans)' } as React.CSSProperties}>

        {/* HERO */}
        <section className="hero reveal" style={{ borderTop: 'none', paddingTop: 48 }}>
          <a className="back" href="/">Back to work</a>

          <div className="meta-row">
            <span className="pill">Personal project</span>
            <span className="pill">Mobile design</span>
            <span className="pill">UX Designer · Researcher</span>
            <span className="pill">February to April 2025</span>
          </div>

          <h1 className="title">FLUX</h1>
          <p className="lede">Remote teams struggle with scattered communication, timezone confusion, notification overload, and no single place to track work. FLUX is a unified, human-centered platform that brings clarity, connection, and control back to distributed workflows — without overwhelming users with complexity.</p>

          <Image
            src="/images/flux/flux-thumbnail.png"
            alt="FLUX — async productivity dashboard"
            width={1200}
            height={675}
            style={{ marginTop: 48, width: '100%', display: 'block', borderRadius: 4, border: '1px solid var(--line)', cursor: 'zoom-in' }}
            onClick={() => setLightboxSrc('/images/flux/flux-thumbnail.png')}
          />
        </section>

        {/* OVERVIEW */}
        <section className="proj-section reveal">
          <div className="eyebrow">Overview</div>
          <h2 className="proj-h2">A unified platform for distributed teams.</h2>
          <div className="two-col" style={{ marginTop: 32 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <p className="proj-p">FLUX is a personal project exploring what a human-centered productivity platform could look like for remote teams — one that brings together communication, scheduling, and task tracking without the noise that most async tools accumulate.</p>
              <p className="proj-p">The project spans user research, information architecture, and mobile UI design, built around the core tension between staying connected and staying focused across timezones.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { label: 'Type',     val: 'Personal project · Web design' },
                { label: 'Scope',    val: 'Research · IA · UI design · Prototype' },
                { label: 'Platform', val: 'Web design' },
                { label: 'Year',     val: 'February to April 2025' },
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
          <h2 className="proj-h2" style={{ maxWidth: 'none' }}>As remote work became the norm, every tool got <em style={{ color: 'var(--accent)' }}>louder</em> and the work got <em style={{ color: 'var(--accent)' }}>quieter.</em></h2>
          <div className="two-col">
            <div>
              <h3 className="proj-h3">The friction</h3>
              <p className="proj-p">Distributed teams shared a common set of problems: <strong>scattered communications, timezone confusion, fragmented tools,</strong> and <strong>inconsistent documentation.</strong> Project updates were lost across multiple platforms, important context buried in long chat logs, and scheduling meetings across time zones often led to miscommunication.</p>
            </div>
            <div>
              <h3 className="proj-h3">The brief</h3>
              <p className="proj-p">Design a unified, human-centered platform that could bring <em>clarity</em>, <em>connection</em>, and <em>control</em> back to remote workflows — without overwhelming users with complexity.</p>
            </div>
          </div>

          <div className="hmw">
            <div className="lbl">How might we statement</div>
            <div className="q">How might we design a centralized platform that promotes <em>clarity</em>, fosters authentic <em>connection</em>, and empowers remote teams with <em>control</em> over their communication, collaboration, and time?</div>
          </div>
        </section>

        {/* RESEARCH */}
        <section className="proj-section reveal">
          <div className="eyebrow">Research</div>
          <h2 className="proj-h2">Eight remote professionals.<br /><em style={{ color: 'var(--accent)' }}>Four</em> recurring frictions.</h2>
          <p className="proj-p" style={{ marginTop: 24 }}>I interviewed eight remote professionals across product, design, marketing, and engineering. Several core themes emerged.</p>

          <div className="insights">
            {[
              { num: '01', ttl: <>Scattered comms = <em>mental fatigue</em></>, p: 'Juggling multiple platforms for chat, meetings, and task updates drains focus and increases the risk of missing key information.' },
              { num: '02', ttl: <>Timezones = <em>constant friction</em></>, p: 'Scheduling across time zones creates delays and misunderstandings, often leading to missed updates or late responses.' },
              { num: '03', ttl: <>Threads get long = <em>threads get lost</em></>, p: 'In most tools, threaded discussions grow unwieldy over time, making it difficult to trace decisions, find context, or onboard new collaborators.' },
              { num: '04', ttl: <>AI, if transparent = <em>useful</em></>, p: 'Users wanted features like summarization or task extraction — but were cautious about automation that felt opaque or uncontrollable.' },
            ].map((item) => (
              <div className="insight" key={item.num}>
                <span className="num">{item.num}</span>
                <span className="ttl">{item.ttl}</span>
                <p>{item.p}</p>
              </div>
            ))}
          </div>
        </section>

        {/* COMPETITIVE */}
        <section className="proj-section reveal">
          <div className="eyebrow">Competitive landscape</div>
          <h2 className="proj-h2">Slack, Notion, Teams.<br />None do <em style={{ color: 'var(--accent)' }}>all three.</em></h2>
          <p className="proj-p" style={{ marginTop: 24 }}>A review of existing tools revealed a clear gap in solutions that effectively balance asynchronous clarity, human connection, and centralized control — especially for distributed teams. Slack, Notion, and Teams each address parts of the remote workflow, but none offer a seamless experience across communication, task management, and timezone coordination.</p>
          <p className="proj-p">FLUX is uniquely positioned to fill this gap by integrating <strong>Smart Threads</strong>, <strong>Timezone Awareness</strong>, and a built-in calling and support system — delivering on the core values of clarity, connection, and control.</p>

          <Image
            src="/images/flux/flux-competitiveanalysis.png"
            alt="Competitive analysis matrix"
            width={1200}
            height={600}
            style={{ marginTop: 40, width: '100%', display: 'block', borderRadius: 4, border: '1px solid var(--line)', cursor: 'zoom-in' }}
            onClick={() => setLightboxSrc('/images/flux/flux-competitiveanalysis.png')}
          />

          <div className="ccc">
            {[
              { lbl: 'Value 01', nm: <><em>Clarity</em></>, p: 'Cut through scattered tools and noise. Surface what matters first.' },
              { lbl: 'Value 02', nm: <><em>Connection</em></>, p: 'Make async feel human — across time zones, threads, and screens.' },
              { lbl: 'Value 03', nm: <><em>Control</em></>, p: 'Keep the human in the loop. AI assists; people decide.' },
            ].map((v) => (
              <div className="ccc-v" key={v.lbl}>
                <span className="lbl">{v.lbl}</span>
                <span className="nm">{v.nm}</span>
                <p>{v.p}</p>
              </div>
            ))}
          </div>
        </section>

        {/* IA */}
        <section className="proj-section reveal">
          <div className="eyebrow">Information architecture</div>
          <h2 className="proj-h2">Four pages, one <em style={{ color: 'var(--accent)' }}>async-first</em> rhythm.</h2>
          <p className="proj-p" style={{ marginTop: 24 }}>FLUX is organized around four main pages. Each section branches into key features that support remote teams in managing async clarity, centralized control, and meaningful collaboration.</p>

          <div className="ia">
            {[
              { num: '01', ttl: 'Dashboard', ds: 'Central hub surfacing key activity across channels, meetings, and notes.' },
              { num: '02', ttl: 'Channels',  ds: 'Deep async communication via threaded discussions, tagging, and filtering.' },
              { num: '03', ttl: 'Meetings',  ds: 'Scheduling, participation management, and post-call summarization.' },
              { num: '04', ttl: 'Notes',     ds: 'Consolidate meeting outcomes with linked threads and actionable insights.' },
            ].map((s) => (
              <div className="ia-step" key={s.num}>
                <span className="num">{s.num}</span>
                <span className="ttl">{s.ttl}</span>
                <span className="ds">{s.ds}</span>
              </div>
            ))}
          </div>
        </section>

        {/* DESIGN */}
        <section className="proj-section reveal">
          <div className="eyebrow">Design</div>
          <h2 className="proj-h2">Six interactions that make async <em style={{ color: 'var(--accent)' }}>feel</em> intentional.</h2>

          <div className="features">
            {[
              { num: '01 · AI-summarized thread',  h3: 'Show summary, in one tap.',                           src: '/images/flux/flux-feature1.mp4', p: 'When a discussion becomes lengthy or complex, users tap "Show Summary" to instantly surface a concise recap of the key points — without losing the underlying thread.' },
              { num: '02 · Update thread status',  h3: 'Move work forward without writing a recap.',          src: '/images/flux/flux-feature2.mp4', p: 'Set thread status — Open, In review, Resolved — so collaborators see the state of a conversation at a glance, no scroll-back required.' },
              { num: '03 · Contextual note sharing', h3: 'Quote the doc, not your memory of it.',             src: '/images/flux/flux-feature3.mp4', p: 'Highlight content from docs or notes and share it in chat as a clickable reference — keeping discussions traceable and source-linked.' },
              { num: '04 · Timezone hover',        h3: "Your teammate's timezone to your timezone.",          src: '/images/flux/flux-feature4.mp4', p: 'Shows a teammate\'s local time on hover, making cross-timezone coordination effortless and unobtrusive.' },
              { num: '05 · Sync to thread',        h3: 'Centralize the conversation, keep the context.',     src: '/images/flux/flux-feature5.mp4', p: 'Bring specific chat messages into a thread so teams can centralize discussion history. Context isn\'t lost across channels.' },
              { num: '06 · Meetings to notes',     h3: 'Capture the call without losing your voice.',        src: '/images/flux/flux-feature6.mp4', p: 'Captures meeting discussions into linked, summarized notes with key points and action items. Users can disable AI summarization anytime, maintaining human control and verification.' },
            ].map((f) => (
              <div className="feature" key={f.num}>
                <div className="preview" style={{ minHeight: 'unset', padding: 0 }}>
                  <video autoPlay muted loop playsInline>
                    <source src={f.src} type="video/mp4" />
                  </video>
                </div>
                <div className="f-body">
                  <span className="lbl">{f.num}</span>
                  <h3>{f.h3}</h3>
                  <p>{f.p}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LEARNINGS */}
        <section className="proj-section reveal" style={{ borderBottom: 'none' }}>
          <div className="eyebrow">What I learned</div>
          <h2 className="proj-h2">Async work isn&apos;t just <em style={{ color: 'var(--accent)' }}>productive</em> — it&apos;s <em style={{ color: 'var(--accent)' }}>emotional.</em></h2>
          <div className="learn">
            <div className="col">
              <p>FLUX was deeply personal — built from my own experience working remotely during my second internship. I realized how often things get lost across tools, time zones, and threads.</p>
              <p style={{ marginTop: 14 }}>Through this project I learned to design for <em>asynchronous team dynamics</em>, prioritize <em>clarity and focus</em>, and balance <em>AI support with human control</em>.</p>
            </div>
            <div className="col">
              <p>A professor I tested with suggested incorporating team &ldquo;pulse&rdquo; features — a reminder that even in async environments, emotional insight and alignment matter just as much as productivity.</p>
              <p style={{ marginTop: 14 }}>The next iteration of FLUX would lean further into that signal: not more tools, but more <em>care</em> embedded in the ones that already exist.</p>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
    </>
  );
}
