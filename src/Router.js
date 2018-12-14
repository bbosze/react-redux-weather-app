import React from "react";
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import SearchView from './containers/searchView/SearchView'
import CollectionView from './containers/collectionView/CollectionView'
import NotFound from './containers/NotFound'

export let history = createBrowserHistory();

const Routes = () => (
  <Router history={ history }>
      <Switch>
        <Route exact path="/" render={() => (
              <Redirect to="/search"/>
        )}/>
        <Route exact path="/search" component={ SearchView } />
        <Route exact path="/collection" component={ CollectionView } />
        <Route path="*" component={ NotFound } />
      </Switch>
  </Router>
);

export default Routes
