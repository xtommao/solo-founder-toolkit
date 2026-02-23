import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Solo Founder Toolkit | Free Tools for Indie Hackers",
    template: "%s | Solo Founder Toolkit",
  },
  description:
    "A curated collection of the best free and low-cost tools for solo founders, indie hackers, and bootstrapped startups. Build your business without breaking the bank.",
  keywords: [
    "solo founder",
    "indie hacker",
    "startup tools",
    "free tools",
    "low cost tools",
    "mvp builder",
    "saas tools",
  ],
  authors: [{ name: "Steven", url: "https://twitter.com/steven" }],
  creator: "Steven",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://solofoundertoolkit.com",
    title: "Solo Founder Toolkit | Free Tools for Indie Hackers",
    description:
      "A curated collection of the best free and low-cost tools for solo founders, indie hackers, and bootstrapped startups.",
    siteName: "Solo Founder Toolkit",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solo Founder Toolkit | Free Tools for Indie Hackers",
    description:
      "A curated collection of the best free and low-cost tools for solo founders, indie hackers, and bootstrapped startups.",
    creator: "@steven",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
