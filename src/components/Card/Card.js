import React from 'react';

import './card.css';

const Card = (props) => {
  return (
    
    <div className="person-card">
      <div className= 'person-picture'>
        <img src= '/img/person_picture_alt.png'></img>
      </div>
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
  )
}

export default Card;

    
