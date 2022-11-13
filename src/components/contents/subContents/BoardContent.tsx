import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import ListItem from 'src/components/common/ListItem';
import { animateScroll } from 'react-scroll';

interface PropsType {
  id?: number;
  createdAt?: string;
  subject?: string;
  content?: string;
  imgUrl: string;
}

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 467px;

  @media screen and (max-width: 768px) {
    height: calc(100vh - 160px);
    padding-top: 160px;
  }

  .board-content-area {
    height: 100%;
    font-weight: 300;
    padding-top: 1rem;
    text-align: start;
  }

  & * {
    list-style: none;
  }
`;

const BoardContent = () => {
  const param = useParams();

  useEffect(() => {
    animateScroll.scrollToTop();
  }, []);

  return (
    <ContainerStyle>
      <ListItem
        index={1}
        subject={'홈페이지 오픈 준비중입니다.'}
        createdAt={'2022-11-13'}
      />
      <p className="board-content-area">{'홈페이지 오픈 준비중입니다.'}</p>
    </ContainerStyle>
  );
};

export default BoardContent;
