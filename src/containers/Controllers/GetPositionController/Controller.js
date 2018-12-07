import React, { Component } from 'react';

import '../Controller.css';

class PositionController extends Component {
  constructor(props) {
    super(props);

    this.getPosition = this.getPosition.bind(this);
  }

  /* Controller Methods */
  getPosition() {
    navigator.geolocation.getCurrentPosition((pos) => {
      this.props.getPosition(pos.coords);
      // console.log(this.props.getPosition)
    });
    
  }
  
  /* Lifecycle Methods */
  componentDidMount() {
    console.log('inside componentDidMount -> Controller Position')
  }

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