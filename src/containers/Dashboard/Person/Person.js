import React, { Component } from 'react';

import './Person.css';

import Aux from '../../../hoc/Aux/Aux';
import MapComponent from '../../Map/Map';
import PrimaryInfo from '../../../components/Forms/FormBuildings/PrimaryInfo/PrimaryInfo';
import SecundaryInfo from '../../../components/Forms/FormBuildings/SecundaryInfo/SecundaryInfo';
import Documents from '../../../components/Forms/FormBuildings/Documents/Documents';
import Appearance from '../../../components/Forms/FormBuildings/Appearance/Appearance';
import Health from '../../../components/Forms/FormBuildings/Health/Health';


/* Controllers */
import PositionController from '../../Controllers/GetPositionController/Controller';
import SaveController from '../../Controllers/SavePersonController/Controller';
import SendPicture from '../../Controllers/SendPictureController/Controller';
import CrudServices from "../../crud/crud-services";

class Person extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMore: false,
      position: {
        lat: -23.561679,
        lng: -46.660056,
      },
      person: {}
    },

    this.service = new CrudServices();
    this.showMoreHandler = this.showMoreHandler.bind(this);
    this.positionHandler = this.positionHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /* Handler Methods */
  showMoreHandler() {
    this.setState({showMore: !this.state.showMore})
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  positionHandler(coords) {
    const { latitude, longitude } = coords;
    this.setState({
      position:
     {
      lat: latitude,
      lng: longitude
     }
    })
  }
  
  /* Lifecycle Methods */

  render() {
    console.log
    let moreInfo = (
        <Aux>
          <div>
            <h3>Documents</h3>
            <Documents />
          </div>
          <div>
            <h3>Appearance</h3>
            <Appearance />
          </div>
          <div>
            <h3>Health Condidition</h3>
            <Health />
          </div>
        </Aux>
      )
    
    return (
      <Aux>
        <div className="Person">
          <div className="picture">
            <img className="profile-pic"
              src={this.state.person ? '/img/person_picture_alt.png' : this.state.person.picture } 
              alt={this.state.person ? this.state.person.picture : 'Picture not found, please insert picture!'}/>
          </div>
          <div className="info">
            <PrimaryInfo {...this.state.person} change={this.handleChange}/>
            <SecundaryInfo />
            <button className="btn-show" onClick={this.showMoreHandler}>{ !this.state.showMore ? 'Show more' : 'Hide'}</button>
            {/* Conditioned to Viewer Action */ }
            {this.state.showMore ? moreInfo : null}
          </div>
          <div className="controls">
            <SaveController savePerson={this.editHandler}/>
            <PositionController
              getPosition={this.positionHandler} />
            <SendPicture personId={this.props.match.params.personId}/>
          </div>
        </div>
        <MapComponent 
          c='map-bottom'
          position={this.state.position}
          {...this.state.person} />
      </Aux>
    )
  }
}

export default Person;