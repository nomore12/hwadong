import React from 'react';
import styled from 'styled-components';
import { onOffOverlay } from 'src/store/Slice';
import { useAppDispatch, useAppSelector } from 'src/store/Hooks';

const ContainerStyle = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  //background-color: black;
  width: 2rem;
  height: 2rem;
  z-index: 4;
  display: none;
  border: 1px solid black;

  @media screen and (max-width: 768px) {
    display: block;
  }

  .line {
    position: absolute;
    width: 100%;
    height: 0.35rem;
    top: 0.3rem;
    background-color: black;
  }

  .top {
    //transform: rotateZ(-45deg) translate(-10px, 10px);
    //transition: all 2s;
  }

  .bottom {
    top: 1.2rem;
    //transform: rotateZ(45deg) translate(-5px, -5px);
  }
`;

const MobileNavigation = () => {
  const dispatch = useAppDispatch();
  const overlay = useAppSelector((state) => state.overlay.enabled);

  const onClick = () => {
    console.log('mobile nav click');
    dispatch(onOffOverlay(!overlay));
  };
  return (
    <ContainerStyle className="" onClick={onClick}>
      {/*<div>nav</div>*/}
      <div className="line top"></div>
      <div className="line bottom"></div>
    </ContainerStyle>
  );
};

export default MobileNavigation;
