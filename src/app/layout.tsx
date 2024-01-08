import type { Metadata } from 'next';
import './globals.css';

// TODO
export const metadata: Metadata = {
  title: '스트랩빌드',
  description: '창의성이 탁월한 기술력을 만나는 곳, 디지털 프로덕션 에이전시 스트랩빌드입니다.',
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        <meta property='og:title' content={metadata.title as string} />
        <meta property='og:site_name' content='주식회사 스트랩빌드' />
        <meta property='og:type' content='business.business' />
        <meta property='og:locale' content='ko_KR' />
        <meta property='og:description' content={metadata.description as string} />
        <meta property='og:image' content='/og-image.png' />
        <meta property='og:url' content='https://strap.build' />
      </head>
      <body className="h-full">{children}</body>
    </html>
  );
}
