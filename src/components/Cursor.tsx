import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useAppSelector, useAppDispatch } from '../store/Hooks';

interface CursorTextPropsType {
  text: string;
}

const CursorText = ({ text }: CursorTextPropsType) => {
  return (
    <>
      <p>{text}</p>
    </>
  );
};

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursor = useAppSelector((state) => state.cursor);
  const dispatch = useAppDispatch();

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
  };

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      e.preventDefault();
      // console.log(e);
      // e.stopImmediatePropagation();
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="cursor"
        style={{
          width: '40px',
          height: '40px',
          left: `calc(${mousePosition.x}px - 20px)`,
          top: `calc(${mousePosition.y}px - 20px)`,
          position: 'fixed',
          fontSize: '12px',
          backgroundColor: 'red',
          color: 'white',
          fontWeight: 600,
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1,
          pointerEvents: 'none',
        }}>
        <CursorText text={cursor.curr === 'main' ? '' : cursor.curr} />
      </div>
    </>
  );
};

export default Cursor;
