import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div className="app-header">
      <h1>beautiful weather app</h1>
      <div className="app-header-navbar">
        <span>find a city</span>
        <span>your collection of cities</span>
      </div>
    </div>
  )
}

export default Header;
