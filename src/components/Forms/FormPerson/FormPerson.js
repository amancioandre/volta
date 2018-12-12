import React, { Component } from 'react';

import PrimaryInfo from '../FormBuildings/PrimaryInfo/PrimaryInfo';
import SecundaryInfo from '../FormBuildings/SecundaryInfo/SecundaryInfo';
import SubmitButton from '../FormBuildings/SubmitButton/SubmitButton';
import Background from '../FormBuildings/Background/Background';
import Appearance from '../FormBuildings/Appearance/Appearance';
import Health from '../FormBuildings/Health/Health';
import Documents from '../FormBuildings/Documents/Documents';
import { Form } from 'reactstrap';
import CrudServices from '../../../crud/crud-services';

import {
	withRouter
} from 'react-router-dom';

// CSS
// import './FormSignUp.css';

class FormPerson extends Component {

  constructor(props){
    super(props);
    this.state = {
      lat: 0,
      lng: 0,
    };
    this.service = new CrudServices();
    this.handleChange = this.handleChange.bind(this);
    this.handleCreatePerson = this.handleCreatePerson.bind(this);
  };

  handleCreatePerson(event) {
    event.preventDefault();
    const person = this.state;
    console.log(person);
    this.service
      .createPerson(person)
      .then(response => {
        this.setState({});
      })
      .catch(error => console.log(error));
  }

  handleChange (event) {  
    const {name, value} = event.target;
    this.setState({[name]: value});
    console.log(this.state);
  }

  render() {
    return(
      <Form onSubmit= {this.handleCreatePerson}>
        <PrimaryInfo state = { this.state } change = { this.handleChange }/>
        <SecundaryInfo state = { this.state } change = { this.handleChange }/>
        <Background state = { this.state } change = { this.handleChange }/>
        <Appearance state = { this.state } change = { this.handleChange }/>
        <Health state = { this.state } change = { this.handleChange }/>
        <Documents state = { this.state } change = { this.handleChange }/>
        <SubmitButton buttonName = 'Create'/>
      </Form>
    )
  }

}

export default withRouter(FormPerson);