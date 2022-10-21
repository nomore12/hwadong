import React, { useRef } from 'react';
import useSubjectReplacer from 'src/hooks/SubjectReplacer';

interface PropsType {
  children: React.ReactNode;
}

const BusinessReport = ({ children }: PropsType) => {
  const ref = useRef<HTMLDivElement | null>(null);
  useSubjectReplacer({ ref: ref, subject: '연간사업보고' });

  return (
    <div
      ref={ref}
      className="w-720 h-128 flex flex-row justify-between mt-48 mb-8 relative">
      <div className="text-lg tracking-widest text-zinc-900"></div>
      <div className="flex flex-col items-end gap-8 text-sm text-zinc-700 w-4/5">
        {children}
      </div>
    </div>
  );
};

export default BusinessReport;
