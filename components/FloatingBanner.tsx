"use client";
import React from 'react';

const FloatingBanner = () => {
  return (
    <div className="fixed right-3 md:right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {/* 퀵 메뉴 보드 */}
      <div className="bg-white/95 backdrop-blur-sm rounded-[24px] shadow-2xl border border-gray-100 p-2 flex flex-col gap-3">
        {/* 방문 예약 (전화 자동연결) */}
        <a href="tel:010-8129-4477" className="flex flex-col items-center justify-center gap-1 group w-14 py-2">
          <div className="w-10 h-10 rounded-full bg-[#FB6719] text-white flex items-center justify-center group-hover:scale-110 shadow-md transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          </div>
          <span className="text-[10px] font-bold text-gray-700 mt-1 whitespace-nowrap">상담 문의</span>
        </a>
      </div>

      {/* 애니메이션 마우스 스크롤 인디케이터 */}
      <div className="mt-1 flex flex-col items-center opacity-90 animate-bounce">
        <div className="w-8 h-12 bg-[#1E2F3F] rounded-[16px] flex justify-center p-1.5 shadow-lg border border-white/20">
          <div className="w-1.5 h-3 bg-white rounded-full mt-1"></div>
        </div>
        <span className="text-[11px] font-bold text-[#1E2F3F] mt-1 drop-shadow-sm">Scroll</span>
      </div>
    </div>
  );
};

export default FloatingBanner;
