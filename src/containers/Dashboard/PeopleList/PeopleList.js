import React, { Component } from "react";
import Card from "../../../components/Card/Card";
import CreatePerson from "../../Controllers/CreatePersonController/Controller";
import MapComponent from "../../Map/Map";
import Aux from "../../../hoc/Aux/Aux";
import Search from "../../../components/Search/Search";

import "./People.css";


let center;
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
}
navigator.geolocation.getCurrentPosition((pos) => {
  const lat = pos.coords.latitude;
  const lng = pos.coords.longitude;

  center = { lat, lng };
}, () => console.log('err'), options);

const peopleList = (props) => {

  const PeopleCards = props.people.map((person, i) => {
    return <Card key={i} {...person} />;
  });


  return (
    <Aux>
      <div className="People">
        <div>
          <Search search = {props.search} />
        </div>
        <div className="Cards">{PeopleCards}</div>
        <div className="controls">
          <CreatePerson />
        </div>
      </div>
      <MapComponent
        c='map-wide'
        zoom={12}
        center={center}
        markers={props.people} />
    </Aux>
  );
}

export default peopleList;
