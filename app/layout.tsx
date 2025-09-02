import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BetHabits",
  description: "Set goals, stake money, stay accountable.",
  metadataBase: new URL("https://bethabits.app"),
  openGraph: {
    title: "BetHabits — Bet on Yourself",
    description: "Set goals, stake money, stay accountable.",
    url: "https://bethabits.app",
    siteName: "BetHabits",
    images: [{ url: "/mountain-hero.png", width: 1536, height: 1024, alt: "BetHabits Hero" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BetHabits — Bet on Yourself",
    description: "Set goals, stake money, stay accountable.",
    images: ["/mountain-hero.png"],
  },
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "icon", url: "/icon.png", sizes: "1024x1024", type: "image/png" },
    { rel: "shortcut icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/icon.png" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
