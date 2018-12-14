import axios from 'axios';
import { store } from '../index';

const url = 'http://api.openweathermap.org/data/2.5/weather';
const appId = '02673844cf3238c5731670c16218981f';

export const getWeather = (city, country) => {
  store.dispatch({ type: 'FIND_CITY_REQUEST' });
  axios.get(`${url}?q=${city},${country}&APPID=${appId}`)
  .then((response) => {
    console.log(response.data);
    store.dispatch({
      type: 'FIND_CITY__SUCCESS',
      city: response.data.name,
      country: response.data.sys.country,
      temp: Math.round(response.data.main.temp - 272.15).toString(), // has to be converted to string because of nullchecks
      condition: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/w/${response.data.weather[0].icon}.png`
    });
  })
  .catch((error) => {
      store.dispatch({
        type: 'FIND_CITY_FAILURE',
        payload: error.message,
      });
    });
};
