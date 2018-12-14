import { store } from '../index';

export const emptySearch = () => {
  store.dispatch({
    type: 'EMPTY_CITY',
  });
}


export const addCollection = (cityData, collection) => {
  if(collection.indexOf(cityData) === -1) {
    store.dispatch({
      type: 'ADD_TO_COLLECTION',
      city: cityData,
    });
  }
  else {
    alert('it is already in collection')
  }
}
