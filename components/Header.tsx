"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone } from 'lucide-react';

export default function Header() {
    const pathname = usePathname();

    const navItems = [
        { label: '홈', path: '/' },
        { label: '사업안내', path: '/business' },
        { label: '입지환경', path: '/location' },
        { label: '단지안내', path: '/complex' },
        { label: '문의하기', path: '/contact' },
    ];

    return (
        <div className="w-full bg-white shadow-md flex justify-center sticky top-0 z-50 transition-all duration-300">
            <div className="w-full max-w-6xl px-4 py-4 md:py-3 flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center justify-between w-full md:w-auto mb-3 md:mb-0">
                    <Link href="/">
                        <img src="/1. home/imgi_22_visual_logo.png" alt="이천 신안실크밸리 2차 로고" className="h-[22px] md:h-[28px] w-auto" />
                    </Link>
                    <a href="tel:010-8129-4477" className="md:hidden border border-[#1E2F3F] px-3 py-1.5 text-[#1E2F3F] text-sm flex items-center gap-1.5 hover:bg-[#1E2F3F] hover:text-[#FB6719] transition rounded-sm font-bold">
                        <Phone className="w-4 h-4" />
                        상담
                    </a>
                </div>

                <nav className="flex items-center gap-4 md:gap-8 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 font-bold text-[15px] md:text-base whitespace-nowrap justify-center md:justify-start -scrollbar-hide">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`hover:text-[#FB6719] transition-colors ${pathname === item.path ? 'text-[#FB6719]' : 'text-[#1E2F3F]'}`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <a href="tel:010-8129-4477" className="hidden border border-[#1E2F3F] px-4 py-1.5 text-[#1E2F3F] text-sm md:flex items-center gap-1.5 hover:bg-[#1E2F3F] hover:text-[#FB6719] transition rounded-sm font-bold">
                    <Phone className="w-4 h-4" />
                    분양 상담
                </a>
            </div>

            <style jsx>{`
        .-scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .-scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
        </div>
    );
}
