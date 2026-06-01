'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {
  pageLabel?: string;
  isProjectPage?: boolean;
}

export default function Navbar({ pageLabel, isProjectPage = false }: NavbarProps) {
  const [clock, setClock] = useState('SEA · --:--:--');
  const [dark, setDark] = useState(false);
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      setDark(document.documentElement.classList.contains('dark'));
    }
    const tick = () => {
      const f = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        hour12: false, timeZone: 'America/Los_Angeles',
      }).format(new Date());
      setClock('SEA · ' + f);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  function toggleDark() {
    const html = document.documentElement;
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    setDark(isDark);
  }

  const homePrefix = isProjectPage ? '/' : '';
  const workHref = isProjectPage ? '/#work' : '#work';
  const aboutHref = isProjectPage ? '/#about' : '#about';

  return (
    <header className={isProjectPage ? 'proj-header' : 'site-header'} id="siteHeader">
      <Link
        href="/"
        className={isProjectPage ? 'ph-logo' : 'header-logo-wrap'}
        aria-label="Sté — home"
      >
        <Image
          src="/assets/ste-logo.png"
          alt="Sté"
          width={40}
          height={40}
          className="logo logo-light"
          priority
        />
        <Image
          src="/images/ste-logo.png"
          alt="Sté"
          width={40}
          height={40}
          className="logo logo-dark"
          priority
        />
      </Link>

      <nav className={isProjectPage ? '' : 'menu'} aria-label="Primary">
        <ol>
          <li><Link href={workHref}>Work</Link></li>
          <li><Link href={aboutHref}>About</Link></li>
          <li><Link href="/playground">Playground ↗</Link></li>
          <li><a href="https://drive.google.com/file/d/1jC41JVrkb1hHOZMmS5-m0bhJ6h-NAB0U/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume ↗</a></li>
        </ol>
      </nav>

      <div className={isProjectPage ? 'ph-right' : 'header-right'}>
        {isProjectPage && pageLabel && <span>{pageLabel}</span>}
        {!isProjectPage && <div className="clock">{clock}</div>}
        <button
          className="mode-toggle"
          onClick={toggleDark}
          aria-label="Toggle dark mode"
        >
          <span>☀</span>
          <div className="mt-track"><div className="mt-knob" /></div>
          <span>☾</span>
        </button>
      </div>
    </header>
  );
}
