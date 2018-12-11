import axios from 'axios';

const url = 'http://api.openweathermap.org/data/2.5/weather';
const appId = '02673844cf3238c5731670c16218981f';

export const getWeather = (city, country) => {
  axios.get(`${url}?q=${city},${country}&APPID=${appId}`)
  .then(response => {
    return response.data.main.temp  
  })
  .catch(error => console.log('ajjaj', error))
};
