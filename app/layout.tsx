import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingBanner from "../components/FloatingBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://3-icheon-silk.pages.dev"), // 현재 사용하시는 Cloudflare Pages 도메인 적용
  title: "이천 신안실크밸리 2차 공식 분양안내",
  description: "이천 최고의 입지, 이천 신안실크밸리 2차 분양가 및 모델하우스 정보를 확인하세요",
  keywords: "이천신안실크밸리2차, 이천 분양, 신안실크밸리, 이천 아파트 분양",
  openGraph: {
    title: "이천 신안실크밸리 2차 공식 분양안내",
    description: "이천 최고의 입지, 이천 신안실크밸리 2차 분양가 및 모델하우스 정보를 확인하세요",
    url: "https://3-icheon-silk.pages.dev",
    siteName: "이천 신안실크밸리 2차",
    images: [
      {
        url: "/1. home/hero_landscape.png",
        width: 1200,
        height: 630,
        alt: "이천 신안실크밸리 2차 메인 뷰",
      },
    ],
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "이천 신안실크밸리 2차 공식 분양안내",
    description: "이천 최고의 입지, 이천 신안실크밸리 2차 분양가 및 모델하우스 정보를 확인하세요",
    images: ["/1. home/hero_landscape.png"],
  },
  verification: {
    google: "icuny2CzwR-hUfHcqzjYDzQfUnaXkX7u6U-3Vd2tUUo", // 구글 서치콘솔 인증 완료
    other: {
      "naver-site-verification": ["a715334c02610da6d90b3db0a6e9e17ef419f086"], // 네이버 서치어드바이저 인증 완료
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[#e8eaed] font-[family-name:var(--font-geist-sans)] flex flex-col items-center w-full`}
        suppressHydrationWarning
      >
        <Header />
        <FloatingBanner />
        <div className="w-full flex-grow flex flex-col items-center bg-white shadow-xl">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
