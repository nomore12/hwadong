import React from 'react';
import { Link } from 'react-router-dom';
import image from 'src/components/assets/images/event.jpeg';

const Gallery = () => {
  return (
    <div className="w-720 h-128 flex flex-row justify-between mt-48 mb-8 relative">
      <Link
        to="/main"
        className="absolute rounded-full bg-red-500 w-9 h-9 text-white text-xs flex justify-center items-center font-thin top-40">
        back
      </Link>
      <div className="text-lg tracking-widest text-zinc-900">갤러리</div>
      <div className="mt-40">
        <img src={image} width="480px" />
      </div>
    </div>
  );
};

export default Gallery;
