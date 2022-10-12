import React, { useRef } from 'react';
import useSubjectReplacer from 'src/hooks/SubjectReplacer';

interface PropsType {
  children: React.ReactNode;
}

const Establishment = ({ children }: PropsType) => {
  const ref = useRef<HTMLDivElement | null>(null);
  useSubjectReplacer({ ref: ref, subject: '공지사항' });

  return (
    <div
      ref={ref}
      className="w-720 h-128 flex flex-row justify-between mt-48 mb-8">
      <div className="text-lg tracking-widest text-zinc-900"></div>
      <div className="flex flex-col items-end gap-8 text-sm text-zinc-700 w-4/5">
        {children}
      </div>
    </div>
  );
};

export default Establishment;
