import React from 'react';
import { Link } from 'react-router-dom';
import image from 'src/components/assets/images/event.jpeg';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
        <Carousel width="480px" showStatus={false} showThumbs={false}>
          <div>
            <img src={`${process.env.PUBLIC_URL}/01.jpeg`} />
          </div>
          <div>
            <img src={`${process.env.PUBLIC_URL}/02.jpeg`} />
          </div>
          <div>
            <img src={`${process.env.PUBLIC_URL}/03.jpeg`} />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;
