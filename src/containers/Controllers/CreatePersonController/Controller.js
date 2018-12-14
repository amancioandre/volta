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
        <i class="fa fa-user-plus" aria-hidden="true"></i>
      </Link>
    )
  }
}

export default CreatePerson;