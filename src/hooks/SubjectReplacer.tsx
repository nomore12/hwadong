import React, { useEffect } from 'react';

interface PropsType {
  ref: React.MutableRefObject<HTMLDivElement | null>;
  subject: string;
}

const useSubjectReplacer = ({ ref, subject }: PropsType) => {
  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      const currentPosition = ref?.current
        ? ref.current.getBoundingClientRect().y
        : -1;
      if (currentPosition < window.innerHeight / 2 && currentPosition >= 0) {
        console.log(subject);
      }
    });
  });
};

export default useSubjectReplacer;
