import React, { Component, PropTypes as T } from 'react';
import ons from 'onsenui';
import Ons from 'react-onsenui';
import AMap from './Map.jsx';
import { Link } from 'react-router';
require ("onsenui/css/onsenui.css");
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

    renderFixed() {
      return (
        <Link to="/submit">
          <Ons.Fab
            position='bottom left'>
            <Ons.Icon icon='md-face' />
          </Ons.Fab>
        </Link>
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
           width='30%'
           collapse={true}
           swipeTargetWidth={100}
           isSwipeable={true}
           isOpen={this.state.isOpen}
           onClose={this.hide}
           onOpen={this.show}
           openThreshold={0.6}
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
           <Ons.Page renderFixed={this.renderFixed}>
              <AMap google={this.props.google}/>
           </Ons.Page>
         </Ons.SplitterContent>
       </Ons.Splitter>
     );
   }

}

App.propTypes = {
  //markers: T.array.isRequired,
};

export default App;
