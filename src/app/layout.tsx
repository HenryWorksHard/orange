import type { Metadata } from "next";
import { Geist, Geist_Mono, Black_Ops_One, Permanent_Marker } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const blackOps = Black_Ops_One({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const marker = Permanent_Marker({
  variable: "--font-tag",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "$ORANGE — talk to him",
  description: "Orange lives at his desk. Buy the bag, then chat with him.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${blackOps.variable} ${marker.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-fg font-sans">
        {children}
      </body>
    </html>
  );
}
