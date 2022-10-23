import React, { useEffect } from 'react';
import { useNavigation, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store/Hooks';
import { changeCurr, changeSubject, changeText } from '../../../store/Slice';
import { useNavigate } from 'react-router-dom';
import { animateScroll } from 'react-scroll';

interface PropsType {
  id?: number;
  type?: 'notice' | 'report';
}

const BusinessReportContent = ({ id, type }: PropsType) => {
  const params = useParams();
  const cursor = useAppSelector((state) => state.cursor);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    navigate('/main');
  };

  useEffect(() => {
    dispatch(changeCurr('notice'));
    dispatch(changeText('back'));
    animateScroll.scrollTo(5160);

    return () => {
      dispatch(changeText(''));
      dispatch(changeCurr('main'));
    };
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
      <div className="h-full flex justify-end py-2">{`${
        type === 'notice' ? '공지사항' : '연간사업보고'
      } 내용입니다`}</div>
      <div></div>
    </div>
  );
};

export default BusinessReportContent;
