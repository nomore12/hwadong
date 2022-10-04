import React from 'react';

const Footer = () => {
  return (
    <div
      className="w-[calc(100vw-9rem-360px)] py-4 flex flex-row justify-between h-48"
      style={{ borderTop: '1px solid rgb(113 113 122)', height: '275px' }}>
      <div className="flex flex-col justify-between h-full">
        <div className="text-xs text-zinc-700 font-thin">
          이용약관 | 개인정보취급방침
        </div>
        <div className="flex flex-row">
          <div>국세청 로고</div>
          <div className="ml-20">국민권인위원회 로고</div>
        </div>
      </div>
      <div className="flex flex-col justify-between h-full py-6 items-end text-xxs text-zinc-700">
        <div>대표 | 홍 석 현</div>
        <div>사업자등록번호 | 104 - 82 - 10204</div>
        <div>대표번호 | 02 - 751 - 9898</div>
        <div>이메일 | hwadongcf@naver.com</div>
        <div>주소 | 서울특별시 중구 서소문로 100</div>
        <div>COPYRIGHT (C) 2022 KSA ALL RIGHTS RESERVED.</div>
      </div>
    </div>
  );
};

export default Footer;
