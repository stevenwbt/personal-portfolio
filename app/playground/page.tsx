'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const GRAPHIC_DESIGN = [
  { type: 'video', src: '/images/playground/playground-keratonposter.MP4',    caption: 'Keraton · Motion poster' },
  { type: 'image', src: '/images/playground/playground-isauwmerch3.jpg',       caption: 'ISAUW · Merch collection' },
  { type: 'image', src: '/images/playground/playground-isauwmerch2.jpg',       caption: 'ISAUW · Merch collection' },
  { type: 'image', src: '/images/playground/Playground-DFA1.png',              caption: 'DFA UW · Annual Expo 2026' },
  { type: 'image', src: '/images/playground/Playground-DFA2.png',              caption: 'DFA UW · Internal team application' },
  { type: 'image', src: '/images/playground/playground-isauwmerch1.jpg',       caption: 'ISAUW · Merch collection' },
  { type: 'image', src: '/images/playground/playground-isauwrecap.JPG',        caption: 'ISAUW · Event recap' },
  { type: 'image', src: '/images/playground/playground-keratonheadliner.jpg',  caption: 'Keraton · Headliner poster' },
];

type LightboxState = { src: string; type: 'image' | 'video' } | null;

function PlaceholderCard({ lbl, num }: { lbl: string; num: string }) {
  return (
    <div className="pg-card" style={{ minHeight: 420 }}>
      <div className="pg-wip"><span>Under construction</span></div>
      <div className="ph">
        <div className="corners"><span/><span/><span/><span/></div>
        <div className="inner">
          <span className="lbl">↳ {lbl}</span>
          <span className="ttl">Drop bottle photo</span>
          <span className="hint">PNG / JPG · square</span>
        </div>
      </div>
      <div className="body">
        <span className="tag">No. {num} · fragrance</span>
        <h3>Working <em>title.</em></h3>
        <p>A short note on the brief, the season, or the memory this one came from.</p>
        <div className="notes"><span>Top —</span><span>Heart —</span><span>Base —</span></div>
      </div>
    </div>
  );
}

export default function Playground() {
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === 'Escape') closeLightbox(); }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [closeLightbox]);

  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  return (
    <>
      <Navbar pageLabel="Playground" isProjectPage />

      <div className="pg-wrap">
        {/* HERO */}
        <section className="pg-hero" style={{ borderTop: 'none', paddingTop: 8 }}>
          <h1 className="pg-title"><em>Playground.</em></h1>
          <p className="pg-lede">Where the work loosens up. A fragrance line I&apos;m building by hand, and a collection of graphic design. Different mediums — same instinct.</p>
        </section>

        {/* GRAPHIC DESIGN */}
        <section className="pg-section">
          <div className="row">
            <span className="nm">· Graphic design</span>
            <span className="ct">Selected pieces</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, alignItems: 'start' }}>
            {GRAPHIC_DESIGN.map((item, i) => (
              <div className="pg-card" key={i} style={{ minHeight: 'unset' }}>
                {item.type === 'video' ? (
                  <div
                    style={{ cursor: 'zoom-in' }}
                    onClick={() => setLightbox({ src: item.src, type: 'video' })}
                  >
                    <video
                      autoPlay muted loop playsInline
                      style={{ width: '100%', display: 'block', height: 'auto' }}
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>
                  </div>
                ) : (
                  <Image
                    src={item.src}
                    alt={item.caption}
                    width={600}
                    height={600}
                    style={{ width: '100%', height: 'auto', display: 'block', cursor: 'zoom-in' }}
                    onClick={() => setLightbox({ src: item.src, type: 'image' })}
                  />
                )}
                <p className="pg-caption">{item.caption}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FRAGRANCE */}
        <section className="pg-section" style={{ borderBottom: 'none' }}>
          <div className="row">
            <span className="nm">· Fragrance</span>
            <span className="ct">Scent Studio</span>
          </div>

          {/* Scent Studio CTA */}
          <Link
            href="/playground/scent"
            className="pg-card"
            style={{ display: 'flex', flexDirection: 'row', minHeight: 'auto', marginBottom: 16, textDecoration: 'none' }}
          >
            <div className="pg-wip"><span>Under construction</span></div>
            <div className="ph" style={{ flex: 'none', width: 260, minHeight: 160, borderRight: '1px solid var(--line)', borderRadius: 0 }}>
              <div className="corners"><span/><span/><span/><span/></div>
              <div className="inner">
                <span className="lbl">↳ interactive</span>
                <span className="ttl" style={{ fontSize: 22 }}>Scent Studio</span>
                <span className="hint">Three questions · one fragrance</span>
              </div>
            </div>
            <div className="body" style={{ borderTop: 'none', borderLeft: '1px solid var(--line)', justifyContent: 'center' }}>
              <span className="tag">Experience</span>
              <h3>Design a fragrance from a memory <em>that isn&apos;t yours.</em></h3>
              <p>An interactive piece — answer three questions and receive a custom fragrance composed from a library of notes I&apos;ve worked with. Part of the Sté line.</p>
              <div className="notes" style={{ marginTop: 8 }}><span>Three questions</span><span>64 possible scents</span><span>Yours to keep</span></div>
            </div>
          </Link>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
            <PlaceholderCard lbl="fragrance 01" num="01" />
            <PlaceholderCard lbl="fragrance 02" num="02" />
            <PlaceholderCard lbl="fragrance 03" num="03" />
          </div>
        </section>

        <Footer />
      </div>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 999, display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'rgba(0,0,0,.82)', backdropFilter: 'blur(6px)', cursor: 'pointer',
          }}
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            style={{ position: 'absolute', top: 20, right: 24, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.6)' }}
          >
            Close ✕
          </button>
          {lightbox.type === 'image' ? (
            <Image
              src={lightbox.src}
              alt="Preview"
              width={1200}
              height={900}
              style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain', borderRadius: 4 }}
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <video
              src={lightbox.src}
              autoPlay muted loop playsInline
              style={{ maxWidth: '90vw', maxHeight: '90vh', borderRadius: 4 }}
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
      )}
    </>
  );
}
