import React, { Component } from "react";
import { Route } from "react-router-dom";

import Aux from '../../hoc/Aux/Aux';
import FormPerson from '../../components/Forms/FormPerson/FormPerson'
import PeopleList from './PeopleList/PeopleList';
import Person from './Person/Person';

import './Dashboard.css'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: {
        name: {
          firstName: "Joana",
          lastName: "Seeker"
        },
        email: "joana.s@procurandovc.com.br",
        username: "jseeker",
        organization: "Procurando voce",
        dateOfBirth: "01/01/1993",
        people: [1, 2, 3, 5],
        role: "Agent"
      },
      People: [{
        firstName: 'Teste',
        lastName: 'Doll',
        dateOfBirth: '31/12/1990',
        updatedAt: '07/12/2018',
        personId: 3
      },
      {
        firstName: 'Teste',
        lastName: 'Doll',
        dateOfBirth: '31/12/1990',
        updatedAt: '07/12/2018',
        personId: 4
      },
      {
        firstName: 'Teste',
        lastName: 'Doll',
        dateOfBirth: '31/12/1990',
        updatedAt: '07/12/2018',
        personId: 5
      },
      {
        firstName: 'Teste',
        lastName: 'Doll',
        dateOfBirth: '31/12/1990',
        updatedAt: '07/12/2018',
        personId: 6
      },
      {
        firstName: 'Teste',
        lastName: 'Doll',
        dateOfBirth: '31/12/1990',
        updatedAt: '07/12/2018',
        personId: 7
      },
      {
        firstName: 'Teste',
        lastName: 'Doll',
        dateOfBirth: '31/12/1990',
        updatedAt: '07/12/2018',
        personId: 8
      }],
      show: false,
    }
  }
  /* Handler Methods */
  


  /* Lifecycle Methods */
  componentDidMount() {
    console.log("inside componentDidMount -> Dashboard");
  }

  render() {
    
    const dashProps = this.state;
    
    return (
        <Aux>
          <Route exact path='/dashboard/people/add' render={(props) => <FormPerson {...props} />} />
          <Route exact path="/dashboard/people/:personId" render={(props) => <Person {...props} />} />
          <Route exact path="/dashboard/people" render={() => <PeopleList {...dashProps} />} />
        </Aux>
      )
  }
}

export default Dashboard;
