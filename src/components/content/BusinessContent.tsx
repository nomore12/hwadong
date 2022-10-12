import React, { useEffect, useRef } from 'react';
import useSubjectReplacer from '../../hooks/SubjectReplacer';
import { useAppDispatch, useAppSelector } from '../../store/Hooks';
import { changeSubject } from '../../store/Slice';

const BusinessContent = () => {
  const content = useRef<HTMLDivElement | null>(null);
  useSubjectReplacer({ ref: content, subject: '사업내용' });
  const subject = useAppSelector((state) => state.subject);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(changeSubject('사업내용'));
  // });

  return (
    <div
      id="businessContent"
      ref={content}
      className="w-720 h-128 flex flex-row justify-between mt-48 mb-8">
      <div className="text-lg tracking-widest text-zinc-900"></div>
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
