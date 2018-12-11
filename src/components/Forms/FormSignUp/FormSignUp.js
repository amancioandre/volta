import React, { Component } from "react";

import Aux from "../../../hoc/Aux/Aux";
import PrimaryInfo from "../FormBuildings/PrimaryInfo/PrimaryInfo";
import UserInfo from "../FormBuildings/UserInfo/UserInfo";
import SubmitButton from "../FormBuildings/SubmitButton/SubmitButton";
import { Form } from "reactstrap";
// CSS
import "./FormSignUp.css";
//Auth service
import AuthService from "../../../auth/auth-services";

class FormSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      email: "",
      organization: "",
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.service = new AuthService ();
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const user = this.state;
    console.log(user);
    this.service
      .signup(user)
      .then(response => {
        this.setState({});
        this.props.getUser(response);
      })
      .catch(error => console.log(error));
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    console.log(this.props);
    return (
      <Form onSubmit= {this.handleFormSubmit}>
        <PrimaryInfo state={this.state} change={this.handleChange} />
        <UserInfo signup={true} state={this.state} change={this.handleChange} />
        <SubmitButton buttonName="SignUp" />
      </Form>
    );
  }
}

export default FormSignUp;
