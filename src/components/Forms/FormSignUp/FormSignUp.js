import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import PrimaryInfo from '../FormBuildings/PrimaryInfo/PrimaryInfo';
import UserInfo from '../FormBuildings/UserInfo/UserInfo';
import SubmitButton from '../FormBuildings/SubmitButton/SubmitButton';

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
        <PrimaryInfo state = { this.state } change = { this.handleChange }/>
        <UserInfo signup = { true } state = { this.state } change = { this.handleChange }/>
        <SubmitButton buttonName = 'SignUp'/>
      </form>
    </Aux>
    )
  }

}

export default FormSignUp;