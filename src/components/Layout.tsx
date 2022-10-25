import React, { MouseEventHandler, useEffect } from 'react';
import Navigation from 'src/components/Navigation';
import logo from './assets/images/logo-2-1.png';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useAppSelector } from 'src/store/Hooks';
import { motion } from 'framer-motion';
import { isMobile } from 'react-device-detect';
import MobileNavigation from './MobileNavigation';
import styled from 'styled-components';
import ContentContainer from '../container/ContentContainer';
import Establishment from './contents/Establishment';
import Contact from './contents/Contact';
import { listDummy } from 'src/dummy';
import Board from './contents/Board';

const ContainerStyle = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  @media screen and (max-width: 768px) {
    .section-container {
      width: 100%;
    }
  }

  .web-logo {
    position: fixed;
    top: 4rem;
    left: 4rem;
  }

  .layout-subject {
    position: fixed;
    left: 446px;
    top: 4rem;
    font-size: 1.1rem;
    letter-spacing: 0.2rem;
  }

  .content-container {
    margin-top: 20rem;

    :first-child {
      margin-top: 4rem;
    }
  }
`;

const Layout = () => {
  const subject = useAppSelector((state) => state.subject);
  const cursor = useAppSelector((state) => state.cursor);
  const navigate = useNavigate();

  const backToMainPage = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cursor.curr === 'main' || isMobile) return;

    /*
     * 이코드 어떻게 좀 해야함
     * **/
    e.stopPropagation();
    if (
      (e.target as any).classList.contains('carousel-item') ||
      (e.target as any).classList.contains('control-arrow') ||
      (e.target as any).classList.contains('dot') ||
      (e.target as any).classList.contains('control-dots') ||
      (e.target as any).classList.contains('out-link')
    ) {
      return;
    } else {
      navigate('/main');
    }
  };

  return (
    <ContainerStyle
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      onClick={backToMainPage}>
      <Navigation />
      <div className="web-logo">
        <img src={logo} alt="logo" width="232px" />
      </div>
      <div className="layout-subject">설립목적</div>
      <div className="section-container">
        <ContentContainer>{<Establishment />}</ContentContainer>
        <ContentContainer>{<Contact />}</ContentContainer>
        <ContentContainer>
          {<Board boardType="공지사항" lists={listDummy} />}
        </ContentContainer>
        <ContentContainer>
          {<Board boardType="연간사엄보고" lists={listDummy} />}
        </ContentContainer>
        <ContentContainer>{<Establishment />}</ContentContainer>

        {/*<section id="설립목적">*/}
        {/*  <Establishment></Establishment>*/}
        {/*</section>*/}
        {/*<section id="연혁">*/}
        {/*  <Establishment></Establishment>*/}
        {/*</section>*/}
        {/*<section id="연혁">*/}
        {/*  <History></History>*/}
        {/*</section>*/}
        {/*<section id="사업내용">*/}
        {/*  <BusinessContent></BusinessContent>*/}
        {/*</section>*/}
        {/*<section id="위치 및 연락처">*/}
        {/*  <Contact></Contact>*/}
        {/*</section>*/}
        {/*<section id="재단활동소개">*/}
        {/*  <Routes>*/}
        {/*    <Route path="/*" element={<FoundationActivity />} />*/}
        {/*    <Route path="/onjium" element={<OnJium />} />*/}
        {/*    <Route path="/hong" element={<Hongjingi />} />*/}
        {/*  </Routes>*/}
        {/*</section>*/}
        {/*<section id="재단활동아카이브">*/}
        {/*  <Routes>*/}
        {/*    <Route path="/*" element={<Archive />} />*/}
        {/*    <Route path="/gallery" element={<Gallery />} />*/}
        {/*  </Routes>*/}
        {/*</section>*/}
        {/*<section*/}
        {/*  id="공지사항"*/}
        {/*  className="flex flex-col items-start sm:items-end m-auto w-full">*/}
        {/*  <Notice>*/}
        {/*    <Routes>*/}
        {/*      <Route path="/*" element={<NoticeBoard />} />*/}
        {/*      <Route path="/notice/:id" element={<NoticeContent />} />*/}
        {/*    </Routes>*/}
        {/*  </Notice>*/}
        {/*  <BusinessReport>*/}
        {/*    <Routes>*/}
        {/*      <Route path="/*" element={<BusinessBoard />} />*/}
        {/*      <Route path="/report/:id" element={<BusinessReportContent />} />*/}
        {/*    </Routes>*/}
        {/*  </BusinessReport>*/}
        {/*</section>*/}
      </div>
      {/*<p className="fixed left-16 top-80 hidden xl:hidden lg:block">*/}
      {/*  {subject.subject}*/}
      {/*</p>*/}
      {/*<div className="fixed right-840 top-48 text-lg tracking-widest text-zinc-900 hidden xl:block">*/}
      {/*  {subject.subject}*/}
      {/*</div>*/}
      {/*<Footer />*/}
    </ContainerStyle>
  );
};

export default Layout;
