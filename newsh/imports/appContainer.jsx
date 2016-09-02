import React, { Component, PropTypes as T } from 'react';
import ons from 'onsenui';
import Ons from 'react-onsenui';
import { Link } from 'react-router';

require ("onsenui/css/onsenui.css");
require ("onsenui/css/onsen-css-components.css");

class AppContainer extends Component {
  render() {
    return (
     <div>
        <Ons.Toolbar>
        <div className='left'><Link to='/map'><Ons.ToolbarButton/><Ons.Icon icon='ion-navicon, material: md-menu' /><Ons.ToolbarButton/></Link></div>
          <div className='center'>Mapapp</div>
        </Ons.Toolbar>
          {this.props.children}
     </div>
   );
  }
}

export default AppContainer;
