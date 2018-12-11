import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Service from '../../../crud/crud-services';

class DeletePerson extends Component {
  constructor(props){
    super(props);

    this.service = new Service();
    this.deletePersonHandler = this.deletePersonHandler.bind(this);
  }

  deletePersonHandler() {
    this.service.deletePerson(this.props.personId)
      .then(res => this.props.refresh())
  }

  render() {

    return (
      <Link to="/dashboard/people">
        <button 
          className='Controller'
          onClick={this.deletePersonHandler}>
          <img src="/img/icons/delete.png" />
        </button>
      </Link>
    )
  }
}

export default DeletePerson;