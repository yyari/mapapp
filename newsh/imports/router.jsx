import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import Sub from './input.jsx';
import App from './app.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={AppContainer}>
      <IndexRedirect to="/map" />
      <Route path="map" component={App}/>
      <Route path="submit" component={SubmitPage}/>
    </Route>
  </Router>
);
