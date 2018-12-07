import React, { Component } from 'react';

class SendPicture extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <button 
        className="Controller">
        <img src="/img/icons/photo-camera.png" />
      </button>
    )
  }
}

export default SendPicture;