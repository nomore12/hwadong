import React from 'react';
import { Link } from 'react-router-dom';

const OnJium = () => {
  return (
    <div className="w-720 h-128 flex flex-row justify-between mt-48 mb-8 relative">
      <Link
        to="/main"
        className="absolute rounded-full bg-red-500 w-9 h-9 text-white text-xs flex justify-center items-center font-thin top-40">
        back
      </Link>
      <div className="text-lg tracking-widest text-zinc-900">온지음</div>
      <div className="w-480 flex flex-col items-end gap-8 text-sm text-zinc-700">
        <p>
          {'"온 | 모두 온전하게", "지음 | 만들다, 이어가다, 뜻이 통하다"라는'}
        </p>
        <p>의미를 가진 전통문화 연구소이며,</p>
        <p>21세기형 장인 육성과 한국문화를 알리는</p>
        <p>대표 브랜드의 생산을 목표로 하고 있다.</p>
        <a
          className="text-zinc-500 text-xs"
          href="https://onjium.org/"
          target="_blank"
          rel="noreferrer">
          LINK
        </a>
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between items-center w-full">
            <p>옷공방</p>
            <p className="text-xxs">
              전통 복식, 유물재현, 21세기 한복연구, 전통 복식사 교육, 전통 복식
              및 한복
            </p>
          </div>
          <div className="flex flex-row justify-between items-center w-full">
            <p></p>
            <p className="text-xxs">현대화 연구 용역 등</p>
          </div>
          <div className="flex flex-row justify-between items-center w-full mt-12">
            <p>맛공방</p>
            <p className="text-xxs">
              고조리서 연구 및 한식 현대화 연구, 전통 한식 및 조리이론 교육,
              한식 레시피
            </p>
          </div>
          <div className="flex flex-row justify-between items-center w-full">
            <p></p>
            <p className="text-xxs">및 조리 방법 소개 등</p>
          </div>
          <div className="flex flex-row justify-between items-center w-full mt-12">
            <p>집공방</p>
            <p className="text-xxs">
              한식 구조와 재료 개발 연구, 한옥 및 건축 설계 교육, 한옥과 관련된
              기획 연구 등
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnJium;
