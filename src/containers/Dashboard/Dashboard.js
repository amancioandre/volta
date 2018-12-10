import React, { Component } from "react";
import { Route } from "react-router-dom";

import Aux from "../../hoc/Aux/Aux";
import People from "./PeopleList/PeopleList";
import Person from "./Person/Person";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: {
        name: {
          firstName: "Joana",
          lastName: "Seeker"
        },
        email: "joana.s@procurandovc.com.br",
        username: "jseeker",
        organization: "Procurando voce",
        dateOfBirth: "01/01/1993",
        people: [1, 2, 3, 5],
        role: "Agent"
      },

      People: [
        {
          id: 1,
          firstName: "João",
          lastName: "Lost",
          dateOfBirth: "01/01/1992",
          created_At
        },
        {
          id: 2,
          firstName: "João",
          lastName: "Lost",
          dateOfBirth: "01/01/1992",
          created_At: ''
        },
        {
          id: 3,
          firstName: "João",
          lastName: "Lost",
          dateOfBirth: "01/01/1992",
          created_At
        },
        {
          id: 4,
          firstName: "João",
          lastName: "Lost",
          dateOfBirth: "01/01/1992",
          created_At
        },
        {
          id: 5,
          firstName: "João",
          lastName: "Lost",
          dateOfBirth: "01/01/1992",
          created_At
        },
      ],

      show: false
    };
  }
  /* Handler Methods */
  


  /* Lifecycle Methods */
  componentDidMount() {
    console.log("inside componentDidMount -> Dashboard");
  }

  render() {
    return (
      <Aux>
        <p>Nada</p>
      </Aux>
    );
  }
}

export default Dashboard;
