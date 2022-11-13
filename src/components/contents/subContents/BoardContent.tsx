import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import ListItem from '../../common/ListItem';

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
  height: 100%;

  @media screen and (max-width: 768px) {
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
    console.log('board', param);
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
