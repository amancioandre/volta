import React, { Component } from "react";
import { Route } from "react-router-dom";

import Aux from "../../hoc/Aux/Aux";
import FormPerson from "../../components/Forms/FormPerson/FormPerson";
import PeopleList from "./PeopleList/PeopleList";
import Person from "./Person/Person";
import CrudServices from "../../crud/crud-services";

import "./Dashboard.css";

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
      People: [],
      show: false
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.service = new CrudServices();
  }
  /* Handler Methods */

  /* Lifecycle Methods */
  componentDidMount() {
    console.log("inside componentDidMount -> Dashboard");
    let people = [];
    this.service.getAll().then(response => {
      people = response;
      console.log(people);
      this.setState({ People: people });
    });
  }

  handleSearch(query) {
    this.service.searchPerson(`${query}`).then((response)=>{
      this.setState(
        {People: response}
      );
    })


  }

  render() {
    return (
      <Aux>
        <Route
          exact
          path="/dashboard/people/:personId"
          render={props => <Person {...props} />}
        />
        <Route
          exact path="/dashboard/people"
          render={() => <PeopleList {...this.state} search={this.handleSearch} />}
        />
        <Route
          exact
          path="/dashboard/people-add"
          render={props => <FormPerson {...props} />}
        />
      </Aux>
    );
  }
}

export default Dashboard;
