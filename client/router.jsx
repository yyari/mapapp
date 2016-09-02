import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import AppContainer from '../imports/containers/AppContainer.jsx';
import App from '../imports/ui/App.jsx';
import Sub from '../imports/ui/SubmitPage.jsx';
import Error404 from '../imports/ui/404Page.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={AppContainer}>
      <IndexRedirect to="/map" />
      <Route path="map" component={App}/>
      <Route path="submit" component={Sub}/>
      <Route path="*" component={Error404}/>
    </Route>
  </Router>
);
