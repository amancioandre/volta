import React, { Component } from 'react';
import Service from '../../../../src/crud/crud-services';

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

class Person extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMore: false,
      person: {
        name: {
          firstName: '',
          lastName: '',
          alias: '',
        },
        dateOfBirth: Date,
        status: '',
        sex: '',
        locations: {
          ofBirth: {
            city: '',
            address: '',
            state: '',
            zip: Number,
          },
          geoReferences: [{ lat: 0, lng: 0 }],
        },
        background: {
          profession: '',
          degree: 'Non-alphabetized',
          maritalStatus: 'maried',
        },
        picture: {
          picName: '',
          picPath: '',
        },
        appearance: {
          bodyType: 'Skinny',
          eyeColor: 'Brown',
          skinColor: 'Black',
          hairType: '',
          height: 0,
          weight: 0,
          tattoos: '',
        },
        health: {
          drugs: true,
          amputhee: 'No',
          mental: '',
          diseases: '',
        },
        documents: {
          registry: 0,
          economicReg: 0,
          driverLicense: 0,
          birthCertificate: 0,
          professionalLicense: 0,
        },
      },
      refresh: true,
    };

    this.service = new Service();
    this.showMoreHandler = this.showMoreHandler.bind(this);
    this.getPositionHandler = this.getPositionHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.refreshData = this.refreshData.bind(this);
  }

  /* Handler Methods */
  showMoreHandler() {
    this.setState({showMore: !this.state.showMore})
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  getPositionHandler(coords) {
    console.log(coords)
    const newPos = { lat: coords.latitude, lng: coords.longitude };
    const { geoReferences } = this.state.person.locations;
    geoReferences.push(newPos);

    this.setState({ geoReferences }, () => {
      this.service.addPosition(this.props.match.params.personId, this.state.person.locations.geoReferences);
    })
  }

  saveEditToDatabase() {
    const { personId } = this.props.match.params
    const { person } = this.state
    this.service.editPerson(personId, person)
      .then(response => response.data)
  }
  
  refreshData() {
    const { personId } = this.props.match.params
    this.service.getPerson(personId)
      .then(person => this.setState({ person }))
  }
  
  /* Lifecycle Methods */
  componentDidMount() {
    this.refreshData();
  }

  render() {
    const { person } = this.state;
    console.log(person)
    let moreInfo = (
        <Aux>
          <div>
            <h3>Documents</h3>
            <Documents {...person.documents}/>
          </div>
          <div>
            <h3>Appearance</h3>
            <Appearance {...person.appearance}/>
          </div>
          <div>
            <h3>Health Condidition</h3>
            <Health {...person.health}/>
          </div>
        </Aux>
      )
    
    return (
      <Aux>
        <div className="Person">
          <div className="picture">
            <img className="profile-pic"
              src={person.picture.picPath} 
              alt={person.picture.picName}/>
          </div>
          <div className="info">
            <PrimaryInfo 
              { ...person.name }
              change={this.handleChange}/>
            <SecundaryInfo 
              { ...person.name } { ...person.locations.ofBirth }
              change={this.handleChange} />

            <button 
              className="btn-show" 
              onClick={this.showMoreHandler}>
                { !this.state.showMore ? 'Show more' : 'Hide'}
            </button>

            {/* Conditioned to Viewer Action */ }
            {this.state.showMore ? moreInfo : null}
          </div>

          <div className="controls">
            <SaveController 
              savePerson={this.savePerson}/>
            
            <PositionController
              getPosition={this.getPositionHandler} />
            
            <SendPicture 
              personId={this.props.match.params.personId}
              refresh={this.refreshData}/>
          </div>
        </div>
        <MapComponent 
          c='map-bottom'
          position={this.state.person ? this.state.person.locations.geoReferences[0] : { lat: 0, lng: 0 }}
          {...this.state.person} />
      </Aux>
    )
  }
}

export default Person;