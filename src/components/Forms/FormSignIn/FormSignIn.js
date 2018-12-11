import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import UserInfo from '../FormBuildings/UserInfo/UserInfo';
import SubmitButton from '../FormBuildings/SubmitButton/SubmitButton';
import { Form } from 'reactstrap';
//Auth service
import AuthService from "../../../auth/auth-services";
import { Route, Redirect } from 'react-router-dom';


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
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.service = new AuthService ();
  };

  handleFormSubmit(event) {
    event.preventDefault();
    const user = this.state;
    console.log(user);
    this.service
      .login(user)
      .then(response => {
        this.setState({user: response});
        this.props.getUser(response);
      })
      .catch(error => console.log(error));
  }

  handleChange (event) {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    if(this.state.user){
      return(
        <Redirect to={{pathname: '/dashboard/people'}}/>
      )
    }else{
    return(
      <Form onSubmit= {this.handleFormSubmit}> 
        <UserInfo state = { this.state } change = { this.handleChange }/>
        <SubmitButton buttonName = 'Login'/>
      </Form>
    )
    }
  }

}

export default FormSignIn;