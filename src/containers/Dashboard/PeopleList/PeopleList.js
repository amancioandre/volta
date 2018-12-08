import React, { Component } from 'react';
import Card from '../../../components/Card/Card'
import CreatePerson from '../../Controllers/CreatePersonController/Controller';

import './People.css'

class PeopleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    }
  }

  render() {
    // const person = { firstName: 'Andre', lastName: 'Moraes', dateOfBirth: '04/07/1987', lastUpdate: '06/12/2018'}
    console.log(this.props.match)
    
    return (
      <div className="People">
        <div className="Cards">
          <Card {...this.props} />
        </div>
        <div className="controls">
          <CreatePerson />
        </div>
      </div>
    )
  }
}

export default PeopleList;