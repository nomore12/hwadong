import React from 'react';
import ContentWrapper from 'src/components/ContentWrapper';
import Navigation from 'src/components/Navigation';
import Establishment from 'src/components/content/Establishment';
import History from 'src/components/content/History';
import logo from './assets/images/logo-2-1.png';
import Notice from 'src/components/content/Notice';
import NoticeBoard from 'src/components/content/NoticeBoard';
import NoticeContent from 'src/components/content/subContent/NoticeContent';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import BusinessContent from './content/BusinessContent';
import Contact from 'src/components/content/Contact';
import FoundationActivity from 'src/components/content/FoundationActivity';
import Archive from 'src/components/content/Archive';
import OnJium from 'src/components/content/subContent/OnJium';
import Gallery from './content/subContent/Gallery';
import Footer from './Footer';

const TestElement = () => {
  return (
    <div className="bg-blue-400">
      <div>test</div>
      <div>test</div>
      <div>test</div>
    </div>
  );
};

const Layout = () => {
  return (
    <div className="px-20 pt-10 relative flex flex-col items-end columns-3">
      <div className="fixed left-16 bottom-20 z-0">
        <Navigation />
      </div>
      <div className="fixed left-14 top-14 pl-1">
        <img src={logo} width="232px" />
      </div>
      <Establishment></Establishment>
      <History></History>
      <BusinessContent></BusinessContent>
      <Contact></Contact>
      <Routes>
        <Route path="/*" element={<FoundationActivity />} />
        <Route path="/onjium" element={<OnJium />} />
      </Routes>
      <Routes>
        <Route path="/*" element={<Archive />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Notice>
        <Routes>
          <Route path="/*" element={<NoticeBoard />} />
          <Route path="/:id" element={<NoticeContent />} />
        </Routes>
      </Notice>
      <Footer />
    </div>
  );
};

export default Layout;
