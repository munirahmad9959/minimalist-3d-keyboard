// app/layout.jsx

import './globals.css';

export const metadata = {
  title: 'My 3D App',
  description: 'Using Spline in Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon & Manifest Links */}
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="3d-keyboard" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
