import React, { Component } from 'react';
import Header from '../../components/header/Header';
import { connect } from 'react-redux';
import './CollectionView.css';

class CollectionView extends Component {
  state = {
    search: '',
  };

  updateSearch = (e) => {
    this.setState({
      search: e.target.value.substr(0,10),
    })
  }

  render() {
    let filteredContent = this.props.collection.filter(
      (item) => {
        return item.toLowerCase().indexOf(this.state.search) !== -1;
      }
    );
    return (
      <React.Fragment>
        <Header />
        <div className="search">
          <h3>Filter this!</h3>
          <input
            className="collection-input"
            type="text"
            value={this.state.search}
            onChange={this.updateSearch}
          />
          <ul>
          {filteredContent.map((e, i) => <li key={i}>{e}</li>
          )}
        </ul>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ addCollectionReducer }) => ({
  collection: addCollectionReducer.collection,
});

export default connect(mapStateToProps)(CollectionView);
