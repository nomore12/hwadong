import React from 'react';
import ContentWrapper from 'src/components/ContentWrapper';
import Navigation from 'src/components/Navigation';

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
    <div className="px-10 pt-10 relative bg-fuchsia-50 flex flex-col items-end columns-3">
      <div className="fixed left-16">
        <Navigation />
      </div>
      <ContentWrapper title="asdsad">{<TestElement />}</ContentWrapper>
      <ContentWrapper title="asdsad">{<TestElement />}</ContentWrapper>
      <ContentWrapper title="asdsad">{<TestElement />}</ContentWrapper>
      <ContentWrapper title="asdsad">{<TestElement />}</ContentWrapper>
      <ContentWrapper title="asdsad">{<TestElement />}</ContentWrapper>
      <ContentWrapper title="asdsad">{<TestElement />}</ContentWrapper>
      <ContentWrapper title="asdsad">{<TestElement />}</ContentWrapper>
      <ContentWrapper title="asdsad">{<TestElement />}</ContentWrapper>
      <ContentWrapper title="asdsad">{<TestElement />}</ContentWrapper>
      <ContentWrapper title="asdsad">{<TestElement />}</ContentWrapper>
      <ContentWrapper title="asdsad">{<TestElement />}</ContentWrapper>
      <ContentWrapper title="asdsad">{<TestElement />}</ContentWrapper>
      <ContentWrapper title="asdsad">{<TestElement />}</ContentWrapper>
      <ContentWrapper title="asdsad">{<TestElement />}</ContentWrapper>
      <ContentWrapper title="asdsad">{<TestElement />}</ContentWrapper>
      <ContentWrapper title="asdsad">{<TestElement />}</ContentWrapper>
      <ContentWrapper title="asdsad">{<TestElement />}</ContentWrapper>
      <ContentWrapper title="asdsad">{<TestElement />}</ContentWrapper>
      <ContentWrapper title="asdsad">{<TestElement />}</ContentWrapper>
      <ContentWrapper title="asdsad">{<TestElement />}</ContentWrapper>
      <ContentWrapper title="asdsad">{<TestElement />}</ContentWrapper>
      <ContentWrapper title="asdsad">{<TestElement />}</ContentWrapper>
      <ContentWrapper title="asdsad">{<TestElement />}</ContentWrapper>
      <ContentWrapper title="asdsad">{<TestElement />}</ContentWrapper>
      <ContentWrapper title="asdsad">{<TestElement />}</ContentWrapper>
      <ContentWrapper title="asdsad">{<TestElement />}</ContentWrapper>
      <ContentWrapper title="asdsad">{<TestElement />}</ContentWrapper>
      <ContentWrapper title="asdsad">{<TestElement />}</ContentWrapper>
    </div>
  );
};

export default Layout;
