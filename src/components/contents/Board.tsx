import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ListItem from '../common/ListItem';

interface PropsType {
  lists: Array<{ id: number; subject: string; createdAt: string }>;
  boardType: string;
}

const ContainerStyle = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 640px;
  margin-bottom: 10rem;
`;

const Board = ({ boardType, lists }: PropsType) => {
  const [type, setType] = useState(boardType);

  return (
    <ContainerStyle>
      {lists &&
        lists.map((item, index) => {
          return (
            <ListItem
              key={index}
              index={item.id}
              subject={item.subject}
              createdAt={item.createdAt}
            />
          );
        })}
    </ContainerStyle>
  );
};

export default Board;
