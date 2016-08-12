import React, { Component, PropTypes as T } from 'react';
import ReactDOM from 'react-dom';
import {createContainer} from 'meteor/react-meteor-data';
import {Markers} from '../api/markers.js';
import ons from 'onsenui';
import Ons from 'react-onsenui';
import Map, {GoogleApiWrapper} from 'google-maps-react';
import styles from './App.css';
require ("onsenui/css/onsenui.css")
require ("onsenui/css/onsen-css-components.css");

class App extends Component {
   constructor(props) {
     super(props);
     this.state = {
       isOpen: false,
     };
     this.hide = this.hide.bind(this);
     this.show = this.show.bind(this);
   }

   hide() {
     this.setState({isOpen: false,});
   }

   show() {
     this.setState({isOpen: true,});
   }

   renderToolbar() {
      return (
        <Ons.Toolbar>
          <div className='center'>Mapapp</div>
        </Ons.Toolbar>
      );
    }

    renderFixed() {
      return (
        <Ons.Fab
          onClick={() => {ons.notification.alert({message: 'radinesto!'});}}
          position='bottom right'>
          <Ons.Icon icon='md-face' />
        </Ons.Fab>
      );
    }

   render() {
     return (
       <Ons.Splitter>
         <Ons.SplitterSide
           style={{
               boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
           }}
           side='right'
           width={500}
           collapse={true}
           isSwipeable={true}
           isOpen={this.state.isOpen}
           onClose={this.hide}
           onOpen={this.show}
         >
           <Ons.Page>
             <Ons.List
               dataSource={['jen', 'dva', 'tri']}
               renderRow={(title) => (
                 <Ons.ListItem key={title} onClick={this.hide} tappable>{title}</Ons.ListItem>
               )}
             />
           </Ons.Page>
         </Ons.SplitterSide>
         <Ons.SplitterContent>
           <Ons.Page renderToolbar={this.renderToolbar} renderFixed={this.renderFixed}>
              <Map google={this.props.google} />
           </Ons.Page>
         </Ons.SplitterContent>
       </Ons.Splitter>
     );
   }

}

App.propTypes = {
  //markers: T.array.isRequired,
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBTaU5CKA7MPl86Qr7b2TOiiq4KRJWkZV0"
})(App)
