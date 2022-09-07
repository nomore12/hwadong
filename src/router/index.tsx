import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Landing from 'src/pages/Landing';
import Main from 'src/pages/Main';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Main />} />
      </BrowserRouter>
    </>
  );
};

export default Router;
