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
  title: "이천 신안실크밸리 2차 공식 분양안내",
  description: "이천 최고의 입지, 이천 신안실크밸리 2차 분양가 및 모델하우스 정보를 확인하세요",
  keywords: "이천신안실크밸리2차, 이천 분양, 신안실크밸리, 이천 아파트 분양",
  openGraph: {
    title: "이천 신안실크밸리 2차 공식 분양안내",
    description: "이천 최고의 입지, 이천 신안실크밸리 2차 분양가 및 모델하우스 정보를 확인하세요",
    type: "website",
    locale: "ko_KR",
  }
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
        <div className="w-full flex-grow flex flex-col items-center bg-white shadow-xl max-w-[768px]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
