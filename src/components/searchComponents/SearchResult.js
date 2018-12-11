import React from 'react';
import './searchComponents.scss';
import rainy from '../../img/rainy.svg'

const SearchResult = () => {
  return (
    <div className="search-result-container">
      <div className="search-result">
        <h2>here is what we've found</h2>
        <img src= { rainy } alt="rainy"/>
        <p>city: <span>Budapest</span></p>
        <p>temperature: <span>123</span></p>
        <p>conditions: <span>rainy</span></p>
        <button className="app-button">add to my collection</button>
      </div>
    </div>
  )
}

export default SearchResult;
