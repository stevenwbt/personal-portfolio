import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <div className="contact">
        <div>
          <h2>bloom <em>where</em><br />you&apos;re <em>planted!</em></h2>
          <p className="contact-note">
            <strong>Sté is short for Steven</strong> — and it&apos;s a small wink at stay. It&apos;s the thread running through my work: design that invites people to stay engaged, art that holds attention, fragrances that linger long after the wearer leaves the room. Welcome. Sté with me a while.
          </p>
        </div>
        <a className="ascii-resume" href="#">
          <Image
            src="/assets/ascii-ste.png"
            alt="Sté — Resume"
            width={280}
            height={280}
            className="ascii-resume-img"
            style={{ height: 'auto' }}
          />
        </a>
      </div>
      <footer>
        <div>© 2026 Steven Heng + Iced Americanos + Claude Code and Next.js</div>
        <div>Seattle, WA</div>
      </footer>
    </>
  );
}
