import React from 'react';

export default function LocationPage() {
    const images = [
        "/3.입지환경 _ 이천 신안실크밸리 2차/imgi_7_page0102.jpg"
    ];

    return (
        <div className="w-full flex flex-col animate-in fade-in duration-500 bg-white min-h-screen">
            {images.map((src, idx) => (
                <img key={idx} src={src} alt={`이천 신안실크밸리 2차 입지환경 ${idx + 1}`} className="w-full h-auto block m-0 p-0 shadow-sm" />
            ))}
        </div>
    );
}
