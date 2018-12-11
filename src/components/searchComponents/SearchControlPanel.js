import React, { Component } from 'react';
import './searchComponents.scss';
import { getWeather } from '../../actions/ajaxGetMethods'

class SearchControlPanel extends Component {
  state= {
    city: 'london',
    country: 'uk',
    result: null,
  };

  handleChange = async (e) => {
    await this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    (this.state.city && this.state.country)
    ? getWeather(this.state.city, this.state.country)
      .then(data => console.log(data))
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
          <input
            id="country"
            type="text"
            placeholder="choose country"
            onChange={ this.handleChange }
            autoComplete="off"
            value={ this.state.country }
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
