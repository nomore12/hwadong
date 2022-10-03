import React from 'react';

const BusinessContent = () => {
  return (
    <div className="w-720 h-128 flex flex-row justify-between mt-48 mb-8">
      <div className="text-lg tracking-widest text-zinc-900">사업내용</div>
      <div className="flex flex-col items-end gap-8 text-sm text-zinc-700">
        <p>문화, 종교, 언론 발전을 위한 장학사업</p>
        <p>문화, 종교, 언론 발전을 위한 학문의 연구, 조사, 개발, 보급</p>
        <p>문화발전을 위한 학문적 연구 및 문화 행사 실천</p>
        <p>세계 문화 교류 및 발전을 위한 사업</p>
        <p>의식주를 중심으로 한 전통문화 계승 및 발전 사업</p>
        <p>기타 재단 목적 사업 달성을 위한 실천사업</p>
      </div>
    </div>
  );
};

export default BusinessContent;
