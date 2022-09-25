import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Landing from 'src/pages/Landing';
import Main from 'src/pages/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
