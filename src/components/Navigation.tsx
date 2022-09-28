import React, { useContext, useState } from 'react';
import { useConstant } from '@headlessui/react/dist/components/transitions/use-machine';

const navState = {
  isOpen: false,
  toggleNavMenu: () => {},
};

const NaveMenuContext = React.createContext(navState);

const NavButton = () => {
  const [open, setOpen] = useState(false);
  const navButtonOnclick = (e: React.SyntheticEvent) => {
    setOpen(!open);
    console.log('provider', open);
  };

  return (
    <div onClick={navButtonOnclick}>
      <svg
        className="stroke-black stroke-3 absolute w-4 transition duration-500 ease-in-out hover:scale-125"
        viewBox="0 0 18 18">
        <line x1="0" y1="9" x2="18" y2="9" />
        <line
          className={`transition duration-500 ease-in-out ${
            open ? 'opacity-0' : 'opacity-100'
          }`}
          x1="9"
          y1="0"
          x2="9"
          y2="18"
        />
      </svg>
    </div>
  );
};

const Navigation = () => {
  const open = useContext(NaveMenuContext);
  console.log('consumer', open);
  return (
    <div className="w-56 text-2xl z-10 relative">
      <NavButton></NavButton>
      <div className="pt-8">
        <ul className="tracking-widest text-zinc-400">
          <li className="mb-4">
            <div>
              <div className="mb-3">재단소개</div>
              <ul className="text-xs">
                <li className="pb-2">설립목적</li>
                <li className="pb-2">연혁</li>
                <li className="pb-2">사업내용</li>
                <li className="pb-2">오시는 길</li>
              </ul>
            </div>
          </li>
          <li className="mb-4">
            <div>
              <div className="mb-3">재단소개</div>
              <ul className="text-xs">
                <li className="pb-2">설립목적</li>
                <li className="pb-2">연혁</li>
                <li className="pb-2">사업내용</li>
                <li className="pb-2">오시는 길</li>
              </ul>
            </div>
          </li>{' '}
          <li className="mb-4">
            <div>
              <div className="mb-3">재단소개</div>
              <ul className="text-xs">
                <li className="pb-2">설립목적</li>
                <li className="pb-2">연혁</li>
                <li className="pb-2">사업내용</li>
                <li className="pb-2">오시는 길</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
