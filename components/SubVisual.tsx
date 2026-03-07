import React from 'react';

interface SubVisualProps {
    title: string;
}

export default function SubVisual({ title }: SubVisualProps) {
    return (
        <div className="w-full relative h-[250px] md:h-[300px] flex flex-col justify-center items-center bg-[#1E2F3F] overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#111A24]/50"></div>

            {/* Title Content */}
            <div className="relative z-10 flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-700">
                <div className="px-3 py-1 border border-white/30 rounded-full text-white/80 text-xs md:text-sm font-semibold tracking-widest mb-4">
                    이천 신안실크밸리 2차
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-lg">
                    {title}
                </h1>
                <div className="w-12 h-1 bg-[#FB6719] mt-6 rounded-full"></div>
            </div>
        </div>
    );
}
