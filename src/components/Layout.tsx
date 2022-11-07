import React, { MouseEventHandler, useEffect, useState } from 'react';
import Navigation from 'src/components/Navigation';
import logo from './assets/images/logo-2-1.png';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
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
import History from './contents/History';
import BusinessContent from './contents/BusinessContent';
import FoundationActivity from './contents/FoundationActivity';
import Archive from './contents/Archive';
import Footer from './contents/Footer';
import MobileFooter from './contents/MobileFooter';
import Gallery from 'src/components/contents/subContents/Gallery';
import PageContainer from '../container/PageContainer';
import Onjium from './contents/subContents/Onjium';
import Hong from './contents/subContents/Hong';
import BoardContent from './common/BoardContent';
import { animateScroll } from 'react-scroll';

// @ts-ignore
const ContainerStyle = styled(motion.div)<{ color: string }>`
  display: flex;
  justify-content: flex-end;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  background-color: ${(props) => (props.color ? props.color : '#fff')};
  transition: background-color 1000ms linear;

  @media screen and (max-width: 768px) {
    .section-container {
      width: 100%;
    }
  }

  .web-logo {
    position: fixed;
    top: 4rem;
    left: 4rem;

    @media screen and (max-width: 1024px) {
      display: none;
    }
  }

  .mobile-logo {
    position: fixed;
    top: 0;
    left: 0;
    display: none;
    width: 100%;
    padding: 1rem 0 0 1rem;
    background-color: ${(props) => (props.color ? props.color : '#fff')};
    transition: background-color 1000ms linear;

    @media screen and (max-width: 1024px) {
      display: flex;
    }
  }

  .layout-subject {
    position: fixed;
    //left: 446px;
    left: 580px;
    top: calc(4rem + 140px);
    font-size: 1.1rem;
    letter-spacing: 0.2rem;

    @media screen and (max-width: 1300px) {
      display: none;
    }
  }

  .content-container {
    margin-top: 20rem;

    :first-child {
      margin-top: 4rem;
    }
  }

  .mobile-subject {
    display: none;
    margin: 4rem 1rem 0 1rem;

    @media screen and (max-width: 1024px) {
      padding: 0;
      display: flex;
      justify-content: flex-end;
      border-bottom: 1px solid rgba(39, 39, 42, 0.6);
      font-size: 1.2rem;
      letter-spacing: 0.5rem;
    }
  }

  .mobile-height {
    height: 128px;
    display: none;

    @media screen and (max-width: 1024px) {
      display: flex;
    }
  }
`;

const Layout = () => {
  const subject = useAppSelector((state) => state.subject);
  const cursor = useAppSelector((state) => state.cursor);
  const navigate = useNavigate();
  const [color, setColor] = useState('#e3ded9');
  const [isSubjectHide, setSubjectHide] = useState(false);
  const location = useLocation();

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

  useEffect(() => {
    const pos = localStorage.getItem('curr');
    if (pos) {
      animateScroll.scrollTo(Number(pos), { duration: 0 });
    }
  }, [location.pathname]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );

      const scrollPosition = window.scrollY / scrollHeight;
      if (scrollPosition < 0.2) {
        setColor('#e3ded9');
      } else if (scrollPosition >= 0.2 && scrollPosition < 0.4) {
        setColor('#e1e3da');
      } else if (scrollPosition >= 0.4 && scrollPosition < 0.6) {
        setColor('#dae3e1');
      } else if (scrollPosition >= 0.6 && scrollPosition < 0.8) {
        setColor('#dadce3');
      } else {
        setColor('#e3dada');
      }
    });
  });

  return (
    <ContainerStyle
      color={color}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      onClick={backToMainPage}>
      <Navigation />
      <div className="web-logo">
        <img src={logo} alt="logo" width="232px" />
      </div>
      <div className="mobile-logo">
        <img src={logo} alt="logo" width="128px" />
      </div>
      {!isSubjectHide && (
        <div className="layout-subject">{subject.subject}</div>
      )}
      <div className="section-container">
        <Routes>
          <Route
            path="/*"
            element={
              <div>
                <div className="mobile-height"></div>
                <p className="mobile-subject">설립목적</p>
                <section id="설립목적">
                  <ContentContainer>{<Establishment />}</ContentContainer>
                </section>
                <p className="mobile-subject">연혁</p>
                <section id="연혁">
                  <ContentContainer>{<History />}</ContentContainer>
                </section>
                <p className="mobile-subject">사업내용</p>
                <section id="사업내용">
                  <ContentContainer>{<BusinessContent />}</ContentContainer>
                </section>
                <p className="mobile-subject">위치 및 연락처</p>
                <section id="위치및연락처">
                  <ContentContainer>{<Contact />}</ContentContainer>
                </section>
                <p className="mobile-subject">재단활동 소개</p>
                <section id="재단활동소개">
                  <ContentContainer>{<FoundationActivity />}</ContentContainer>
                </section>
                <p className="mobile-subject">재단활동 아카이브</p>
                <section id="재단활동아카이브">
                  <ContentContainer>{<Archive />}</ContentContainer>
                </section>
                <p className="mobile-subject">공지사항</p>
                <section id="공지사항">
                  <ContentContainer>
                    {<Board boardType="공지사항" lists={listDummy} />}
                  </ContentContainer>
                </section>
                <p className="mobile-subject">연간 사업보고</p>
                <section id="연간사업보고">
                  <ContentContainer>
                    {<Board boardType="연간사업보고" lists={listDummy} />}
                  </ContentContainer>
                </section>
              </div>
            }
          />
          <Route
            path="/gallery"
            element={
              <section>
                <PageContainer>
                  <Gallery />
                </PageContainer>
              </section>
            }
          />
          <Route
            path="/onjium"
            element={
              <section>
                <PageContainer>
                  <Onjium />
                </PageContainer>
              </section>
            }
          />
          <Route
            path="/hong"
            element={
              <section>
                <PageContainer>
                  <Onjium />
                </PageContainer>
              </section>
            }
          />
          <Route
            path="/notice/:id"
            element={
              <section>
                <PageContainer>
                  <BoardContent />
                </PageContainer>
              </section>
            }
          />
        </Routes>

        {/*<div style={{ height: '20rem' }}></div>*/}

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
      {isMobile ? <MobileFooter /> : <Footer />}
    </ContainerStyle>
  );
};

export default Layout;
