import React, { useRef } from 'react';
import map from 'src/components/assets/images/map.png';
import addressMap from 'src/components/assets/images/map-address.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import instagram from 'src/components/assets/images/instagram.png';
import { ReactComponent as Instagram } from 'src/components/assets/images/icons8-instagram-100.svg';
import useSubjectReplacer from 'src/hooks/SubjectReplacer';

const Contact = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useSubjectReplacer({ ref: ref, subject: '위치및연락처' });

  return (
    <div
      ref={ref}
      className="w-720 h-128 flex flex-row justify-between mt-48 mb-8">
      <div className="text-lg tracking-widest text-zinc-900"></div>
      <div className="flex flex-col items-end gap-2 text-sm text-zinc-700 pt-12">
        <img src={addressMap} width="600px" />
        <span className="pt-6">
          <Instagram width="36px" height="36px" />
        </span>
        <div className="flex flex-col items-end text-sm font-thin gap-1 pt-2">
          <p>tel| 02. 751. 9898</p>
          <p>fax| 02. 751. 9894</p>
          <p>email| hwadongcf@naver.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
