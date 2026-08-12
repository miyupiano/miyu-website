import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://miyuyukiiri.com"),

  title: {
    default: "雪入 美優｜ピアニスト",
    template: "%s | 雪入 美優",
  },

  description:
    "ピアニスト雪入美優の公式ホームページ。演奏活動、レッスン、伴奏、留学支援についてご紹介しています。",

  keywords: [
    "雪入美優",
    "ピアニスト",
    "クラシック",
    "ピアノ",
    "演奏依頼",
    "伴奏",
    "レッスン",
    "ベルギー",
  ],

  authors: [{ name: "Miyu Yukiiri" }],

  creator: "Miyu Yukiiri",

  openGraph: {
    title: "雪入 美優｜ピアニスト",
    description:
      "ピアニスト雪入美優の公式ホームページ。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-white text-neutral-900">
        <Header />

        <main>{children}</main>

        <Footer />

        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GA_ID!}
        />
      </body>
    </html>
  );
}