import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"
import Favicon from '../public/assets/images/favicon.ico'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WoodGrain - Winning Software & Development",
  description: "Woodgrain is a leading website development company specializing in custom web design and development services. We create responsive, user-friendly websites that drive results and enhance your online presence. Our expert team focuses on delivering high-quality web solutions tailored to your business needs, ensuring your website is not only visually appealing but also optimized for performance and search engines. Trust Woodgrain to bring your digital vision to life with precision and care.",
  icons: {
    icon: "../public/assets/images/favicon.ico",
  },
  openGraph: {
    title: "WoodGrain - Winning Software & Development",
    description: "Woodgrain is a leading website development company specializing in custom web design and development services. We create responsive, user-friendly websites that drive results and enhance your online presence.",
    url: "https://wood-grain.vercel.app/",
    siteName: "WoodGrain",
    images: [
      {
        url: "https://res.cloudinary.com/dgomrpwlw/image/upload/v1724652991/download_if1wlf.webp",
        alt: "WoodGrain",
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "WoodGrain - Winning Software & Development",
    description: "Woodgrain is a leading website development company specializing in custom web design and development services. We create responsive, user-friendly websites that drive results and enhance your online presence.",
    images: [
      "https://res.cloudinary.com/dgomrpwlw/image/upload/v1724652991/download_if1wlf.webp"
    ],
    creator: "@WoodGrainSoftWare"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
