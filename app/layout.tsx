import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Siddharth Mishra",
  description:
    "IIT Madras engineer, strategy consultant, and emerging VC analyst. Building at the intersection of quantitative systems and technology investment.",
  openGraph: {
    title: "Siddharth Mishra",
    description: "Engineer. Consultant. Investor in the making.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="bg-bg text-cream font-sans antialiased">
        <Nav />
        <main>{children}</main>
        <footer className="border-t border-border mt-32 py-10 px-6 md:px-12">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <span className="font-display text-lg text-cream">SM</span>
            <p className="text-muted text-sm">
              © 2026 Siddharth Mishra · IIT Madras · Gurugram/Bangalore
            </p>
            <div className="flex gap-6 text-sm text-muted">
              <a
                href="https://www.linkedin.com/in/siddharth-mishra-a3a41b238/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Siddharth-Mishra-Personal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                GitHub
              </a>
              <a
                href="mailto:sidmishra2004@gmail.com"
                className="hover:text-gold transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
