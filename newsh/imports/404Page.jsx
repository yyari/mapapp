import React, { Component, PropTypes as T } from 'react';
import ons from 'onsenui';
import Ons from 'react-onsenui';
require ("onsenui/css/onsenui.css");
require ("onsenui/css/onsen-css-components.css");

class Error404 extends Component {
  render() {
    return(
      <Ons.Page>
         <section style={{textAlign: 'center'}}>
          Error 404
        </section>
        <Link to="/map">
          <Ons.Fab
            ripple
            position='bottom center'>
            <Ons.Icon icon='md-home' />
          </Ons.Fab>
        </Link>
      </Ons.Page>
    )
  }
}

export default Error404;
