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
    this.refreshData = this.refreshData.bind(this);
  }
  /* Handler Methods */
  handleSearch(query) {
    this.service.searchPerson(`${query}`).then((response)=>{
      this.setState(
        {People: response}
      );
    })
  }

  refreshData() {
    console.log('refresh data')
    let people = [];
    this.service.getAll().then(response => {
      people = response;
      this.setState({ People: people });
      console.log('refreshData ->>', people)
    });
  }

  /* Lifecycle Methods */
  componentDidMount() {
    this.refreshData();
  }

  render() {
    return (
      <Aux>
        <Route
          exact
          path="/dashboard/people/:personId"
          render={props => <Person {...props} refresh={this.refreshData} />}
        />
        <Route
          exact path="/dashboard/people"
          render={() => <PeopleList people={this.state.People} search={this.handleSearch} />}
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
