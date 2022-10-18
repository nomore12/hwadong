import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import useSubjectReplacer from 'src/hooks/SubjectReplacer';

const Archive = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useSubjectReplacer({ ref: ref, subject: '아카이브' });

  return (
    <div
      ref={ref}
      className="w-720 h-128 flex flex-row justify-between mt-48 mb-8">
      <div className="text-lg tracking-widest text-zinc-900"></div>
      <div className="flex flex-col items-end gap-3 text-sm text-zinc-700">
        {/*<Link*/}
        {/*  to="/main/gallery"*/}
        {/*  className="rounded-full bg-red-500 w-9 h-9 text-white text-xs flex justify-center items-center font-thin">*/}
        {/*  more*/}
        {/*</Link>*/}
        <p>갤러리</p>
        <p className="font-thin text-xs">
          재단법인 화동문화재단의 지나온 활동과 관련 아카이브
        </p>
        <p className="mt-12">세계문화오픈 | WCO</p>
        <p className="font-thin text-xs">
          세계문화오픈(WORLD CULTURE OPEN)은 문화의 세걔화, 미래화에 대비하고
        </p>
        <p className="font-thin text-xs">
          다문화 열린 사회로 가는 국제적 문화터전을 마련하며,
        </p>
        <p className="font-thin text-xs">
          {"'더불어 행복한 세상'이라는 비전을 실현하기 위해"}
        </p>
        <p className="font-thin text-xs">
          민관이 협업하는 창의적 글로벌 네트워크를 구성하기 위한 활동 아카이브
        </p>
        <p className="mt-12">기타 목적 사업</p>
        <p className="font-thin text-xs">
          재단법인 화동문화재단이 진행해온 해리티지 투모로우, 정자나무 가꾸기,
          장학금 및 학술연구,
        </p>
        <p className="font-thin text-xs">
          종교단체 지원등의 다양한 목적 사업 아카이브
        </p>
        <p></p>
      </div>
    </div>
  );
};

export default Archive;
