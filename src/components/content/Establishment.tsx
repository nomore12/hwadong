import React from 'react';

const Establishment = () => {
  return (
    <div className="w-720 h-128 flex flex-row justify-between mt-48 mb-8">
      <div className="text-lg tracking-widest text-zinc-900">설립목적</div>
      <div className="flex flex-col items-end gap-8 text-sm text-zinc-700">
        <p>재단법인 중앙화동재단은</p>
        <p>문화, 종교, 언론 발전을 위한</p>
        <p>연구, 실천사업과 관련단체 지원을 목적으로</p>
        <p>2007년 8월에 설립</p>
      </div>
    </div>
  );
};

export default Establishment;
