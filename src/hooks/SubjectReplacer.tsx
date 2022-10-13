import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/store/Hooks';
import { changeSubject } from 'src/store/Slice';

interface PropsType {
  ref: React.MutableRefObject<HTMLDivElement | null>;
  subject: string;
}

const useSubjectReplacer = ({ ref, subject }: PropsType) => {
  // const [current, setCurrent] = useState<string>('');
  const currentSubject = useAppSelector((state) => state.subject);
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      const currentPosition = ref?.current
        ? ref.current.getBoundingClientRect().y
        : -1;
      if (currentPosition < window.innerHeight / 2 && currentPosition >= 0) {
        console.log(subject);
        // setCurrent('사업내용');
        dispatch(changeSubject(subject));
      }
    });
  });

  // return current;
};

export default useSubjectReplacer;