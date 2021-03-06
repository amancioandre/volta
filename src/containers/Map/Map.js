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
    };

    this.icons = {
      unknown: new LeafIcon({iconUrl: 'https://image.flaticon.com/icons/svg/579/579007.svg'}),
      pin: new LeafIcon({iconUrl: 'https://image.flaticon.com/icons/svg/1299/1299847.svg'}),
      person: new LeafIcon({iconUrl: 'https://image.flaticon.com/icons/svg/1299/1299868.svg'}),
      people: new LeafIcon({iconUrl: 'https://image.flaticon.com/icons/svg/1299/1299865.svg'}),
      registeredPeople: new LeafIcon({iconUrl: 'https://image.flaticon.com/icons/svg/1299/1299854.svg'})
    }
  }
  
  /* Life Cycle Methods */
  render() {
    let pos;
    let center;
    let test

    this.props.center ? center = this.props.center : undefined;
    // this.props.geoReferences ? test = this.props.geoReferences : test = [];
    
    let pins = this.props.markers.map((person, i) => {
      person.geoReferences.length > 0 ? pos=person.geoReferences : pos = [{ lat: 0, lng: 0 }];
      return (<Marker 
          key={i}
          icon={pos[pos.length-1].lat === 0 && pos[pos.length-1].lng === 0 ? this.icons.unknown : this.icons.registeredPeople}
          position={pos[pos.length-1]}>
          <Popup>{person.firstName} {person.lastName}.</Popup>
        </Marker>)
    });

    return (
      <Map 
        id='mapid' 
        className={this.props.c} 
        center={center ? center : pos[pos.length-1] || { lat: 0, lng: 0} } 
        zoom={this.props.zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        { pins }
      </Map>
    )
  }
}

export default MapComponent;