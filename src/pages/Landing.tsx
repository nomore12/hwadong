import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'src/components/assets/images/logo-2-1.png';

const Landing = () => {
  return (
    <Link to="/main" className="relative">
      <div
        className="absolute left-32"
        style={{ width: '400px', height: '400px' }}>
        <img className="landing-logo" src={logo} width="360px" />
      </div>
    </Link>
  );
};

export default Landing;
