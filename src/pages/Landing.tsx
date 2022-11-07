import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from 'src/components/assets/images/logo-2-1.png';
import { animate, motion, AnimatePresence, useIsPresent } from 'framer-motion';
import styled from 'styled-components';
import { animateScroll } from 'react-scroll';

const ContainerStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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

  useEffect(() => {
    // animateScroll.scrollToTop();
    // const windowClose = (event: BeforeUnloadEvent) => {
    //   console.log(event);
    //   event.preventDefault();
    //   if (event) event.returnValue = '';
    //   localStorage.removeItem('curr');
    //   animateScroll.scrollTo(0, { delay: 0 });
    //   return '';
    // };
    // console.log(localStorage.getItem('curr'));
    // window.onbeforeunload = windowClose;
    // // return () => {
    // //   // window.addEventListener('beforeunload', windowClose);
    // //   // localStorage.getItem('curr') && localStorage.removeItem('curr');
    // // };
  }, []);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <ContainerStyle>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: opacity }}
          transition={{ duration: 1.8 }}
          onClick={timeOut}
          className="privacy-screen">
          <img className="landing-logo" src={logo} width="360px" />
        </motion.div>
      </ContainerStyle>
    </AnimatePresence>
  );
};

export default Landing;
