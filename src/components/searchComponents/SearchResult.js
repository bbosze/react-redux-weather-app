import React, { Component } from 'react';
import { connect } from 'react-redux';
import './searchComponents.css';
import ImageFilter from 'react-image-filter';
import { addCollection } from '../../actions/nonAjaxMethods';

class SearchResult extends Component {

  handleClick = () => {
    addCollection(this.props.city, this.props.collection);
  }

  render() {
    if (!this.props.isError) {
      return (
        <div className="search-result-container">
          <div className="search-results">
            { this.props.city
              ? <h2>here is what we've found</h2>
              : <h2>Let's start</h2>
            }
            <ImageFilter // MODIFY PIC TO GRAYSCALE
              image={ this.props.icon ? this.props.icon : '' }
              filter={ 'grayscale' }
              style={{ width: 60 }}
            />
            <p>city:
              { this.props.city ? ` ${this.props.city}` : ' no city yet' }
            </p>
            <p>temperature:
              <span>
                { this.props.temperature ? ` ${this.props.temperature}°C` : ' dunno yet' }
              </span>
            </p>
            <p>conditions:
              <span>
                { this.props.condition ? ` ${this.props.condition}` : ' i said no and really mean it' }
              </span>
            </p>
            <button
              onClick={ this.handleClick }
              className={this.props.city ? "app-button" : "app-button-invisible"}
            >
              add to my collection
            </button>
          </div>
        </div>
      )
    }

    return (
      <div className="search-result-container">
        <div className="search-results">
          <h2>COULDN'T FIND ANYTHING... IS IT AN IMAGINARY CITY??</h2>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ findCityReducer, addCollectionReducer }) => ({
  city: findCityReducer.city,
  temperature: findCityReducer.temp,
  condition: findCityReducer.condition,
  icon: findCityReducer.icon,
  isError: findCityReducer.isError,
  collection: addCollectionReducer.collection,
});

export default connect(mapStateToProps)(SearchResult);
