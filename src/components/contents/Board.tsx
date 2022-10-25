import React, { useState } from 'react';
import styled from 'styled-components';

interface PropsType {
  lists: Array<{ id: number; subject: string; createdAt: string }>;
  boardType: string;
}

const ContainerStyle = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .board-list-item {
    display: flex;
    justify-content: space-between;
    margin: 0;
    max-width: 100%;
    border-top: 1px solid rgba(39, 39, 42, 0.6);
    padding: 2px 0;

    .list-item__index,
    .list-item__subject,
    .list-item__created-at {
      color: rgba(39, 39, 42, 0.8);
      font-weight: 300;
    }

    &:last-child {
      border-bottom: 1px solid rgba(39, 39, 42, 0.6);
    }
  }

  .list-item__index {
    min-width: 2.5rem;
  }

  .list-item__subject {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 1rem 0 4rem;
  }

  .list-item__created-at {
    min-width: 7rem;
    padding-right: 0.5rem;
  }
`;

const Board = ({ boardType, lists }: PropsType) => {
  const [type, setType] = useState(boardType);

  return (
    <ContainerStyle>
      {lists &&
        lists.map(
          (item: { id: number; subject: string; createdAt: string }, index) => {
            return (
              <li className="board-list-item" key={index}>
                <div className="list-item__index">{item.id}</div>
                <div className="list-item__subject">{item.subject}</div>
                <div className="list-item__created-at">{item.createdAt}</div>
              </li>
            );
          }
        )}
    </ContainerStyle>
  );
};

export default Board;
