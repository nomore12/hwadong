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
import NoticeContent from 'src/components/content/subContent/NoticeContent';
import Test from '../pages/Test';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main/*" element={<Main />}></Route>
        {/*<Route path="/main/:id" element={<Main />}></Route>*/}
        <Route path="/login" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
