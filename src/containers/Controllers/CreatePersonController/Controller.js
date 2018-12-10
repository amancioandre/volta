import React, { Component } from 'react';

class CreatePerson extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <button 
        className='Controller CreatePerson'>
        <img src="/img/icons/add-user.png" />
      </button>
    )
  }
}

export default CreatePerson;