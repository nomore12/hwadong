import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from 'src/components/assets/images/logo-2-1.png';
import { animate, motion, AnimatePresence, useIsPresent } from 'framer-motion';

const Landing = () => {
  const navigate = useNavigate();
  const [opacity, setOpacity] = useState(1);
  const isPresent = useIsPresent();
  const variant = {
    initial: { opacity: 1 },
    animate: { opacity: 0 },
    transition: { duration: 0.5 },
  };
  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible,
  };
  const timeOut = () => {
    setTimeout(() => navigate('/main'), 2000);
    setOpacity(0);
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <div className="relative flex justify-center items-center h-screen">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: opacity }}
          transition={{ duration: 1.8 }}
          style={{
            width: '400px',
            height: '400px',
          }}
          onClick={timeOut}
          className="privacy-screen">
          <img className="landing-logo" src={logo} width="360px" />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Landing;
