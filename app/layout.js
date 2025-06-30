// app/layout.jsx

import './globals.css';

export const metadata = {
  title: 'My 3D App',
  description: 'Using Spline in Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
