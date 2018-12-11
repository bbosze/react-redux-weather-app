import React, { Component } from 'react';
import Header from '../../components/header/Header';
import SearchControlPanel from '../../components/searchComponents/SearchControlPanel';
import SearchResult from '../../components/searchComponents/SearchResult';
import './SearchView.scss';

class SearchView extends Component {

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="search">
          <SearchControlPanel />
          <SearchResult />
        </div>
      </React.Fragment>
    );
  }
}

export default SearchView;
