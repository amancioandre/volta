import React, { Component } from 'react';
import Card from '../../../components/Card/Card'
import CreatePerson from '../../Controllers/CreatePersonController/Controller';
import MapComponent from '../../Map/Map';
import Aux from '../../../hoc/Aux/Aux';
import Search from '../../../components/Search/Search';

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
      <Aux>

        <div className="People">
          <Search/>
          <div className="Cards">
            {PeopleCards}
          </div>
          <div className="controls">
            <CreatePerson />
          </div>
        </div>
        { window.innerWidth > 899 ? <MapComponent c='map-wide' /> : null}
      </Aux>
    )
  }
}

export default PeopleList;