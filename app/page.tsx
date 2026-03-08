"use client";
import React, { useState, useEffect } from 'react';
import { ArrowRight } from "lucide-react";
import ContactForm from '../components/ContactForm';

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check session storage
    if (typeof window !== 'undefined') {
      const hasSeen = sessionStorage.getItem('popup_closed');
      if (!hasSeen) {
        setShowPopup(true);
      }
    }
  }, []);

  const closePopup = (neverShowAgain: boolean) => {
    setShowPopup(false);
    if (neverShowAgain && typeof window !== 'undefined') {
      sessionStorage.setItem('popup_closed', 'true');
    }
  };

  // 1. home 디렉토리 내부의 컨텐츠 이미지 배열 (재배치)
  const homeContentImages = [
    "/1. home/imgi_25_page0404b.jpg", // 입지환경 맵 (우선 배치)
    "/1. home/imgi_28_page0201.jpg", // 민간임대주택 안내 (우선 배치)
    "/1. home/imgi_10_page0102.jpg",
    "/1. home/imgi_11_page0202.jpg",
    "/1. home/imgi_13_page0203.jpg",
    "/1. home/imgi_14_page0204.jpg",
    "/1. home/imgi_26_page0102.jpg",
    "/1. home/imgi_29_page0203.jpg",
    "/1. home/imgi_30_page0204.jpg",
    "/1. home/imgi_31_page0301a.jpg",
    "/1. home/imgi_32_page0301b.jpg",
    "/1. home/imgi_33_page0301c.jpg",
    "/1. home/imgi_34_page0301d.jpg",
  ];

  return (
    <div className="w-full relative pb-20 md:pb-24 flex flex-col items-center animate-in fade-in duration-500">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        @keyframes shimmerSlide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmerSlide 2.5s infinite;
        }
      `}} />

      {/* 커스텀 팝업 모달 */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 transition-opacity">
          <div className="relative max-w-[420px] w-full bg-[#B62C68] rounded-[24px] shadow-2xl p-6 text-white text-center font-sans tracking-tight animate-in fade-in zoom-in duration-200">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-5 flex justify-center items-center gap-2">
              <span>이천 신안실크밸리</span>
              <span className="bg-white text-[#B62C68] px-2 py-0.5 rounded-sm">2차</span>
            </h2>

            <div className="bg-[#fadbe4] text-[#222] rounded-xl p-5 mb-5 space-y-4">
              <div className="border-b border-gray-300 pb-4">
                <div className="flex items-center justify-center gap-2 font-bold text-lg mb-2">
                  <span className="w-2 h-2 bg-black rounded-sm"></span> 1차
                </div>
                <p className="text-sm font-medium leading-relaxed">
                  ※ 회사보유분 한정세대 (일반분양)<br />
                  ※ 3억대부터~ (즉시입주가능)
                </p>
                <a href="#" className="inline-block mt-3 bg-[#0d3b4a] text-white text-xs font-bold py-2.5 px-5 rounded-full shadow-md hover:bg-black transition-colors">
                  이천신안실크밸리1차 홈페이지 &gt;
                </a>
              </div>

              <div className="pt-2">
                <div className="flex items-center justify-center gap-2 font-bold text-lg mb-2">
                  <span className="w-2 h-2 bg-black rounded-sm"></span> 2차
                </div>
                <p className="text-sm md:text-base font-bold text-[#B62C68] mb-2">
                  공공지원민간임대 981세대
                </p>
                <p className="text-[13px] md:text-sm font-medium leading-relaxed">
                  ※ 최대 10년간 안정적<br />거주가능(임대기간 자유롭게선택)<br />
                  ※ 임대보증금 HUG 100% 보증!<br />
                  ※ 최대 대출 90% 가능(임대보증금기준)<br />
                  ※ 세금부담 ZERO! (취득세, 재산세, 양도세등)
                </p>
              </div>

              <div className="pt-3 text-3xl md:text-4xl font-extrabold tracking-tighter text-black">
                010-8129-4477
              </div>
            </div>

            <div className="flex justify-between items-center text-sm text-white/90 px-2 mt-2">
              <label className="flex items-center cursor-pointer hover:text-white select-none">
                <input
                  type="checkbox"
                  className="mr-2 w-4 h-4 accent-[#ca1551]"
                  onChange={(e) => {
                    if (e.target.checked) closePopup(true);
                  }}
                />
                오늘 하루 보지 않기
              </label>
              <button onClick={() => closePopup(false)} className="font-bold text-white hover:text-gray-200">닫기</button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="w-full relative overflow-hidden bg-[#1E2F3F] flex flex-col justify-center min-h-[55vh] md:min-h-[75vh]">
        <div className="absolute inset-0 z-0 bg-black">
          {/* Hero Background */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/1. home/hero.avif" alt="이천 신안실크밸리 2차 메인 뷰" className="w-full h-full object-cover block opacity-95" style={{ transformOrigin: 'center center', animation: 'slowZoom 20s infinite alternate ease-in-out' }} />
        </div>

        {/* Hero Text Overlays */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full w-full pointer-events-none px-4 md:px-0 mt-8 md:mt-16 pb-12">
          {/* 로고: 상단 배치 */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/1. home/imgi_22_visual_logo.png" alt="이천 신안실크밸리 2차 로고" className="w-[200px] md:w-[280px] h-auto drop-shadow-lg mb-4 md:mb-8 opacity-95 animate-in fade-in duration-700" />

          {/* 누끼 딴 사진: 중앙 배치 */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/1. home/hero-text-trans.png" alt="10년 공공지원 안전주거보장 10년간의 특권 이천 신안실크밸리 2차" className="w-[90%] md:w-3/5 lg:w-[45%] h-auto drop-shadow-2xl animate-in fade-in slide-in-from-bottom-5 duration-1000" />
        </div>

        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#1E2F3F]/90 to-transparent z-10 pointer-events-none"></div>

        <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center opacity-90 animate-in fade-in duration-1000 delay-1000 fill-mode-both">
          <span className="text-[#FB6719] text-[10px] md:text-xs mb-2 tracking-widest uppercase font-mono animate-pulse drop-shadow-md">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-[#FB6719]/60 rounded-full flex justify-center p-1 shadow-sm">
            <div className="w-1.5 h-2.5 bg-[#FB6719] rounded-full animate-bounce mt-1"></div>
          </div>
        </div>
      </div>

      <div className="w-full relative overflow-hidden bg-gradient-to-r from-[#1E2F3F] via-[#2A435A] to-[#1E2F3F] text-white flex items-center justify-center py-3.5 text-sm md:text-base font-extrabold tracking-widest z-40 shadow-inner group cursor-pointer hover:via-[#3C5771] transition-colors duration-500">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-[100%] animate-shimmer"></div>
        <span className="w-2.5 h-2.5 rounded-full bg-[#FB6719] animate-pulse mr-2.5 shadow-[0_0_8px_rgba(251,103,25,0.8)]"></span>
        <span className="tracking-[0.2em] drop-shadow-md">이천 신안실크밸리 2차 분양 중 !</span>
      </div>

      <div className="w-full bg-[#f8f9fa] flex flex-col items-center py-12 md:py-20 px-4 md:px-8 gap-8 md:gap-16">
        {homeContentImages.map((src, idx) => (
          <div key={idx} className="w-full max-w-5xl bg-white relative block rounded-2xl md:rounded-[2rem] overflow-hidden shadow-lg border border-gray-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`이천 신안실크밸리 2차 홈섹션 이미지 ${idx + 1}`}
              className="w-full h-auto block m-0 p-0"
            />
          </div>
        ))}
      </div>

      {/* 홈 화면 관심고객 등록 폼 영역 */}
      <div className="w-full bg-[#f8f9fa] pb-16 md:pb-24 w-full flex justify-center px-4 md:px-8">
        <div className="w-full max-w-5xl rounded-3xl bg-white shadow-2xl p-6 md:p-12 border border-gray-100 mt-4 md:mt-8">
          <div className="text-center mb-8 md:mb-12 w-full flex flex-col items-center">
            <div className="inline-block px-4 py-1.5 bg-[#B62C68] text-white text-xs md:text-sm font-bold rounded-full mb-4 tracking-widest shadow-md">
              CUSTOMER SERVICE
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111] tracking-tight mb-3">
              관심고객 등록
            </h2>
            <p className="text-gray-500 text-sm md:text-base font-medium">등록해주시면 신속하고 친절하게 안내해 드리겠습니다.</p>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
