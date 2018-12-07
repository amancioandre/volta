import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import PrimaryInfo from '../FormBuildings/PrimaryInfo/PrimaryInfo';
import SecundaryInfo from '../FormBuildings/SecundaryInfo/SecundaryInfo';
import SubmitButton from '../FormBuildings/SubmitButton/SubmitButton';
import Background from '../FormBuildings/Background/Background';
import Appearance from '../FormBuildings/Appearance/Appearance';
import Health from '../FormBuildings/Health/Health';
import Documents from '../FormBuildings/Documents/Documents';
import { Form } from 'reactstrap';

// CSS
// import './FormSignUp.css';

class FormPerson extends Component {

  constructor(props){
    super(props);
    this.state = {

    };
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange (event) {  
    const {name, value} = event.target;
    console.log (event.target);
    this.setState({[name]: value});
  }

  render() {
    return(
    <Aux>
      <Form>
        <PrimaryInfo state = { this.state } change = { this.handleChange }/>
        <SecundaryInfo state = { this.state } change = { this.handleChange }/>
        <Background state = { this.state } change = { this.handleChange }/>
        <Appearance state = { this.state } change = { this.handleChange }/>
        <Health state = { this.state } change = { this.handleChange }/>
        <Documents state = { this.state } change = { this.handleChange }/>
        <SubmitButton buttonName = 'Create'/>
      </Form>
    </Aux>
    )
  }

}

export default FormPerson;