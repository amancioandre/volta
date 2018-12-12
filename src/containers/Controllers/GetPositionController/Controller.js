import React, { Component } from 'react';

import '../Controller.css';

class PositionController extends Component {
  constructor(props) {
    super(props);

    this.getPosition = this.getPosition.bind(this);
  }

  /* Controller Methods */
  getPosition() {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }
    navigator.geolocation.getCurrentPosition((pos) => {
      this.props.getPosition(pos.coords);
    }, err, options);
  }
  
  /* Lifecycle Methods */
  render () {
    
    return (
      <button 
        className='Controller'
        onClick={this.getPosition}>
        <img src="/img/icons/pin_purple.png" />
      </button>
    )
  }
}

export default PositionController;