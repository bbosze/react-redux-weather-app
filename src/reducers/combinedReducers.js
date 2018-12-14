import { combineReducers } from 'redux';
import findCityReducer from './findCityReducer';
import addCollectionReducer from './addCollectionReducer';

export default combineReducers({
  findCityReducer,
  addCollectionReducer,
});
