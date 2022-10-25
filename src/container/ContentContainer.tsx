import React from 'react';
import styled from 'styled-components';

interface PropsType {
  children?: React.ReactNode;
}

const ContainerStyle = styled.section`
  display: flex;
  justify-content: flex-end;
  //border: 1px solid red;
  width: 768px;
  padding: 0 4rem;
  text-align: end;

  @media only screen and (max-width: 768px) {
    width: 100%;
    //width: ;
    padding: 1rem;
  }
`;

const ContentContainer = ({ children }: PropsType) => {
  return (
    <ContainerStyle className="content-container">{children}</ContainerStyle>
  );
};

export default ContentContainer;
