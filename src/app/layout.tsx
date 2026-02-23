import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://solo-founder-toolkit.vercel.app"),
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
    url: "https://solo-founder-toolkit.vercel.app",
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
  verification: {
    google: "ffnBEBrzXt-Ql5k5M8Rb46bLT1zos4YfI0C2TnZxLWc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="border-b">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-xl font-bold">
                Solo Founder Toolkit
              </Link>
              <a 
                href="https://tally.so/r/A7dNoy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Submit a Tool
              </a>
            </div>
          </nav>
        </header>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="border-t py-8 mt-12">
          <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
            <p className="mb-4">
              Built for solo founders, by solo founders.
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="https://tally.so/r/A7dNoy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Submit a Tool
              </a>
              <span>•</span>
              <a href="https://github.com/xtommao/solo-founder-toolkit" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
