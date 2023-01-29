import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="contentContainer">
        <Link className="logo" to="/">
          Wecode
        </Link>
        <input className="searchInput" placeholder="검색" />
        <Link className="loginBtn" to="/login">
          로그인
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
