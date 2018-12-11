import React, { Component } from 'react';
import Axios from 'axios';

class SavePersonEdit extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    
    return (
      <button 
        className="Controller"
        onClick={this.saveEditToDatabase}>
        <img src="/img/icons/cloud-computing.png" />
      </button>
    )
  }
}

export default SavePersonEdit;