"use client";
import React, { useState, useEffect } from 'react';
import { ArrowRight } from "lucide-react";

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

  // 1. home 디렉토리 내부의 이미지들 배열
  const homeImages = [
    "/1. home/hero.avif",
    "/1. home/hero-bedge.png",
    "/1. home/imgi_8_page0101.jpg",
    "/1. home/imgi_10_page0102.jpg",
    "/1. home/imgi_26_page0102.jpg",
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

      {/* 팝업 모달 */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 transition-opacity">
          <div className="relative max-w-[400px] w-full bg-white shadow-2xl animate-in fade-in zoom-in duration-200">
            {/* 팝업 이미지 임시 지정 */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/1. home/hero.avif" alt="이천 신안실크밸리 2차 안내 팝업" className="w-full h-auto block" />
            <div className="bg-[#f8f9fa] border-t border-gray-200 p-3 flex justify-between items-center text-sm text-gray-600">
              <label className="flex items-center cursor-pointer hover:text-gray-900 select-none">
                <input
                  type="checkbox"
                  className="mr-2 w-4 h-4"
                  onChange={(e) => {
                    if (e.target.checked) closePopup(true);
                  }}
                />
                오늘 하루 보지 않기
              </label>
              <button onClick={() => closePopup(false)} className="font-bold text-gray-800 hover:text-black">닫기</button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="w-full relative overflow-hidden bg-[#1E2F3F] flex flex-col justify-center">
        <div className="w-full relative z-0 bg-black">
          <img src={homeImages[0]} alt="이천 신안실크밸리 2차 메인 뷰" className="w-full h-auto block opacity-95" style={{ transformOrigin: 'center top', animation: 'slowZoom 20s infinite alternate ease-in-out' }} />

          <div className="absolute inset-0 flex items-center justify-center z-20">
            <a
              href="/contact"
              className="px-6 py-3 border border-white/60 bg-black/20 backdrop-blur-sm text-white text-sm md:text-base font-medium rounded-full hover:bg-white hover:text-[#1E2F3F] transition-all tracking-widest flex items-center gap-2 shadow-lg"
            >
              <span className="font-bold">관심고객 등록</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#1E2F3F]/90 to-transparent z-10 pointer-events-none"></div>

        <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center opacity-90 animate-in fade-in duration-1000 delay-1000 fill-mode-both">
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

      {homeImages.slice(1).map((src, idx) => (
        <div key={idx} className="w-full bg-white relative block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt="이천 신안실크밸리 2차 홈 이미지"
            className="w-full h-auto block m-0 p-0 shadow-sm"
          />
        </div>
      ))}
    </div>
  );
}
