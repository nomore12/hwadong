import React, { useContext, useState } from 'react';

interface MenuPropsType {
  items: string[];
}

const Menu = ({ items }: MenuPropsType) => {
  return (
    <div className="menu-parent text-sm flex flex-col gap-2 py-3 transition border border-t-1 border-x-0 border-b-0 border-zinc-500">
      {items &&
        items.map((item, index) => (
          <div key={index} className="menu-item">
            {item}
          </div>
        ))}
    </div>
  );
};

const Navigation = () => {
  const [menu1, setMenu1] = useState(false);
  const [menu2, setMenu2] = useState(false);
  const [menu3, setMenu3] = useState(false);

  const onClick = () => {
    setMenu1(!menu1);
    setMenu2(false);
    setMenu3(false);
  };
  const onClick2 = () => {
    setMenu2(!menu2);
    setMenu1(false);
    setMenu3(false);
  };
  const onClick3 = () => {
    setMenu3(!menu3);
    setMenu1(false);
    setMenu2(false);
  };

  return (
    <div className="w-56 text-xl font-extralight tracking-extraWidest z-10 relative">
      <div className="">
        <div className="text-zinc-800 divide-y divide-solid divide-zinc-500 flex flex-col">
          <div></div>
          {menu1 && (
            <Menu items={['설립목적', '연혁', '사업내용', '위치및연락처']} />
          )}
          <div onClick={onClick} className="h-16 flex items-center">
            재단소개
          </div>
          {menu2 && <Menu items={['재단활동소개', '재단활동아카이브']} />}
          <div onClick={onClick2} className="h-16 flex items-center">
            재단활동
          </div>
          {menu3 && <Menu items={['공지사항', '연간사업보고', '자료실']} />}
          <div onClick={onClick3} className="h-16 flex items-center">
            재단소식
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
