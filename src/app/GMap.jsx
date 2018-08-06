import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class GMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: this.props.style,
      position: this.props.position,
      events: this.props.events,
      selectedPlace: {
        name: 'Home'
      }
    }

    this.onMapClicked.bind(this);
    this.onMarkerClick.bind(this);
  }

  /**
   * @description This runs to make sure when you reload the map
   * that all the markers will appear
   */
  componentWillReceiveProps(props) {
    this.setState({ events: props.events });
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render() {
    return (
      <Map
        style={this.state.style} 
        google={this.props.google} 
        zoom={14}
        initialCenter = {{
          lat: this.state.position.lat,
          lng: this.state.position.lng
        }}
      >

        {
          this.state.events.map((event, index) => {
            return (
              <Marker
                position={{lat: event.coordinates.latitude, lng: event.coordinates.longitude}}
                onClick={this.onMarkerClick.bind(this)}
                name={event.name}
                key={index}
              />
            );
          })
        }

        <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow} onClose={this.onInfoWindowClose}>
            <div>
              <h3>{this.state.selectedPlace.title}</h3>
              <div>{this.state.selectedPlace.name}</div>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ''
})(GMap);