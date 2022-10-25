import React, { useContext, useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

interface MenuPropsType {
  items: string[];
}

const ContainerStyle = styled.nav<{ isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  width: 222px;
  position: fixed;
  left: 4rem;
  bottom: 4.8rem;
  font-size: 1.2rem;
  font-weight: 200;
  color: rgba(39, 39, 42, 1);
  letter-spacing: 0.5rem;

  @media screen and (max-width: 1024px) {
    display: none;
  }

  .menu-li {
    display: flex;
    flex-direction: column-reverse;
    padding: 16px 0;
    border-top: 1px solid rgba(39, 39, 42, 0.6);

    :last-child {
      border-bottom: 1px solid rgba(39, 39, 42, 0.6);
    }
  }

  .menu-item {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid rgba(39, 39, 42, 0.6);
    margin-bottom: 16px;
  }

  .menu-item-link {
    padding-bottom: 10px;
    font-size: 0.9rem;
    font-weight: 100;
  }
`;

const Menu = ({ items }: MenuPropsType) => {
  return (
    <div className="menu-item">
      {items &&
        items.map((item, index) => {
          return (
            <Link className="menu-item-link" key={index} to={item} smooth spy>
              {item}
            </Link>
          );
        })}
    </div>
  );
};

const Navigation = () => {
  const [menu1, setMenu1] = useState(false);
  const [menu2, setMenu2] = useState(false);
  const [menu3, setMenu3] = useState(false);

  const onMenuClick = (index: number) => {
    console.log(index);
    switch (index) {
      case 1:
        setMenu1(!menu1);
        setMenu2(false);
        setMenu3(false);
        break;
      case 2:
        setMenu1(false);
        setMenu2(!menu2);
        setMenu3(false);
        break;
      case 3:
        setMenu1(false);
        setMenu2(false);
        setMenu3(!menu3);
        break;
      default:
        return;
    }
  };

  return (
    <ContainerStyle isMobile={isMobile} className="nav-container">
      <ul className="">
        <li className="menu-li" onClick={() => onMenuClick(1)}>
          <p>재단소개</p>
          {menu1 && (
            <Menu items={['설립목적', '연혁', '사업내용', '위치 및 연락처']} />
          )}
        </li>
        <li className="menu-li" onClick={() => onMenuClick(2)}>
          <p>재단활동</p>
          {menu2 && <Menu items={['재단활동소개', '재단활동아카이브']} />}
        </li>
        <li className="menu-li" onClick={() => onMenuClick(3)}>
          <p>재단소식</p>
          {menu3 && <Menu items={['공지사항', '연간사업보고', '자료실']} />}
        </li>
      </ul>
    </ContainerStyle>
  );
};

export default Navigation;
