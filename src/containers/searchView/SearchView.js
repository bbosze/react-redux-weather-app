import React, { Component } from 'react';
import './SearchView.scss';
import Header from '../../components/header/Header';
import SearchControlPanel from '../../components/searchComponents/SearchControlPanel';
import SearchResult from '../../components/searchComponents/SearchResult';
import { emptySearch } from '../../actions/nonAjaxMethods';

class SearchView extends Component {

componentWillUnmount = () => {
  emptySearch(); // EMPTY CURRENT CITY DATA
}

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
