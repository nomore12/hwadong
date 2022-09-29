import React from 'react';
import ContentWrapper from 'src/components/ContentWrapper';
import Navigation from 'src/components/Navigation';
import Establishment from './content/Establishment';
import History from './content/History';
import logo from './assets/images/logo-2-1.png';
import Notice from './content/Notice';
import NoticeBoard from './content/NoticeBoard';

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
    <div className="px-10 pt-10 relative flex flex-col items-end columns-3">
      <div className="fixed left-16 bottom-20 z-0">
        <Navigation />
      </div>
      <div className="fixed left-14 top-14 pl-1">
        <img src={logo} width="232px" />
      </div>
      <Establishment></Establishment>
      <History></History>
      <Notice>
        <NoticeBoard />
      </Notice>
    </div>
  );
};

export default Layout;
