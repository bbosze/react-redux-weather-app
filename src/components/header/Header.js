import React, { Component } from 'react';
import './Header.css';
import { history } from '../../Router'

class Header extends Component {
  handleClick = (e) => {
    history.push(`/${e.currentTarget.dataset.id}`);
  }

  render() {
    return (
      <div className="app-header">
      <h1>beautiful weather app</h1>
      <div className="app-header-navbar">
      <span data-id="search" onClick={ this.handleClick }>find a city</span>
      <span data-id="collection" onClick={ this.handleClick }>your collection of cities</span>
      </div>
      </div>
    )
  }
}

export default Header;
