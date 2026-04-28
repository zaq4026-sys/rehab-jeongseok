import type { Metadata } from "next";
import { Inter, Noto_Serif_KR } from "next/font/google";
import "@fontsource/pretendard/400.css";
import "@fontsource/pretendard/500.css";
import "@fontsource/pretendard/600.css";
import "@fontsource/pretendard/700.css";
import "@fontsource/pretendard/800.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/content/site";
import { buildLocalBusinessSchema } from "@/lib/seo";
import "./globals.css";

const notoSerifKr = Noto_Serif_KR({
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-serif-kr",
  display: "swap",
  preload: false,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "재활의정석 전문운동센터",
  description:
    "광주 만성 근골격계 통증 재활과 뇌질환 재활을 다루는 재활운동전문 물리치료사의 전문운동센터",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  verification: {
    google: "PvSWvnEUPum7sgbz35p1nHht1qGIf41AuvHr33wf518",
    other: {
      "naver-site-verification": "6cedc004920ae6d6bef2cad5d392c1bd84ccc804",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSerifKr.variable} ${inter.variable}`}>
      <body className="bg-ivory font-sans text-charcoal antialiased">
        <JsonLd data={buildLocalBusinessSchema()} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
