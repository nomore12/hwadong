import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Link to="/main">
      <p>재단법인</p>
      <h1>중앙화동재단</h1>
    </Link>
  );
};

export default Landing;
