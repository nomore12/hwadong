import React from 'react';
import styled from 'styled-components';
import logo1 from 'src/components/assets/images/logo-1.png';
import logo2 from 'src/components/assets/images/logo-2.png';

interface PropsType {}

const ContainerStyle = styled.footer`
  border-top: 1px solid black;
  position: absolute;
  bottom: 0;
  margin: 0 1rem;
  width: calc(100% - 2rem);
  padding: 1rem 0;
  font-size: 0.8rem;
  color: rgba(39, 39, 42, 0.8);
`;

const MobileFooter = () => {
  return (
    <ContainerStyle>
      <p>이용약관 | 개인정보취급방침</p>
      <p>대표 | 홍 석 현</p>
      <p>사업자등록번호 | 104 - 82 - 10204</p>
      <p>대표번호 | 02 - 751 - 9898</p>
      <p>이메일 | hwadongcf@naver.com</p>
      <p>주소 | 서울특별시 중구 서소문로 100</p>
      <p>COPYRIGHT (C) 2022 KSA ALL RIGHTS RESERVED.</p>
    </ContainerStyle>
  );
};

export default MobileFooter;
