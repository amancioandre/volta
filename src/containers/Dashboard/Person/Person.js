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
import DeletePerson from '../../Controllers/DeletePersonController/Controller';

class Person extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMore: false,
      person: {
        firstName: 'Insira o primeiro nome',
        lastName: 'Último nome',
        alias: 'Apelido',
        dateOfBirth: '13-01-1991',
        status: 'Vivo',
        sex: 'Masculino',
        city: 'São Paulo',
        address: 'Al. Jaú, 1301',
        state: 'São Paulo',
        zip: 1420001,
        geoReferences: [{ lat: 0, lng: 0 }],
        profession: 'Ironhacker',
        degree: 'Non-alphabetized',
        maritalStatus: 'maried',
        picName: 'Avatar',
        picPath: 'https://res.cloudinary.com/stormamnc/image/upload/v1544470625/volta-api/people/person_picture_alt.png',
        bodyType: 'Skinny',
        eyeColor: 'Brown',
        skinColor: 'Black',
        hairType: 'Long',
        height: 174,
        weight: 65,
        tattoos: 'Variadas',
        drugs: true,
        amputhee: 'No',
        mental: 'No',
        diseases: 'No',
        registry: 123456789,
        economicReg: 123456798,
        driverLicense: 123456798,
        birthCertificate: 12346579,
        professionalLicense: 123465798,
      },
    refresh: true,
    };

    this.service = new Service();
    this.showMoreHandler = this.showMoreHandler.bind(this);
    this.getPositionHandler = this.getPositionHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
  }

  /* Handler Methods */
  showMoreHandler() {
    this.setState({ showMore: !this.state.showMore })
  }

  handleChange(event) {
    const  { person } = this.state
    const { name, value } = event.target;
    person[name] = value;
    this.setState({ person });
  }

  getPositionHandler(coords) {
    const newPos = { lat: coords.latitude, lng: coords.longitude };
    const { geoReferences } = this.state.person;
    geoReferences.push(newPos);

    this.setState({ geoReferences }, () => {
      this.service.addPosition(this.props.match.params.personId, this.state.person.geoReferences)
        .then(res => this.refreshData());
    })
  }

  saveEdit() {
    const { personId } = this.props.match.params
    const { person } = this.state

    this.service.editPerson(personId, person)
      .then(response => response.data)
  }
  
  refreshData() {
    const { personId } = this.props.match.params
    this.service.getPerson(personId)
      .then(person => {
        const newPerson = {
          firstName: person.name.firstName || '',
          lastName: person.name.lastName || '',
          alias: person.name.alias || '',
          dateOfBirth: person.dateOfBirth || '',
          status: person.status || '',
          sex: person.sex || '',
          city: person.locations.ofBirth.city || '',
          address: person.locations.ofBirth.address || '',
          state: person.locations.ofBirth.state || '',
          zip: person.locations.ofBirth.zip || '',
          geoReferences: person.locations.geoReferences || [{ lat: 0, lng: 0 }],
          profession: person.background.profession || '',
          degree: person.background.degree || '',
          maritalStatus: person.background.maritalStatus || '',
          picName: person.picture.picName || '',
          picPath: person.picture.picPath || '',
          bodyType: person.appearance.bodyType || '',
          eyeColor: person.appearance.eyeColor || '',
          skinColor: person.appearance.skinColor || '',
          hairType: person.appearance.hairType || '',
          height: person.appearance.height || '',
          weight: person.appearance.weight || '',
          tattoos: person.appearance.tattoos || '',
          drugs: person.health.drugs || '',
          amputhee: person.health.amputhee || '',
          mental: person.health.mental || '',
          diseases: person.health.diseases || '',
          registry: person.documents.registry || '',
          economicReg: person.documents.economicReg || '',
          driverLicense: person.documents.driverLicense || '',
          birthCertificate: person.documents.birthCertificate || '',
          professionalLicense: person.documents.professionalLicense || '',
          };
        this.setState({ person: newPerson });
      });
  }

  /* Lifecycle Methods */
  componentDidMount() {
    this.refreshData();
   }

  render() {
    const { person } = this.state;
    const center = person.geoReferences[person.geoReferences.length-1];

    let moreInfo = (
      <Aux>
        <div>
          <h3>Documents</h3>
          <Documents
            {...person} 
            change={this.handleChange}/>
        </div>
        <div>
          <h3>Appearance</h3>
          <Appearance 
            {...person} 
            change={this.handleChange}/>
        </div>
        <div>
          <h3>Health Condidition</h3>
          <Health 
            {...person} 
            change={this.handleChange}/>
        </div>
      </Aux>
    )

    return (
      <Aux>
        <div className="Person">
          <div className="picture">
            <img className="profile-pic"
              src={person.picPath}
              alt={person.picName} />
          </div>
          <div className="info">
            <PrimaryInfo
              {...person}
              change={this.handleChange} />
            <SecundaryInfo
              {...person}
              change={this.handleChange} />

            <button
              className="btn-show"
              onClick={this.showMoreHandler}>
              {!this.state.showMore ? 'Show more' : 'Hide'}
            </button>

            {/* Conditioned to Viewer Action */}
            {this.state.showMore ? moreInfo : null}
          </div>

          <div className="controls">
            <DeletePerson 
              personId={this.props.match.params.personId} 
              refresh={this.props.refresh}/>

            <SaveController
              savePerson={this.saveEdit} />

            <PositionController
              getPosition={this.getPositionHandler} />

            <SendPicture
              personId={this.props.match.params.personId} />
          </div>
        </div>
        <MapComponent
          c='map-bottom'
          zoom={2}
          center={center}
          markers={[person]} />
      </Aux>
    )
  }
}

export default Person;