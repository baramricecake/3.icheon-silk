import React from 'react';
import SubVisual from '../../components/SubVisual';

export default function ComplexPage() {
    const images = [
        "/4.1 동호배치도 _ 이천 신안실크밸리 2차/imgi_7_page0201.jpg",
        "/4.2단지설계 _ 이천 신안실크밸리 2차/imgi_7_page0202.jpg",
        "/4.3커뮤니티 _ 이천 신안실크밸리 2차/imgi_7_page0203.jpg",
        "/4.4시스템 _ 이천 신안실크밸리 2차/imgi_7_page0204.jpg"
    ];

    return (
        <div className="w-full flex flex-col animate-in fade-in duration-500 bg-white">
            <SubVisual title="단지안내" />
            {images.map((src, idx) => (
                <img key={idx} src={src} alt={`이천 신안실크밸리 2차 단지안내 ${idx + 1}`} className="w-full h-auto block m-0 p-0 shadow-sm border-b border-gray-100 last:border-0" />
            ))}
        </div>
    );
}
