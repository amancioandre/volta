import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import FirstName from '../FormBuildings/FirstName';
import LastName from '../FormBuildings/LastName';
import DateOfBirth from '../FormBuildings/DateOfBirth';
import Email from '../FormBuildings/Email';
import Organization from '../FormBuildings/Organization';
import Username from '../FormBuildings/Username';
import Password from '../FormBuildings/Password';

// CSS
import './FormSignUp.css';

class FormSignUp extends Component {

  constructor(props){
    super(props);
    this.state = {
      firstName:'',
      lastName:'',
      dateOfBirth:'',
      email:'',
      organization:'', 
      username: '', 
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange (event) {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    return(
    <Aux>
      <form>
        <FirstName state = { this.state } change = { this.handleChange }/>
        <LastName state = { this.state } change = { this.handleChange }/>
        <DateOfBirth state = { this.state } change = { this.handleChange }/>
        <Email state = { this.state } change = { this.handleChange }/>
        <Organization state = { this.state } change = { this.handleChange }/>
        <Username state = { this.state } change = { this.handleChange }/>
        <Password state = { this.state } change = { this.handleChange }/>
      </form>
    </Aux>
    )
  }

}

export default FormSignUp;