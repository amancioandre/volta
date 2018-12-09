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
    const PeopleCards = this.props.People.map((Person,i) => {
      return <Card key={i} {...Person} /> 
    })
    
    return (
      <div className="People">
        <div className="Cards">
          {PeopleCards}
        </div>
        <div className="controls">
          <CreatePerson />
        </div>
      </div>
    )
  }
}

export default PeopleList;