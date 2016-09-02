import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import Sub from '../imports/input.jsx';
import App from '../imports/app.jsx';
import Error404 from '../imports/404Page.jsx';
import AppContainer from '../imports/appContainer.jsx';

Meteor.startup(() => {
  render((  <Router history={browserHistory}>
      <Route path='/' component={AppContainer}>
        <IndexRedirect to="/map" />
        <Route path="map" component={App}/>
        <Route path="submit" component={Sub}/>

      </Route>
      <Route path="*" component={Error404}/>
    </Router>), document.getElementById('root'));
});
