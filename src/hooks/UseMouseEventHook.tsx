import React from 'react';
import { useAppDispatch } from '../store/Hooks';
import { changeCurr, changeText } from '../store/Slice';
import { useNavigate } from 'react-router-dom';

const useMouseEventHook = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    dispatch(changeCurr('more'));
    dispatch(changeText('more'));
  };

  const onMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    dispatch(changeCurr('main'));
    dispatch(changeText(''));
  };

  const navigateToPage = (url: string) => {
    navigate(`/main/${url}`);
  };

  return {
    onMouseEnter,
    onMouseLeave,
    navigateToPage,
  };
};

export default useMouseEventHook;
