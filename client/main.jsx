import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from './router.jsx';

 Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('app'));
});
