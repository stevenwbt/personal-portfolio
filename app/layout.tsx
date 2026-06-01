import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Steven Heng — Portfolio',
  description: 'Product designer, amateur perfumer, and cognitive explorer.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@300;400;500&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `if(localStorage.getItem('theme')==='dark')document.documentElement.classList.add('dark')`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
