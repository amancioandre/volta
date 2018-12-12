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
    this.state ={ person:{
        geoReferences: [{ lat: 0, lng: 0 }],
      }
    };
    this.service = new CrudServices();
    this.handleChange = this.handleChange.bind(this);
    this.handleCreatePerson = this.handleCreatePerson.bind(this);
    this.getPosition = this.getPosition.bind(this);
    this.getPositionHandler = this.getPositionHandler.bind(this);
  };

  handleCreatePerson(event) {
    event.preventDefault();
    const person = this.person.state;
    console.log(person);
    this.service
      .createPerson(person)
      .then(response => {
        this.setState({});
      })
      .catch(error => console.log(error));
  }

  getPosition() {
    navigator.geolocation.getCurrentPosition((pos) => {
      let { coords } = pos;
      console.log('Pos -------->',coords);
      this.getPositionHandler(coords);
    });
  }

  getPositionHandler(coords) {
    const newPos = { lat: coords.latitude, lng: coords.longitude };
    console.log('this.state --------> ', this.person.state);
    const { geoReferences } = this.person.state;
    geoReferences.push(newPos);

    this.setState({ geoReferences }, () => {
      this.service.addPosition(this.props.match.params.personId, this.preson.state.geoReferences)
        .then(res => (console.log('Result------->', res)));
    })
  }

  handleChange (event) {  
    const {name, value} = event.target;
    this.setState({[name]: value});
    console.log(this.person.state);
  }

  componentDidMount() {
    this.getPosition();
  }

  render() {
    console.log(this.state);
    return(
      <Form onSubmit= {this.handleCreatePerson}>
        <PrimaryInfo state = { this.person.state } change = { this.handleChange }/>
        <SecundaryInfo state = { this.person.state } change = { this.handleChange }/>
        <Background state = { this.person.state } change = { this.handleChange }/>
        <Appearance state = { this.person.state } change = { this.handleChange }/>
        <Health state = { this.person.state } change = { this.handleChange }/>
        <Documents state = { this.person.state } change = { this.handleChange }/>
        <SubmitButton buttonName = 'Create'/>
      </Form>
    )
  }

}

export default withRouter(FormPerson);