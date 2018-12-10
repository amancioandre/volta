import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';

import "./Map.css";

const LeafIcon = L.Icon.extend({
  options: {
  iconSize: [38, 95],
  iconAnchor: [16, 47],
  popupAnchor: [3, -15]
  }
})

class MapComponent extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      show: false,
      position: {
        lat: -23.561679,
        lng: -46.660056,
      }
    };

    this.icons = {
      pin: new LeafIcon({iconUrl: 'https://image.flaticon.com/icons/svg/1299/1299847.svg'}),
      person: new LeafIcon({iconUrl: 'https://image.flaticon.com/icons/svg/1299/1299868.svg'}),
      people: new LeafIcon({iconUrl: 'https://image.flaticon.com/icons/svg/1299/1299865.svg'}),
      registeredPeople: new LeafIcon({iconUrl: 'https://image.flaticon.com/icons/svg/1299/1299854.svg'})
    }
  }
  /* Document Map Methods */
  updatePin(newPosition) {
    this.setState({ position: newPosition })
  }
  
  /* Life Cycle Methods */
  render() {

    const position = [this.state.position.lat, this.state.position.lng];
    return (
      <Map 
        id='mapid' 
        className={this.props.c} 
        center={this.props.position ? this.props.position : position} 
        zoom={18}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker 
          icon={this.icons.registeredPeople}
          position={this.props.position ? this.props.position : position}>
          <Popup>Name: {this.props.name} {this.props.lastName}.<br />Age: {this.props.age} anos.</Popup>
        </Marker>
      </Map>
    )
  }
}

export default MapComponent;