import React from 'react';
import { Link } from 'react-router-dom';

import './Card.css';

const Card = (props) => {
  return (
    <Link to={'/dashboard/people/'+props._id}>
      <div 
        className="Card">
        <img src= '/img/person_picture_alt.png' />
        <div className="basic-info">
          <h3>First Name:</h3>
          <p>{ props.name.firstName }</p>
          <h3>Last Name:</h3>
          <p>{ props.name.lastName }</p>
          <h3>Date of birth:</h3>
          <p>{ props.dateOfBirth }</p>
          <h3>Last update</h3>
          <p>{ props.Updated_at }</p>
        </div>
      </div>
    </Link>
  )
}

export default Card;

    
