import React, { MouseEventHandler, useEffect } from 'react';
import ContentWrapper from 'src/components/ContentWrapper';
import Navigation from 'src/components/Navigation';
import Establishment from 'src/components/content/Establishment';
import History from 'src/components/content/History';
import logo from './assets/images/logo-2-1.png';
import Notice from 'src/components/content/Notice';
import NoticeBoard from 'src/components/content/NoticeBoard';
import NoticeContent from 'src/components/content/subContent/NoticeContent';
import { Route, Routes, useNavigate } from 'react-router-dom';
import BusinessContent from './content/BusinessContent';
import Contact from 'src/components/content/Contact';
import FoundationActivity from 'src/components/content/FoundationActivity';
import Archive from 'src/components/content/Archive';
import OnJium from 'src/components/content/subContent/OnJium';
import Gallery from './content/subContent/Gallery';
import Footer from './Footer';
import { useAppSelector } from 'src/store/Hooks';
import { motion } from 'framer-motion';
import Hongjingi from './content/subContent/Hongjingi';
import BusinessReport from './content/BusinessReport';
import BusinessReportContent from './content/subContent/BusinessReportContent';
import BusinessBoard from './content/BusinessBoard';

const Layout = () => {
  const subject = useAppSelector((state) => state.subject);
  const cursor = useAppSelector((state) => state.cursor);
  const navigate = useNavigate();

  const backToMainPage = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cursor.curr === 'main') return;

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="px-20 pt-10 relative flex flex-col items-end columns-3"
      onClick={backToMainPage}>
      <div className="fixed left-16 bottom-20 z-0">
        <Navigation />
      </div>
      <div className="fixed left-14 top-14 pl-1">
        <img src={logo} alt="logo" width="232px" />
      </div>
      <div className="fixed right-720 top-48 text-lg tracking-widest text-zinc-900">
        {subject.subject}
      </div>
      <section id="설립목적">
        <Establishment></Establishment>
      </section>
      <section id="연혁">
        <History></History>
      </section>
      <section id="사업내용">
        <BusinessContent></BusinessContent>
      </section>
      <section id="위치 및 연락처">
        <Contact></Contact>
      </section>
      <section id="재단활동소개">
        <Routes>
          <Route path="/*" element={<FoundationActivity />} />
          <Route path="/onjium" element={<OnJium />} />
          <Route path="/hong" element={<Hongjingi />} />
        </Routes>
      </section>
      <section id="재단활동아카이브">
        <Routes>
          <Route path="/*" element={<Archive />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </section>
      <section id="공지사항">
        <Notice>
          <Routes>
            <Route path="/*" element={<NoticeBoard />} />
            <Route path="/notice/:id" element={<NoticeContent />} />
          </Routes>
        </Notice>
        <BusinessReport>
          <Routes>
            <Route path="/*" element={<BusinessBoard />} />
            <Route path="/report/:id" element={<BusinessReportContent />} />
          </Routes>
        </BusinessReport>
      </section>
      <Footer />
    </motion.div>
  );
};

export default Layout;
