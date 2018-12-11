import React, { Component } from 'react';
import './App.scss';
import SearchView from './containers/searchView/SearchView'


class App extends Component {

  render() {
    return (
      <div className="app">
       <SearchView />
      </div>
    );
  }
}

export default App;
