import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import UserInfo from '../FormBuildings/UserInfo/UserInfo';
import SubmitButton from '../FormBuildings/SubmitButton/SubmitButton';
import { Form } from 'reactstrap';


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
      <Form>
        <UserInfo state = { this.state } change = { this.handleChange }/>
        <SubmitButton buttonName = 'Login'/>
      </Form>
    </Aux>
    )
  }

}

export default FormSignIn;