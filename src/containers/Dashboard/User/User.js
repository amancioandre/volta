import React, { Component } from  'react';
import AuthService from '../../../auth/auth-services';

import Aux from '../../../hoc/Aux/Aux';
import PrimaryInfo from '../../../components/Forms/FormBuildings/PrimaryInfo/PrimaryInfo';
import UserInfo from '../../../components/Forms/FormBuildings/UserInfo/UserInfo';

import './User.css';

class User extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        dateOfBirth: '',
        role: '',
        people: [],
      }
    }

    this.service = new AuthService;
    this.refreshData = this.refreshData.bind(this);
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
    this.setState({
     user: { [name]: value }
    });
  }

  saveEdit(userId) {
    const { user } = this.state;
    this.service.editUser(userId, user)
  }

  refreshData() {
    const user = {
      firstName,
      lastName,
      email,
    }
    this.service.getUser()
  }

  // componentDidMount(){
  //   this.refreshData();
  // }

  render() {

    return (
      <Aux>
        <div className="User">
          <PrimaryInfo />
          <UserInfo />
        </div>
        <div className="controls">
          Controls
        </div>
      </Aux>
    )
  }
}

export default User;