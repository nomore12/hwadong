import React from 'react';

interface PropsType {
  children: React.ReactNode;
}

const Establishment = ({ children }: PropsType) => {
  return (
    <div className="w-720 h-128 flex flex-row justify-between mt-48 mb-8">
      <div className="text-lg tracking-widest text-zinc-900">공지사항</div>
      <div className="flex flex-col items-end gap-8 text-sm text-zinc-700 w-4/5">
        {children}
      </div>
    </div>
  );
};

export default Establishment;
