import React, { Component } from "react";

import PrimaryInfo from "../FormBuildings/PrimaryInfo/PrimaryInfo";
import SecundaryInfo from "../FormBuildings/SecundaryInfo/SecundaryInfo";
import SubmitButton from "../FormBuildings/SubmitButton/SubmitButton";
import Background from "../FormBuildings/Background/Background";
import Appearance from "../FormBuildings/Appearance/Appearance";
import Health from "../FormBuildings/Health/Health";
import Documents from "../FormBuildings/Documents/Documents";
import { Form } from "reactstrap";
import CrudServices from "../../../crud/crud-services";

import { withRouter } from "react-router-dom";

// CSS
// import './FormSignUp.css';

class FormPerson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      geoReferences: []
    };
    this.service = new CrudServices();
    this.handleChange = this.handleChange.bind(this);
    this.handleCreatePerson = this.handleCreatePerson.bind(this);
    this.getPosition = this.getPosition.bind(this);
    this.getPositionHandler = this.getPositionHandler.bind(this);
  }

  handleCreatePerson(event) {
    event.preventDefault();
    const person = this.state;
    const id = this.props.user._id;
    console.log(this.props.user._id);
    console.log(this.state);
    this.service
      .createPerson(person, id)
      .then(response => {
        this.setState({});
      })
      .catch(error => console.log(error));
  }

  getPosition() {
    navigator.geolocation.getCurrentPosition(pos => {
      let { coords } = pos;
      console.log("Pos -------->", coords);
      this.getPositionHandler(coords);
    });
  }

  getPositionHandler(coords) {
    const newPos = { lat: coords.latitude, lng: coords.longitude };
    console.log("this.state --------> ", this.state);
    const { geoReferences } = this.state;
    geoReferences.push(newPos);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(this.state);
  }

  componentDidMount() {
    this.getPosition();
  }

  render() {
    return (
      <Form onSubmit={this.handleCreatePerson}>
        <PrimaryInfo state={this.state} change={this.handleChange} />
        <SecundaryInfo state={this.state} change={this.handleChange} />
        <Background state={this.state} change={this.handleChange} />
        <Appearance state={this.state} change={this.handleChange} />
        <Health state={this.state} change={this.handleChange} />
        <Documents state={this.state} change={this.handleChange} />
        <SubmitButton buttonName="Create" />
      </Form>
    );
  }
}

export default withRouter(FormPerson);
