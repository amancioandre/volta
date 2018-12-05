import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';

import People from '../PeopleList/PeopleList';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    }
  }

  render() {
    return (
      <Aux>
        <p>Routes:</p>
        <People />
        <p>Add form</p>
        <p>Edit form</p>
        <p>Map</p>
      </Aux>
    )
  }
}

export default Dashboard;