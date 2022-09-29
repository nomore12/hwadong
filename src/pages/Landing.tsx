import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'src/components/assets/images/bottom-logo.png';

const Landing = () => {
  return (
    <Link to="/main">
      <div className="relative">
        <img className="landing-logo absolute" src={logo} width="620px" />
      </div>
    </Link>
  );
};

export default Landing;
