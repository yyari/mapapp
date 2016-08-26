import React, { Component, PropTypes as T } from 'react';
import ons from 'onsenui';
import Ons from 'react-onsenui';

class Sub extends Component {
  constructor(props) {
     super(props);
     this.state = {
       text: '',
       login: true,
     };

     this.handleChange = this.handleChange.bind(this);
   }

   renderToolbar() {
      return (
        <Ons.Toolbar>
          <div className='center'>Mapapp</div>
        </Ons.Toolbar>
      );
    }

    handleClick() {
      console.log("tu je");
    }

   render() {
     return(
       <Ons.Page renderToolbar={this.renderToolbar}>
          <section style={{textAlign: 'center'}}>
            <p> Text: </p>
            <p>
              <Ons.Input
                value={this.state.text}
                onChange={(event) => { this.setState({text: event.target.value})} }
                modifier='underbar'
                float
                placeholder='Username' />
            </p>
            <p>
              Anon
              <Switch
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
