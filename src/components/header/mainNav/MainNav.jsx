import './MainNav.css';
import { navData } from '../../../Data';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const MainNav = ({ logo, logoTitle }) => {
  const [MenuOpen, setMenuOpen] = useState(false);
  const [navActive ,setNavActive] = useState(0);

  const toggleMobileMenu = () => {
    setMenuOpen(!MenuOpen);
  };

  return (
    <nav>
      <a className='logo' href="#">
        <img
          style={{ width: "32px", height: "32px" }}
          src={logo}
          alt="icon"
        />
        {logoTitle}
      </a>

      <ul className='mainUl'>
        {navData.map((link, index) => (
          <li  onClick={() => setNavActive(index)} className={navActive == index ? 'active' : ''} key={index}>
            <NavLink to= {link.href}>{link.label}</NavLink>
          </li>
        ))}
      </ul>

      <ul className='burgerIcon'>
        <li onClick={toggleMobileMenu}>
          <HiOutlineMenuAlt3 />
        </li>
      </ul>

      <div
        className='list'
        style={{
          right: MenuOpen ? "40px" : "-235px",
          transition: "right 0.3s ease"
        }}
      >
        <ul className='exList'>
        {navData.map((link, index) => (
          <li key={index} onClick={() => setNavActive(index)} className={navActive == index ? 'focus' : ''}>
            <Link to= {link.href}>{link.label}</Link>
          </li>
        ))}
        </ul>
      </div>
    </nav>
  );
};

export default MainNav;

