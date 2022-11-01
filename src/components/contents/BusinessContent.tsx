import React, { useRef } from 'react';
import styled from 'styled-components';
import useSubjectReplacer from '../../hooks/SubjectReplacer';

interface PropsType {}

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;

  .business-item {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    line-height: 1.6rem;

    .business-item__main {
      font-size: 0.9rem;
      color: rgba(39, 39, 42, 0.8);
    }

    .business-item__sub {
      font-size: 0.8rem;
      margin-bottom: 2rem;
      width: 70%;
      word-break: keep-all;
      color: rgba(39, 39, 42, 0.6);
    }
  }
`;

const businessContent = [
  { main: '문화, 종교, 언론 발전을 위한 장학사업', sub: null },
  {
    main: '문화, 종교, 언론 발전을 위한 학문의 연구, 조사, 개발, 보급',
    sub: null,
  },
  {
    main: '문화, 종교, 언론 발전을 위한 학문적 연구 및 관련 행사 실천',
    sub: [
      '교육, 연구, 연수, 세미나, 행사 등 실천사업',
      '혁신적인 창의성을 바탕으로 새로운 성과와 가치를 일구어낸 개인이나 단체 시상',
      '문화 체험 프로그램 개발 및 운영',
      '문화, 예술 경연, 공연을 통한 예술창작 및 표현활동 촉진사업',
    ],
  },
  {
    main: '세계 문화 교류 및 발전을 위한 사업',
    sub: [
      '세계 문화 교류 및 발전 촉진 사업',
      '세계 문화 관련 도서 및 정기간행물 발간',
    ],
  },
  {
    main: '의식주를 중심으로 한 전통문화 계승·발전 사업',
    sub: [
      '전통의식주 보급 및 체험활동을 위한 서비스',
      '전통의식주 보존 및 활용을 위한 연구 및 개발',
      '전통의식주 관련 상품 연구, 제조',
      '전통의식주 관련 소개 도서 출판',
    ],
  },
  { main: '기본재산 임대 사업', sub: null },
  { main: '기타 재단목적사업 달성을 위한 실천사업', sub: null },
];

const BusinessContent = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useSubjectReplacer({ ref: ref, subject: '사업내용' });

  return (
    <ContainerStyle ref={ref}>
      {businessContent &&
        businessContent.map((item, index) => {
          return (
            <div className="business-item" key={index}>
              <div className="business-item__main">{item.main}</div>
              <div className="business-item__sub">{item.sub && item.sub}</div>
            </div>
          );
        })}
    </ContainerStyle>
  );
};

export default BusinessContent;
