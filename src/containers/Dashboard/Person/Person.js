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
  }

  /* Handler Methods */
  showMoreHandler() {
    this.setState({showMore: !this.state.showMore})
  } 
  
  /* Lifecycle Methods */
  componentWillMount() {
    console.log('inside componentWillMount => Person')
  }

  render() {
    // let moreInfo = () => {
    //   return (
    //     <Aux>
    //       <div>
    //         <h3>Documents</h3>
    //         <Documents />
    //       </div>
    //       <div>
    //         <h3>Appearance</h3>
    //         <Appearance />
    //       </div>
    //       <div>
    //         <h3>Health Condidition</h3>
    //         <Health />
    //       </div>
    //     </Aux>
    //   )
    // }
    
    return (
      <div className="Person">
        <div className="">
          <img src='' alt='Person Foto'/>
        </div>
        <div className="info">
          <div className="main-info">
            <PrimaryInfo />
          </div>
          <div className="secundary-info">
            <SecundaryInfo />
          </div>
          <button onClick={this.showMoreHandler}>Icon</button>
          {/* Conditioned to Viewer Action */ }
          {this.state.showMore ? moreInfo : null}
          <MapComponent c='map-bottom'/>
        </div>
      </div>
    )
  }
}

export default Person;