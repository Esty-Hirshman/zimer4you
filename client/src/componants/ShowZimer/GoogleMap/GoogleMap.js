import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import "./GoogleMap.css";

const mapStyles = {
  right: "0%",
  left: "0%",
  bottom: "20%",
  top:"0%",
};

export class GoogleMap extends Component {
 
  state = {
    showingInfoWindow: false,  
    activeMarker: {},          
    selectedPlace: {}
  };
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  render() {
    
    return (
      <div className="showmap">
        <Map
          google={this.props.google}
          zoom={12}
          style={mapStyles}
          initialCenter={{ lat: this.props.lat, lng: this.props.lng }}
        >
          <Marker
          onClick={this.onMarkerClick}
          name={"צימר " +this.props.name }

        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC52R7VHe5-Etup41G8odeCv0Qr-3wyqcA",
})(GoogleMap);
