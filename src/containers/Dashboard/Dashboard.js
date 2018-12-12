import React, { Component } from "react";
import { Route } from "react-router-dom";

import Aux from "../../hoc/Aux/Aux";
import FormPerson from "../../components/Forms/FormPerson/FormPerson";
import PeopleList from "./PeopleList/PeopleList";
import Person from "./Person/Person";
import CrudServices from "../../crud/crud-services";
import User from './User/User';

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
      const people = response.map((person) => {
        const newPerson = {
          _id: person._id,
          firstName: person.name.firstName,
          lastName: person.name.lastName,
          alias: person.name.alias,
          dateOfBirth: person.dateOfBirth,
          status: person.status,
          sex: person.sex,
          city: person.locations.ofBirth.city,
          address: person.locations.ofBirth.address,
          state: person.locations.ofBirth.state,
          zip: person.locations.ofBirth.zip,
          geoReferences: person.locations.geoReferences || [{ lat: 0, lng: 0 }],
          profession: person.background.profession,
          degree: person.background.degree,
          maritalStatus: person.background.maritalStatus,
          picName: person.picture.picName,
          picPath: person.picture.picPath,
          bodyType: person.appearance.bodyType,
          eyeColor: person.appearance.eyeColor,
          skinColor: person.appearance.skinColor,
          hairType: person.appearance.hairType,
          height: person.appearance.height,
          weight: person.appearance.weight,
          tattoos: person.appearance.tattoos,
          drugs: person.health.drugs,
          amputhee: person.health.amputhee,
          mental: person.health.mental,
          diseases: person.health.diseases,
          registry: person.documents.registry,
          economicReg: person.documents.economicReg,
          driverLicense: person.documents.driverLicense,
          birthCertificate: person.documents.birthCertificate,
          professionalLicense: person.documents.professionalLicense,
          };
          return newPerson;
      });
      this.setState({ People: people });
      console.log('refreshData ->>', people)
    });
  }

  refreshData() {
    this.service.getAll().then(response => {
      const people = response.map((person) => {
        const newPerson = {
          _id: person._id,
          firstName: person.name.firstName,
          lastName: person.name.lastName,
          alias: person.name.alias,
          dateOfBirth: person.dateOfBirth,
          status: person.status,
          sex: person.sex,
          city: person.locations.ofBirth.city,
          address: person.locations.ofBirth.address,
          state: person.locations.ofBirth.state,
          zip: person.locations.ofBirth.zip,
          geoReferences: person.locations.geoReferences || [{ lat: 0, lng: 0 }],
          profession: person.background.profession,
          degree: person.background.degree,
          maritalStatus: person.background.maritalStatus,
          picName: person.picture.picName,
          picPath: person.picture.picPath,
          bodyType: person.appearance.bodyType,
          eyeColor: person.appearance.eyeColor,
          skinColor: person.appearance.skinColor,
          hairType: person.appearance.hairType,
          height: person.appearance.height,
          weight: person.appearance.weight,
          tattoos: person.appearance.tattoos,
          drugs: person.health.drugs,
          amputhee: person.health.amputhee,
          mental: person.health.mental,
          diseases: person.health.diseases,
          registry: person.documents.registry,
          economicReg: person.documents.economicReg,
          driverLicense: person.documents.driverLicense,
          birthCertificate: person.documents.birthCertificate,
          professionalLicense: person.documents.professionalLicense,
          };
          return newPerson;
      });
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
        <Route
          exact
          path="/dashboard/profile"
          render={props => <User {...props} />} />
      </Aux>
    );
  }
}

export default Dashboard;
