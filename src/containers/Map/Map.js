import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';

import "./Map.css";

const LeafIcon = L.Icon.extend({
  options: {
  iconSize: [38, 95],
  iconAnchor: [16, 47],
  popupAnchor: [0, 0]
  }
})

class MapComponent extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      show: false,
      position: {
        lat: -23.561700,
        lng: -46.660046,
      }
    };

    this.icons = {
      pin: new LeafIcon({iconUrl: 'https://image.flaticon.com/icons/svg/1299/1299847.svg'}),
      person: new LeafIcon({iconUrl: 'https://image.flaticon.com/icons/svg/1299/1299868.svg'}),
      people: new LeafIcon({iconUrl: 'https://image.flaticon.com/icons/svg/1299/1299865.svg'}),
      registeredPeople: new LeafIcon({iconUrl: 'https://image.flaticon.com/icons/svg/1299/1299854.svg'})
    }
  }

  createPin(props) {
    const { lat, lng } = props.position
    this.setState({ position: { lat, lng }});
  }
  
  /* Life Cycle Methods */
  componentDidMount() {
    console.log("inside componentDidMount -> MapComponent")
  }


  render() {

    const position = [this.state.position.lat, this.state.position.lng];
    return (
      <Map id='mapid' className={this.props.c} center={position} zoom={19}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker 
          icon={this.icons.registeredPeople}
          position={position}>
          <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
        </Marker>
      </Map>
    )
  }
}

export default MapComponent;