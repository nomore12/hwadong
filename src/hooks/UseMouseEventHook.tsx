import React from 'react';
import { useAppDispatch } from '../store/Hooks';
import { changeCurr, changeText } from '../store/Slice';
import { useNavigate } from 'react-router-dom';

const useMouseEventHook = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onMouseEnter = (e: React.MouseEvent<HTMLDivElement>, text?: string) => {
    text ? dispatch(changeCurr(text)) : dispatch(changeCurr('more'));
    text ? dispatch(changeText(text)) : dispatch(changeText('more'));
  };

  const onMouseLeave = (e: React.MouseEvent<HTMLDivElement>, text?: string) => {
    text ? dispatch(changeCurr(text)) : dispatch(changeCurr('main'));
    text ? dispatch(changeText(text)) : dispatch(changeText(''));
  };

  const navigateToPage = (url: string) => {
    navigate(url);
  };

  return {
    onMouseEnter,
    onMouseLeave,
    navigateToPage,
  };
};

export default useMouseEventHook;
