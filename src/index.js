import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleWare from 'redux-thunk';
import {applyMiddleware, createStore, compose } from 'redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import combinedReducers from './reducers/combinedReducers.js';


ReactDOM.render(<App />, document.getElementById('root'));

export const store = createStore(
  combinedReducers,
   compose(applyMiddleware(thunkMiddleWare), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
    stateSanitizer: (state) => state.data ? { ...state, data: '<<LONG_BLOB>>' } : state
  }))
 );

 const render = () => {
   ReactDOM.render(
     <Provider store={ store }>
         <App />
     </Provider>,
     document.getElementById('root')
   );
 };

render();

serviceWorker.unregister();
