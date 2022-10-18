import React from 'react';
import { Link } from 'react-router-dom';
import image from 'src/components/assets/images/event.jpeg';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const imgArr = [
  {
    img: 'https://images.unsplash.com/photo-1664362597715-d6089e55ae89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80',
    desc: 'first',
  },
  {
    img: 'https://images.unsplash.com/photo-1664380619406-49883ee01a55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80',
    desc: 'second',
  },
  {
    img: 'https://images.unsplash.com/photo-1664388519483-9fdcbdba13a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    desc: 'third',
  },
];

const Gallery = () => {
  const onChange = (e: any) => console.log(e);

  return (
    <div className="w-720 h-128 flex flex-row justify-between mt-48 mb-8 relative">
      <div className="text-lg tracking-widest text-zinc-900"></div>
      <div className="mt-40">
        <Carousel
          onChange={onChange}
          width="480px"
          showStatus={false}
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={5000}>
          {imgArr &&
            imgArr.map((item, key) => {
              return (
                <div key={key}>
                  <img src={item.img} />
                  <p>{item.desc}</p>
                </div>
              );
            })}
          {/*<div>*/}
          {/*  <img src="https://images.unsplash.com/photo-1664362597715-d6089e55ae89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80" />*/}
          {/*</div>*/}
          {/*<div>*/}
          {/*  <img src="https://images.unsplash.com/photo-1664380619406-49883ee01a55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80" />*/}
          {/*</div>*/}
          {/*<div>*/}
          {/*  <img src="https://images.unsplash.com/photo-1664388519483-9fdcbdba13a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" />*/}
          {/*</div>*/}
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;
