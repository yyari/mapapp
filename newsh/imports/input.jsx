import React, { Component, PropTypes as T } from 'react';
import ons from 'onsenui';
import Ons from 'react-onsenui';
import { Markers } from './markers.jsx';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import { browserHistory } from 'react-router';

class Sub extends Component {
  constructor(props) {
     super(props);
     this.state = {
       text: '',
       login: true,
     };
     this.handleClick = this.handleClick.bind(this);
   }

    handleClick() {
      Markers.insert({
        description: this.state.text,
        login: this.state.login,
        createdAt: new Date(),
      });
      browserHistory.push('/map');
    }

   render() {
     return(
       <Ons.Page>
          <section style={{textAlign: 'center'}}>
            <p> Text: </p>
            <p>
              <Ons.Input
                value={this.state.text}
                onChange={(event) => { this.setState({text: event.target.value})} }
                modifier='underbar'
                float
                placeholder='Problem description alo sine' />
            </p>
            <p>
              Anon
              <Ons.Switch
                checked={this.state.login}
                onChange={() => { this.setState({login: !this.state.login})}}
              />
              Login
            </p>
            <p>
              <Ons.Button onClick={this.handleClick}>Submit</Ons.Button>
            </p>
          </section>
       </Ons.Page>
     );
   }
}

export default Sub;
