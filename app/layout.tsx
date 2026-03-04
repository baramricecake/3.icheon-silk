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
  title: "e편한세상 서울산 파크그란데 공식 분양안내",
  description: "울산 최고의 입지, e편한세상 서울산 파크그란데의 분양가 및 모델하우스 정보를 확인하세요",
  keywords: "e편한세상서울산파크그란데, 울산 아파트 분양, e편한세상 서울산, 서울산 파크그란데, 울산 아파트",
  openGraph: {
    title: "e편한세상 서울산 파크그란데 공식 분양안내",
    description: "울산 최고의 입지, e편한세상 서울산 파크그란데의 분양가 및 모델하우스 정보를 확인하세요",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
