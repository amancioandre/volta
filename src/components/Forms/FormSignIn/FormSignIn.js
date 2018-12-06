import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';

import UserInfo from '../FormBuildings/UserInfo/UserInfo';
import SubmitButton from '../FormBuildings/SubmitButton/SubmitButton';

// CSS
import './formSingIn.css';

class FormSignIn extends Component {

  constructor(props){
    super(props);
    this.state = {
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
        <UserInfo state = { this.state } change = { this.handleChange }/>
        <SubmitButton buttonName = 'Login'/>
      </form>
    </Aux>
    )
  }

}

export default FormSignIn;