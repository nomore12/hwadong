import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// interface PropsType {
//   id: number;
//   // content: string;
// }

const NoticeContent = () => {
  const params = useParams();

  useEffect(() => {
    console.log(params);
  }, []);

  return (
    <div className="flex flex-col h-full gap-1 divide-y divide-solid divide-zinc-400 w-full text-zinc-700 font-extralight text-sm">
      <div></div>
      <div className="flex justify-between pt-1">
        <div className="">0</div>
        <div className="basis-8/12 flex justify-end">
          홈페이지 오픈 준비중입니다.
        </div>
        <div>2021.07.28</div>
      </div>
      <div className="h-full flex justify-end py-2">공지사항 내용입니다.</div>
      <div></div>
    </div>
  );
};

export default NoticeContent;
