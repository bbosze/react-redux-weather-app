import React, { Component } from 'react';
import './App.scss';
import Router from "./Router";


class App extends Component {

  render() {
    return (
      <div className="app">
       <Router />
      </div>
    );
  }
}

export default App;
