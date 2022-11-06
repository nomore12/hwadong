import React, { useEffect } from 'react';
import styled from 'styled-components';

interface PropsType {
  id: number;
  createdAt: string;
  subject: string;
  content?: string;
  imgUrl: string;
}

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const BoardContent = ({
  id,
  createdAt,
  subject,
  content,
  imgUrl,
}: PropsType) => {
  return (
    <div>
      <h3>{subject}</h3>
      <div>
        <img src={imgUrl} alt={subject} />
      </div>
      <div>{content ? content : '홈페이지 오픈 준비중입니다.'}</div>
    </div>
  );
};

export default BoardContent;
