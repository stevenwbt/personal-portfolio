'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Lightbox from '../../../components/Lightbox';

export default function CosmicDrift() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    document.querySelectorAll('.feature-card').forEach((el, i) => {
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
      <Navbar pageLabel="Cosmic Drift" isProjectPage />

      <div className="wrap" style={{ '--sans': '"Plus Jakarta Sans", system-ui, sans-serif', fontFamily: 'var(--sans)' } as React.CSSProperties}>
        {/* HERO */}
        <section className="hero reveal" style={{ borderTop: 'none', paddingTop: 48 }}>
          <a className="back" href="/">Back to work</a>

          <div className="meta-row">
            <span className="pill">Personal project</span>
            <span className="pill">Mobile design</span>
            <span className="pill">UX Designer · Researcher</span>
            <span className="pill">September 2024</span>
          </div>

          <h1 className="title">Cosmic Drift</h1>
          <p className="lede">Spotify users accumulate playlists that anchor songs to life moments — but have no way to revisit those memories by date or mood. Cosmic Drift is a mobile feature that turns a listening history into a navigable emotional archive.</p>

          <div className="hero-canvas">
            <div className="stars" />
            <div className="glow" />
            <div className="glow2" />
            <Image
              className="hero-phones"
              src="/images/spotify/spotify-thumbnail.webp"
              alt="Cosmic Drift app screens"
              width={800}
              height={600}
              style={{ height: '115%', width: 'auto' }}
            />
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="proj-section reveal">
          <div className="eyebrow">Overview</div>
          <h2 className="proj-h2">Turning a listening history into an emotional archive.</h2>
          <div className="two-col" style={{ marginTop: 32 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <p className="proj-p">Cosmic Drift is a concept feature for Spotify that lets users navigate their music history by time and mood rather than playlist name. It addresses a quiet gap in how streaming platforms handle personal memory — the music is there, but the context is locked.</p>
              <p className="proj-p">The project spans user research, information architecture, and mobile UI design, grounded in the emotional relationship people have with songs tied to specific life moments.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { label: 'Type',     val: 'Personal project · Mobile design' },
                { label: 'Scope',    val: 'Research · IA · UI design' },
                { label: 'Platform', val: 'Mobile (iOS concept)' },
                { label: 'Year',     val: 'September 2024' },
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
          <h2 className="proj-h2">You remember the feeling. Spotify doesn&apos;t know <em>when</em> to take you back.</h2>
          <div className="two-col">
            <div>
              <h3 className="proj-h3">The gap</h3>
              <p className="proj-p">Spotify users build playlists that tie songs to specific life moments — but the platform offers no mechanism to revisit those memories chronologically or by emotional state. <strong>The archive exists. The navigation doesn&apos;t.</strong></p>
              <p className="proj-p">There&apos;s no way to ask: &quot;What was I listening to the summer before senior year?&quot; or &quot;Play something that felt like late November.&quot; The music is there. The context is locked.</p>
            </div>
            <div>
              <h3 className="proj-h3">The brief</h3>
              <p className="proj-p">Design a mobile feature that lets users <em>rediscover emotional memories</em> by navigating their music history through both time and mood — turning a listening archive into something you can actually feel your way through.</p>
            </div>
          </div>

          <div className="hmw">
            <div className="lbl">How might we statement</div>
            <div className="q">How might we help users <em>rediscover emotional memories</em> by <em>filtering</em> their music history by date and context?</div>
          </div>
        </section>

        {/* RESEARCH */}
        <section className="proj-section reveal">
          <div className="eyebrow">Research foundation</div>
          <h2 className="proj-h2">Music doesn&apos;t just sound like the past — it <em>is</em> the past.</h2>
          <p className="proj-p" style={{ marginTop: 24 }}>The case for this feature isn&apos;t speculative. The relationship between music, memory, and emotion is one of the most replicated findings in cognitive science — and product data shows users will engage deeply when you surface it.</p>

          <div className="stats-grid">
            {[
              { pct: '90%',  src: 'Journal of Experimental Psychology · Miller et al., 2020', text: 'of participants could recall a personal memory tied to a specific song — making music one of the most reliable autobiographical triggers we know of.' },
              { pct: '65%',  src: 'American Psychological Association', text: 'increase in positive emotions from nostalgia. APA research shows nostalgic recall actively improves mood and reduces feelings of stress and loneliness.' },
              { pct: '75%',  src: 'Google Photos · internal engagement data', text: 'user engagement rate for time-based memory features within the first three months of launch — proving temporal navigation has immediate, sustained appeal.' },
              { pct: '90%',  src: 'Facebook Memories · DAU impact', text: 'increase in daily active users when memory features were surfaced prominently. Users don\'t just want nostalgia — they return for it.' },
            ].map((s, i) => (
              <div className="stat-block" key={i}>
                <div className="pct">{s.pct}</div>
                <div className="src">{s.src}</div>
                <p>{s.text}</p>
              </div>
            ))}
          </div>

          <Image
            src="/images/spotify/spotify-competitive.webp"
            alt="Competitive analysis — Google Photos and Facebook Memories"
            width={1200}
            height={600}
            style={{ width: '100%', height: 'auto', borderRadius: 4, marginTop: 48, display: 'block', cursor: 'zoom-in' }}
            onClick={() => setLightboxSrc('/images/spotify/spotify-competitive.webp')}
          />
        </section>

        {/* FEATURES */}
        <section className="proj-section reveal">
          <div className="eyebrow">Design</div>
          <h2 className="proj-h2">Four interactions that turn a playlist into a <em>place.</em></h2>

          <div className="features-grid">
            {[
              { src: '/images/spotify/spotify-date.mp4',         lbl: '01 · Date selector',   h3: 'Navigate time, not just tracks.',          p: 'A temporal range picker lets users scroll through their listening history by month. Selecting a window surfaces every song from that period — no search, no guessing.' },
              { src: '/images/spotify/spotify-mood.mp4',         lbl: '02 · Mood selector',   h3: 'Filter by feeling, not genre.',            p: 'Mood tags let users layer emotional context on top of their time window. The result is a curated set of songs that match both when and how — not just what was on shuffle.' },
              { src: '/images/spotify/spotify-songcuration.mp4', lbl: '03 · Song curation',   h3: 'Swipe through. Keep what fits.',           p: 'Color-coded by mood — warm amber for upbeat, cool blue for calm — songs are presented one at a time. Swipe right to include, left to skip. No playlists, no manual sorting.' },
              { src: '/images/spotify/spotify-namememories.mp4', lbl: '04 · Memory naming',   h3: 'Give the memory a name it deserves.',      p: 'The final step lets users title their curated drift — capturing the emotional essence of a period in their own words. Named playlists become lasting anchors, not just saved queues.' },
            ].map((f) => (
              <div className="feature-card" key={f.lbl}>
                <div className="preview">
                  <video src={f.src} autoPlay loop muted playsInline style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} />
                </div>
                <div className="body">
                  <span className="lbl">{f.lbl}</span>
                  <h3 className="proj-h3" style={{ marginBottom: 0 }}>{f.h3}</h3>
                  <p>{f.p}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LEARNINGS */}
        <section className="proj-section reveal" style={{ borderBottom: 'none' }}>
          <div className="eyebrow">What I learned</div>
          <h2 className="proj-h2">Emotion isn&apos;t a feature. It&apos;s the <em>whole point.</em></h2>
          <div className="learn">
            <div className="col">
              <p>Cosmic Drift started from a personal frustration: I had hundreds of songs tied to vivid memories, but no way to get back to them without manually hunting through playlists.</p>
              <p style={{ marginTop: 14 }}>Designing this taught me that <em>utility and emotion aren&apos;t in tension</em> — the most useful thing you can build is the one that makes people feel something real.</p>
            </div>
            <div className="col">
              <p>The research didn&apos;t just validate the concept — it sharpened it. Grounding decisions in cognitive science made every design choice feel accountable, not arbitrary.</p>
              <p style={{ marginTop: 14 }}>The next iteration would explore social drifts — <em>shared memory spaces</em> between friends, where the same song can surface completely different moments.</p>
            </div>
          </div>

          <div className="learn-list" style={{ marginTop: 48 }}>
            {[
              { n: '01', h: 'Emotion over', em: 'function',    p: 'The features that stuck were the ones that felt true, not the ones that were technically clever. Emotional connection drives retention more than utility alone.' },
              { n: '02', h: 'Research as',  em: 'design',      p: 'Starting from published findings — not assumptions — made the HMW statement sharper and the feature set more defensible. Data gave the design a spine.' },
              { n: '03', h: 'Iteration reveals', em: 'blindspots', p: 'Early prototypes assumed users knew their moods clearly. Testing showed mood is fuzzy and contextual — leading to the tag-based selector instead of sliders.' },
              { n: '04', h: 'Empathy as',   em: 'structure',   p: 'Designing for emotional states — not just task flows — required a different kind of scaffolding. The best UX here felt less like a tool and more like a conversation.' },
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
