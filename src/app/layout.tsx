import type { Metadata } from 'next';
import './globals.css';

// TODO
export const metadata: Metadata = {
  title: '스트랩빌드',
  description: '주식회사 스트랩빌드',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0D4ABC"></meta>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className="h-full">{children}</body>
    </html>
  );
}
