import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WoodGrain - Winning Software & Development',
  description: 'WoodGrain is a leading website development company specializing in custom web design and development services. We create responsive, user-friendly websites that drive results and enhance your online presence. Our expert team focuses on delivering high-quality web solutions tailored to your business needs, ensuring your website is not only visually appealing but also optimized for performance and search engines. Trust WoodGrain to bring your digital vision to life with precision and care.',
  icons: {
    icon: '/favicon.ico',  // Ensure favicon path is correct
  },
  openGraph: {
    title: 'WoodGrain - Winning Software & Development',
    description: 'WoodGrain is a leading website development company specializing in custom web design and development services. We create responsive, user-friendly websites that drive results and enhance your online presence.',
    url: 'https://wood-grain.vercel.app/',
    siteName: 'WoodGrain',
    images: [
      {
        url: 'https://res.cloudinary.com/dgomrpwlw/image/upload/v1724652991/download_if1wlf.webp',
        alt: 'WoodGrain',
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WoodGrain - Winning Software & Development',
    description: 'WoodGrain is a leading website development company specializing in custom web design and development services. We create responsive, user-friendly websites that drive results and enhance your online presence.',
    images: [
      'https://res.cloudinary.com/dgomrpwlw/image/upload/v1724652991/download_if1wlf.webp'
    ],
    creator: '@WoodGrainSoftWare'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
