import React, { Component } from "react";
import Card from "../../../components/Card/Card";
import CreatePerson from "../../Controllers/CreatePersonController/Controller";
import MapComponent from "../../Map/Map";
import Aux from "../../../hoc/Aux/Aux";
import Search from "../../../components/Search/Search";

import "./People.css";

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
      {window.innerWidth > 899 ? <MapComponent 
                                    geoReferences={[{lat: 0, lng: 0}]}
                                    c="map-wide" 
                                    people={props.people}/> : null}
    </Aux>
  );
}

export default peopleList;
