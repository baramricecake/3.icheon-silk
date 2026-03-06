import React from 'react';
import { Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full bg-white border-t border-gray-200 flex flex-col items-center pb-28 md:pb-36 relative z-10 text-center md:text-left">
            <div className="w-full bg-[#202428] flex justify-center py-5 border-b border-[#2c333a]">
                <div className="w-full max-w-[768px] px-6 text-white text-[15px] md:text-lg font-[900] tracking-tight text-center">
                    이천 신안실크밸리 2차
                </div>
            </div>

            <div className="w-full max-w-[768px] px-6 text-[11px] md:text-xs leading-[1.8] break-keep pt-10 md:pt-14 text-gray-500 text-left">
                <p className="font-bold text-gray-900 text-sm mb-1">홈페이지 및 파워링크 제작문의</p>
                <p className="font-medium text-gray-700 mb-6">카톡 아이디: als1502 (tel. 010-8129-4477)</p>

                <div className="space-y-1 text-gray-400">
                    <p>※ 본 사이트에 사용된 CG 및 이미지 등은 소비자의 이해를 돕기 위해 제작된 것으로 실제와 다를 수 있습니다.</p>
                    <p>※ 사업지 인근의 개발사업과 관련된 사항은 지자체, 개발주체 및 관계기관의 사정에 따라 변경될 수 있습니다.</p>
                    <p>※ 제작, 편집, 인쇄과정상 오탈자 등의 오류가 있을 수 있으니, 계약 전 반드시 관계자에게 문의하시기 바랍니다.</p>
                    <p>※ 본 사이트상의 일러스트 및 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.</p>
                    <p>※ 본 사이트의 개발계획, 교통계획, 학교계획 등은 소비자의 이해를 돕기 위한 것으로, 관계기관의 계획변경 등에 따라 달라질 수 있으며, 이는 당사와 무관합니다.</p>
                </div>
            </div>

            {/* 최하단 모바일 고정 유동바 (CTA) */}
            <div className="fixed bottom-0 left-0 right-0 z-[60] flex justify-center pointer-events-none">
                <div className="w-full max-w-[768px] flex pointer-events-auto bg-white shadow-[0_-5px_20px_rgba(0,0,0,0.15)] h-[60px] md:h-[70px]">
                    <a
                        href="tel:010-8129-4477"
                        className="flex-1 bg-white text-[#1E2F3F] flex items-center justify-center font-bold text-lg md:text-xl active:bg-gray-50 transition border-r border-[#1E2F3F]/10"
                    >
                        <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                        분양 상담
                    </a>
                    <a
                        href="/contact"
                        className="flex-1 bg-[#FB6719] text-white flex items-center justify-center font-bold text-lg md:text-xl active:bg-[#e05410] transition"
                    >
                        관심고객 등록
                    </a>
                </div>
            </div>
        </footer>
    );
}
