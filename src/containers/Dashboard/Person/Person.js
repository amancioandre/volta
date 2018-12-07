import React, { Component } from 'react';

import './Person.css';

import Aux from '../../../hoc/Aux/Aux';
import PrimaryInfo from '../../../components/Forms/FormBuildings/PrimaryInfo/PrimaryInfo';
import SecundaryInfo from '../../../components/Forms/FormBuildings/SecundaryInfo/SecundaryInfo';
import MapComponent from '../../Map/Map';

class Person extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMore: false
    }

    this.showMoreHandler = this.showMoreHandler.bind(this);
  }

  /* Handler Methods */
  showMoreHandler() {
    this.setState({showMore: !this.state.showMore})
  } 
  
  /* Lifecycle Methods */
  componentWillMount() {
    this.setState({ person: this.props.person })
    console.log('inside componentWillMount => Person')
  }

  render() {
    // const { personData } = this.state.person

    let moreInfo = (
        <Aux>
          <div>
            <h3>Documents</h3>
            {/* <Documents /> */}
          </div>
          <div>
            <h3>Appearance</h3>
            {/* <Appearance /> */}
          </div>
          <div>
            <h3>Health Condidition</h3>
            {/* <Health /> */}
          </div>
        </Aux>
      )
    
    return (
      <div className="Person">
        <div className="picture">
          <img className="profile-pic"
            src={this.state.person ? this.state.person.picture : '/img/person_picture_alt.png'} 
            alt={this.state.person ? this.state.person.picture : 'Picture not found, please insert picture!'}/>
        </div>
        <div className="info">
          <div className="main-info">
            <PrimaryInfo />
          </div>
          <div className="secundary-info">
            <SecundaryInfo />
          </div>
          <button className="btn-show" onClick={this.showMoreHandler}>{ !this.state.showMore ? 'Show more' : 'Hide'}</button>
          {/* Conditioned to Viewer Action */ }
          {this.state.showMore ? moreInfo : null}
          <div className="controls">
            <button><img src="/img/icons/cloud-computing.png" /></button>
            <button><img src="/img/icons/pin_purple.png" /></button>
          </div>
          <MapComponent c='map-bottom'/>
        </div>
      </div>
    )
  }
}

export default Person;