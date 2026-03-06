"use client";
import React from 'react';

const ContactForm = () => (
    <form action="https://formspree.io/f/mgoneoel" method="POST" target="_blank" className="space-y-6">
        <div className="space-y-6 text-left">
            <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">
                    이름 <span className="text-[#2C3B46]">*</span>
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    style={{ color: '#000000', WebkitTextFillColor: '#000000' }}
                    className="w-full px-4 py-3 bg-white text-black font-extrabold rounded-md border border-gray-300 focus:ring-2 focus:ring-[#FB6719] focus:border-[#FB6719] outline-none text-base transition-shadow"
                />
            </div>

            <div>
                <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2">
                    연락처 <span className="text-[#2C3B46]">*</span>
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    style={{ color: '#000000', WebkitTextFillColor: '#000000' }}
                    className="w-full px-4 py-3 bg-white text-black font-extrabold rounded-md border border-gray-300 focus:ring-2 focus:ring-[#FB6719] focus:border-[#FB6719] outline-none text-base transition-shadow"
                />
            </div>

            <div>
                <label htmlFor="date" className="block text-sm font-bold text-gray-900 mb-2">
                    방문예약 날짜
                </label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    style={{ color: '#000000', WebkitTextFillColor: '#000000' }}
                    className="w-full px-4 py-3 bg-white text-black font-extrabold rounded-md border border-gray-300 focus:ring-2 focus:ring-[#FB6719] focus:border-[#FB6719] outline-none text-base transition-shadow"
                />
            </div>

            <div>
                <label htmlFor="time" className="block text-sm font-bold text-gray-900 mb-2">
                    방문예약 시간
                </label>
                <select
                    id="time"
                    name="time"
                    style={{ color: '#000000', WebkitTextFillColor: '#000000' }}
                    className="w-full px-4 py-3 bg-white text-black font-extrabold rounded-md border border-gray-300 focus:ring-2 focus:ring-[#FB6719] focus:border-[#FB6719] outline-none text-base transition-shadow"
                >
                    <option value="">시간 선택</option>
                    <option value="10:00~11:00">10:00~11:00</option>
                    <option value="11:00~12:00">11:00~12:00</option>
                    <option value="12:00~13:00">12:00~13:00</option>
                    <option value="13:00~14:00">13:00~14:00</option>
                    <option value="14:00~15:00">14:00~15:00</option>
                    <option value="15:00~16:00">15:00~16:00</option>
                    <option value="16:00~17:00">16:00~17:00</option>
                    <option value="17:00~18:00">17:00~18:00</option>
                </select>
            </div>

            <div>
                <label htmlFor="type" className="block text-sm font-bold text-gray-900 mb-2">
                    관심 평형
                </label>
                <select
                    id="type"
                    name="type"
                    style={{ color: '#000000', WebkitTextFillColor: '#000000' }}
                    className="w-full px-4 py-3 bg-white text-black font-extrabold rounded-md border border-gray-300 focus:ring-2 focus:ring-[#FB6719] focus:border-[#FB6719] outline-none text-base transition-shadow"
                >
                    <option value="">관심 평형 선택</option>
                    <option value="68㎡">68㎡</option>
                    <option value="84㎡">84㎡</option>
                    <option value="114㎡">114㎡</option>
                </select>
            </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 p-4 text-xs text-gray-600 mt-6 overflow-y-auto h-40 text-left leading-relaxed">
            <p className="font-bold text-gray-800 mb-1">관심고객등록에 대한 개인정보 취급방침</p>
            <p className="mb-3">아파트 분양상담, 관심고객등록, 서비스 신청 등을 위해 아래와 같은 개인정보를 수집 및 이용하고 있습니다.</p>

            <p className="font-bold text-gray-800 mb-1">개인정보 수집 및 이용 주체</p>
            <p className="mb-3">이천 신안실크밸리 2차(이하 '사업단지') 운영주체 010-8129-4477(이하 '운영주체')은 다음의 목적을 위하여 개인정보를 처리하고 있으며, 다음의 목적 이외의 용도로는 이용하지 않습니다.<br />운영주체는 고객님의 개인정보를 중요취급하고 개인정보 보호법 및 정보통신망 이용촉진 및 정보보호 등에 관한 법률을 준수하고 있습니다.</p>

            <p className="font-bold text-gray-800 mb-1">개인정보 수집 및 이용에 대한 동의</p>
            <p className="mb-1">(1) 수집하는 개인정보 항목</p>
            <p className="mb-1">-수집항목: 이름, 휴대전화번호 등의 전부 또는 일부</p>
            <p className="mb-2">-개인정보 수집방법: 개인정보 동의</p>
            <p className="mb-1">(2) 개인정보의 수집 및 이용 목적</p>
            <p className="mb-1">수집한 개인정보를 다음의 목적으로 이용합니다.</p>
            <p className="mb-1">-사업단지에 대한 분양정보 및 마케팅 자료 및 통계에 활용.</p>
            <p className="mb-2">-마케팅 및 광고에 활용, 이벤트 등 광고성 정보 전달, 고객사전추천(MGM), 인구통계학적 특성에 따른 서비스 제공 및 광고 게재, 접속빈도 파악 또는 회원 서비스 이용에 대한 통계 및 분양정보 안내, 아파트 계약확인 및 DM, TM 등</p>
            <p className="mb-1">(3) 개인정보의 보유 및 이용기간</p>
            <p className="mb-1">개인정보 수집 및 이용목적이 달성된 후 해당 정보를 파기합니다. 다만, 아래의 경우에는 예외로 합니다.</p>
            <p className="mb-1">-고객이 사전에 요청한 경우</p>
            <p className="mb-3">-법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</p>
            <p className="mb-1">(4) 거부할 권리</p>
            <p className="mb-4">고객은 정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 다만 동의해야만 관심고객 등록될 수 있으며, 거부시 이용에 제한이 있을 수 있습니다.</p>

            <p className="font-bold text-gray-800 mb-1">개인정보의 제3자 제공에 대한 동의</p>
            <p className="mb-1">(1) 수집한 개인정보의 제3자 제공</p>
            <p className="mb-2">고객에게 보다 질 높은 서비스를 제공하기 위해 아래와 같이 귀하의 개인정보를 사업단지의 사업주체와 사업주체가 지정한 공식 분양대행사(분양사)에게 제공할 수 있습니다. 이에 따라 운영주체는 사업주체 또는 사업주체가 지정한 분양대행사(분양사)로부터 소개수수료(MGM)를 수령할 수 있습니다.</p>
            <p className="mb-2">(2) 제공하는 개인정보 항목: 이름, 거주 지역, 생년월일, 휴대전화번호, 청약통장종류, 청약순위, 선호평형, 성별 등의 전부 또는 일부</p>
            <p className="mb-3">(3) 제공 정보의 이용 목적: 콘텐츠 제공, 불만처리 등 민원처리, 고지사항 전달, 고객사전추천(MGM), 이벤트 등 광고성 정보 전달, 인구통계학적 특성에 따른 서비스 제공 및 광고 게재, 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계, 분양정보 안내 및 분양상담 아파트 계약확인 및 DM, TM 등</p>
            <p className="mb-1">(4) 제공 정보의 보유 및 이용기간</p>
            <p className="mb-1">개인정보 수집 및 이용목적이 달성된 후 해당 정보를 파기합니다. 다만, 아래의 경우에는 예외로 합니다.</p>
            <p className="mb-1">-고객이 사전에 요청한 경우</p>
            <p className="mb-3">-법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</p>
            <p className="mb-1">(5) 거부할 권리</p>
            <p>고객은 개인정보 3자 제공에 대한 동의를 거부할 권리가 있습니다. 다만 동의해야만 관심고객 등록될 수 있으며, 거부시 이용에 제한이 있을 수 있습니다.</p>
        </div>

        {/* 체크박스 필수 */}
        <div className="mt-3 flex items-start px-1 text-left">
            <input type="checkbox" id="privacy-agree" required className="mt-1 mr-2 cursor-pointer w-4 h-4" />
            <label htmlFor="privacy-agree" className="text-sm font-bold text-gray-700 cursor-pointer select-none">
                개인정보 수집 및 이용에 동의합니다. (필수)
            </label>
        </div>

        <div className="pt-4">
            <button
                type="submit"
                className="w-full flex justify-center py-4 px-4 font-bold text-white bg-[#1E2F3F] hover:bg-[#FB6719] transition transform hover:-translate-y-1 shadow-md rounded-md text-lg"
            >
                🎁 관심고객 등록하고 특별 혜택받기
            </button>
        </div>
    </form>
);

export default ContactForm;
