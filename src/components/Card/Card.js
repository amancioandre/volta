import React from 'react';
import { Redirect } from 'react-router-dom';

import Aux from '../../hoc/Aux/Aux';

import './Card.css';

const Card = (props) => {
  return (
    <Aux>
      <div 
        className="person-card"
        onClick={() => <Redirect to={'/dashboard/people/'+props.personId} />}
        >
        <img src= '/img/person_picture_alt.png' />
        <div className="person-basic-info">
          <h3>First Name:</h3>
          <span>{ props.firstName }</span>
          <h3>Last Name:</h3>
          <span>{ props.lastName }</span>
          <h3>Date of birth:</h3>
          <span>{ props.dateOfBirth }</span>
          <h3>Last update</h3>
          <span>{ props.updatedAt }</span>
        </div>
      </div>
    </Aux>
  )
}

export default Card;

    
