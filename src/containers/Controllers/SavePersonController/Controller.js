import React, { Component } from 'react';
import Axios from 'axios';

class SavePersonEdit extends Component {
  constructor(props) {
    super(props)

    this.saveEditToDatabase = this.saveEditToDatabase.bind(this);
  }

  saveEditToDatabase(person) {
    console.log('saved', person)
    // Axios.patch('https://burguer-builder-1d554.firebaseio.com/', person)
    //   .then(res => {
    //     this.props.saved('Edit saved', res)
    //   })
    //   .catch(err => {
    //     this.props.savePerson('Could not save your edits', err)
    //   })
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