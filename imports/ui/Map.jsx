import React, { Component, PropTypes as T } from 'react';
import ReactDOM from 'react-dom';
import Map, {GoogleApiWrapper, Marker} from 'google-maps-react';

class AMap extends Component{
  constructor(props) {
    super(props);

    this.state = {
      currentLocation: {
        lat: 44.0176178,
        lng: 20.904983
      }
    }

    this.componentDidMount = this.componentDidMount.bind(this);

  }

  componentDidMount() {
    if (this.props.centerAroundCurrentLocation) {
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                const coords = pos.coords;
                this.setState({
                    currentLocation: {
                        lat: coords.latitude,
                        lng: coords.longitude
                    }
                })
            })
        }
    }
  }

  render() {
    return(
      <Map
        google={this.props.google}
        initialCenter={this.state.currentLocation}
        zoom={20}>
        <Marker
         name={'Dolores park'}
         position={this.state.currentLocation} />
       <Marker />
      </Map>
    );
  }
}

AMap.getDefaultProps = {
  zoom: 13,
  centerAroundCurrentLocation: true
}

AMap.propTypes = {
  google: T.object,
  zoom: T.number,
  initialCenter: T.object,
  centerAroundCurrentLocation: React.PropTypes.bool
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBTaU5CKA7MPl86Qr7b2TOiiq4KRJWkZV0"
})(AMap);
