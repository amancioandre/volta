import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Aux from '../../hoc/Aux/Aux';
import People from './PeopleList/PeopleList';
import Person from './Person/Person';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }
  /* Handler Methods */


  /* Lifecycle Methods */
  componentDidMount() {
    console.log('inside componentDidMount -> Dashboard')
  }

  render() {
    return (
      <Aux>
        Nada
      </Aux>
    )
  }
}

export default Dashboard;