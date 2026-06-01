'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TRAIL_PHOTOS = [
  { src: '/images/trail-steven.JPG',          label: 'Steven..'       },
  { src: '/images/trail-perfumemaking.JPG',   label: 'Perfume making' },
  { src: '/images/trail-nature.JPG',          label: 'Nature'         },
  { src: '/images/trail-dog.JPG',             label: 'My daughter'    },
  { src: '/images/trail-home.JPG',            label: 'Home.. @ UW!'   },
  { src: '/images/trail-friends.JPEG',        label: 'Friends'        },
];
const TINTS = ['#B62D07','#7C3AED','#E8630A','#009a5c','#4F6FD4','#0f766e','#002FA7'];

export default function Home() {
  const trailRef = useRef<{ idx: number; lastT: number }>({ idx: 0, lastT: 0 });
  const scrollBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = scrollBarRef.current;
    function updateScroll() {
      if (!bar) return;
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
    }
    window.addEventListener('scroll', updateScroll, { passive: true });
    updateScroll();

    const cur = document.getElementById('cursor');
    function moveCursor(e: MouseEvent) {
      if (cur) { cur.style.left = e.clientX + 'px'; cur.style.top = e.clientY + 'px'; }
    }
    window.addEventListener('mousemove', moveCursor);

    const links = document.querySelectorAll('a, button');
    links.forEach((el) => {
      el.addEventListener('mouseenter', () => cur?.classList.add('active'));
      el.addEventListener('mouseleave', () => cur?.classList.remove('active'));
    });

    const io = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    ['.section-head', '.project', '.about-grid > div'].forEach((sel) => {
      document.querySelectorAll(sel).forEach((el) => { el.classList.add('reveal'); io.observe(el); });
    });
    document.querySelectorAll('.about-grid > div').forEach((el, i) => {
      (el as HTMLElement).style.setProperty('--reveal-delay', (i * 0.12) + 's');
    });

    const introEl = document.querySelector('.intro') as HTMLElement | null;

    function onMouseMove(e: MouseEvent) {
      if (!introEl) return;
      const rect = introEl.getBoundingClientRect();
      if (e.clientY < rect.top || e.clientY > rect.bottom || e.clientX < rect.left || e.clientX > rect.right) return;
      const now = Date.now();
      const state = trailRef.current;
      if (now - state.lastT < 200) return;
      state.lastT = now;

      const photo = TRAIL_PHOTOS[state.idx % TRAIL_PHOTOS.length];
      const tint = TINTS[state.idx % TINTS.length];
      state.idx++;

      const angle = (Math.random() - 0.5) * 10;
      const ox = (Math.random() - 0.5) * 16;
      const el = document.createElement('div');
      el.className = 'trail-card';
      el.innerHTML = `<img src="${photo.src}" alt="${photo.label}" /><span class="tc-label">${photo.label}</span>`;
      el.style.cssText = `left:${e.clientX + ox}px;top:${e.clientY}px;border-color:${tint};transform:translate(-50%,-55%) scale(0.82) rotate(${angle * 1.1}deg);opacity:0;transition:none`;
      document.body.appendChild(el);
      requestAnimationFrame(() => requestAnimationFrame(() => {
        el.style.transition = 'transform 0.6s cubic-bezier(.2,.9,.3,1), opacity 0.22s ease';
        el.style.transform = `translate(-50%,-55%) scale(1) rotate(${angle}deg)`;
        el.style.opacity = '1';
      }));
      setTimeout(() => {
        el.style.transition = 'transform 0.7s cubic-bezier(.25,.1,.25,1), opacity 0.5s ease';
        el.style.transform = `translate(-50%,-63%) scale(0.94) rotate(${angle * 1.05}deg)`;
        el.style.opacity = '0';
        setTimeout(() => el.remove(), 720);
      }, 650);
    }
    document.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('scroll', updateScroll);
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mousemove', onMouseMove);
      io.disconnect();
    };
  }, []);

  return (
    <div className="shell">
      <div className="scroll-progress" aria-hidden="true">
        <div className="bar" ref={scrollBarRef} />
      </div>

      <div className="cursor" id="cursor" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11 -11 22 22" width="100%" height="100%">
          <circle cx="-4" cy="-4" r="7" fill="currentColor"/>
          <circle cx="4"  cy="-4" r="7" fill="currentColor"/>
          <circle cx="-4" cy="4"  r="7" fill="currentColor"/>
          <circle cx="4"  cy="4"  r="7" fill="currentColor"/>
        </svg>
      </div>

      <Navbar />

      <main>
        {/* INTRO */}
        <section className="intro" id="intro">
          <p className="bio">
            Halo, I&apos;m <em>Steven!</em><br />
            Product designer, amateur perfumer, and cognitive explorer.<br />
            Curious about AI, systems, and the quiet craft of things.<br />
            All make the invisible feel intentional.
          </p>
          <p style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-2)', marginTop: 20 }}>Prev. at Google, Delta Dental and Teaching Assistant @ UW Information School</p>
        </section>

        {/* WORK */}
        <section className="block" id="work">
          <div className="section-head reveal">
            <h2>Selected <em>work</em></h2>
          </div>

          <div className="projects" id="projects">
            {([
              { href: '/work/google-capstone', accent: '#E8630A', img: '/images/card-google.png',       label: 'ⓒ Google',                stamp: '© 2025–2026 · UW iSchool × Google', title: 'Automating Android security patch porting with LLMs' },
              { href: '/work/accordant',       accent: '#B62D07', img: '/images/card-accordant.png',    label: 'ⓒ Accordant',             stamp: '© PASSION PROJECT · 2026',          title: 'A designer-first layer for design systems' },
              { href: '/work/delta-dental',    accent: '#009a5c', img: '/images/card-dd.png',           label: 'ⓒ Delta Dental · Internship', stamp: '© SUMMER 2025 · NDA',           title: 'Redesigning enrollment flows for brokers & employers' },
              { href: '/work/flux',            accent: '#7C3AED', img: '/images/card-flux.png',         label: 'ⓒ FLUX',                  stamp: '© PERSONAL PROJECT · 2025',         title: 'AI-driven productivity tools for remote environments' },
              { href: '/work/cosmic-drift',    accent: '#4F6FD4', img: '/images/card-cosmicdrift.png',  label: 'ⓒ Cosmic Drift',          stamp: '© PASSION PROJECT',                 title: 'Mapping memories through music' },
              { href: '/work/recycloop',       accent: '#0f766e', img: '/images/card-recycloop.png',    label: 'ⓒ Recycloop',             stamp: '© 2024 · SUSTAINABILITY',           title: 'Closing the loop on campus recycling behavior' },
            ] as const).map((p) => (
              <Link
                key={p.href}
                className="project"
                href={p.href}
                style={{ '--card-accent': p.accent } as React.CSSProperties}
              >
                <div className="hero-img" data-label={p.label} data-stamp={p.stamp}>
                  <Image src={p.img} alt={p.title} fill style={{ objectFit: 'cover', objectPosition: 'center top' }} />
                </div>
                <div className="title-chip">{p.title}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="block" id="about">
          <div className="section-head reveal">
            <h2>Halo, I&apos;m <em>Steven.</em></h2>
          </div>

          <div className="about-grid">
            <div>
              <p>Product designer, currently a rising senior at the University of Washington. Previously worked at <strong>Delta Dental</strong> and a capstone with <strong>Google</strong>.</p>
              <p style={{ marginTop: 18 }}>Born in Indonesia, now based in Seattle, I&apos;m a designer and amateur perfumer. Both of my interests are arranging invisible parts so the whole feels intentional. I care most about the small decisions people never notice but always feel!</p>
              <p style={{ marginTop: 18 }}>Off-screen, I make fragrances, getting too invested in horrors/thrillers, on racket courts (badminton, tennis, pickle), or doing my best to sleep eight hours.</p>
            </div>
            <div>
              <Image src="/assets/about-photo.jpg" alt="Steven Heng" width={1536} height={2048} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 4, border: '1px solid var(--line)' }} />
            </div>
          </div>

          <div className="fav-section">
            <p className="fav-heading">My favorite things</p>
            <div className="fav-grid">
              {[
                { src: '/images/fav-perfume.JPG',    cat: 'Sidequest #1', name: 'making perfumes!' },
                { src: '/images/fav-tennis.jpg',     cat: 'Sport',        name: 'recently tennis..' },
                { src: '/images/fav-thirdspace.JPG', cat: 'Third Space',  name: 'mountains :)' },
                { src: '/images/fav-dog.png',        cat: 'Doll',         name: 'maple, my poodle ♡' },
              ].map((f) => (
                <div className="fav-card" key={f.name}>
                  <div className="fav-img fav-img--photo" style={{ position: 'relative' }}>
                    <Image src={f.src} alt={f.name} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div className="fav-info">
                    <span className="fav-cat">{f.cat}</span>
                    <span className="fav-name">{f.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="block" id="contact" style={{ borderBottom: 'none' }}>
          <Footer />
        </section>
      </main>
    </div>
  );
}
