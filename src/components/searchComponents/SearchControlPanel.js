import React, { Component } from 'react';
import './searchComponents.scss';
import { getWeather } from '../../actions/ajaxGetMethods'

class SearchControlPanel extends Component {
  state= {
    city: '',
    result: null,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.state.city
    ? getWeather(this.state.city, this.state.country)
    : alert('YOU CANNOT DO THIS (ಠ_ಠ)');
  };

  render() {
    return (
      <React.Fragment>
        <form className="search-control-panel">
          <input
            id="city"
            type="text"
            placeholder="choose city"
            onChange={ this.handleChange }
            autoComplete="off"
            value={ this.state.city }
          />
          <button
            className="app-button"
            onClick={ this.handleSubmit }
          >
            shomi di weather
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default SearchControlPanel;
