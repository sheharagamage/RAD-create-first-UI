
import React, { useEffect, useState } from 'react';
import './NavBar.css';
import logo from '../assests/uniquest.png';
import { NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handler = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };

    handler();
    window.addEventListener('scroll', handler);
    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, []);

  const { pathname } = useLocation();

  return (
    <nav className={`navbar ${sticky || pathname !== "/" ? 'sticky' : ''} ${theme}`}>
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <div className="nav-title">UniQuest</div>
      </div>
      <ul className="navbar-links">
        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Contact Us</NavLink></li>
      </ul>
      <div className="navbar-right">
        <button className="mode-button" onClick={toggleTheme}>
          {theme === 'light' ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
