import React from 'react';
import styled from 'styled-components';

interface PropsType {}

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 0.9rem;
  gap: 1.8rem;
  color: rgba(39, 39, 42, 1);
  font-weight: 400;
  width: 320px;
  line-height: 4rem;
`;

const Establishment = () => {
  return (
    <ContainerStyle>
      <p>
        재단법인 중앙화동재단은 「민법」 및 「문화체육관광부 및 감독에 관한
        규칙」에 의해 설립된 비영리법인으로, 「공익법인의 설립·운영에 관한
        법률」의 규정에 따라 문화, 종교, 언론 발전을 위한 연구, 실천 사업과 관련
        단체에 대한 지원을 목적으로 공익사업을 운영하고 있습니다.
      </p>
    </ContainerStyle>
  );
};

export default Establishment;
