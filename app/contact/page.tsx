import React from 'react';
import ContactForm from '../../components/ContactForm';
import SubVisual from '../../components/SubVisual';

export default function ContactPage() {
    return (
        <div className="w-full relative pb-20 md:pb-24 flex flex-col items-center animate-in fade-in duration-500 bg-white min-h-[70vh]">
            <SubVisual title="문의하기" />
            <div className="py-16 md:py-24 px-6 md:px-10 w-full flex flex-col items-center mt-6">
                <div className="text-center mb-12 w-full flex flex-col items-center">
                    <div className="w-12 h-1 bg-[#FB6719] mb-8 rounded-full"></div>

                    <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-tighter text-[#1E2F3F] animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        이천 신안실크밸리 <span className="font-bold border border-[#1E2F3F] px-2 py-1 ml-1 text-2xl md:text-3xl">2차</span>
                    </h2>

                    <div className="w-full flex justify-center mt-2">
                        <p className="inline-block text-[#1E2F3F] bg-gray-50 border border-gray-200 font-bold text-lg md:text-xl tracking-tight px-6 py-2 rounded-full shadow-sm">
                            관심고객 등록 및 분양 상담
                        </p>
                    </div>
                </div>

                <div className="w-full max-w-[600px] border-t border-dashed border-gray-300 pt-10">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
