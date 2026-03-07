import React from 'react';
import SubVisual from '../../components/SubVisual';

export default function BusinessPage() {
    const images = [
        "/2. 사업안내 _ 이천 신안실크밸리 2차/imgi_8_page0101.jpg",
        "/2. 사업안내 _ 이천 신안실크밸리 2차/imgi_9_개요_JPG.jpg"
    ];

    return (
        <div className="w-full flex flex-col animate-in fade-in duration-500 bg-white min-h-screen">
            <SubVisual title="사업안내" />
            {images.map((src, idx) => (
                <img key={idx} src={src} alt={`이천 신안실크밸리 2차 사업안내 ${idx + 1}`} className="w-full h-auto block m-0 p-0 shadow-sm border-b border-gray-100 last:border-0" />
            ))}
        </div>
    );
}
