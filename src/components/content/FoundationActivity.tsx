import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import useSubjectReplacer from 'src/hooks/SubjectReplacer';

const FoundationActivity = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useSubjectReplacer({ ref: ref, subject: '재단활동소개' });

  return (
    <div
      ref={ref}
      className="w-720 h-128 flex flex-row justify-between mt-48 mb-8">
      <div className="text-lg tracking-widest text-zinc-900"></div>
      <div className="flex flex-col items-end gap-3 text-sm text-zinc-700">
        {/*<Link*/}
        {/*  to="/main/onjium"*/}
        {/*  className="rounded-full bg-red-500 w-9 h-9 text-white text-xs flex justify-center items-center font-thin">*/}
        {/*  more*/}
        {/*</Link>*/}
        <p>전통문화연구소 | 온지음</p>
        <p className="font-thin text-xs">
          온지음은 우리 전통 문화에 담긴 가치와 정신을 계승하고
        </p>
        <p className="font-thin text-xs">
          이를 현대화하여 올바른 내일의 유산을 연구합니다.
        </p>
        <p className="mt-12">유민문화재단</p>
        <p className="font-thin text-xs">
          유민문화재단은 유민 홍진기 중앙일보 선대 회장이 생전에
        </p>
        <p className="font-thin text-xs">
          국가와 사회에 공헌하는 언론 역할을 당부하고,
        </p>
        <p className="font-thin text-xs">
          항상 미래를 유지하는 삶을 가르친 그의 유지를 받을어
        </p>
        <p className="font-thin text-xs">
          사회 복지 및 언론발전에 이바지하고자
        </p>
        <p className="font-thin text-xs">
          다양한 공익사업을 운영하고 있습니다.
        </p>
        <p></p>
      </div>
    </div>
  );
};

export default FoundationActivity;
