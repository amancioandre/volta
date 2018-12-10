import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CreatePerson extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Link 
        className='Controller CreatePerson'
        to='/dashboard/people-add' >
        <img src="/img/icons/add-user.png" />
      </Link>
    )
  }
}

export default CreatePerson;