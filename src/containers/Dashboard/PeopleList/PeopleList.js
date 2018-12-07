import React, { Component } from 'react';
import Card from '../../../components/Card/Card'
class PeopleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    }
  }

  render() {
    return (
      <Card props = { this.state } />
    )
  }
}

export default PeopleList;