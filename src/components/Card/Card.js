import React from "react";
import { Link } from "react-router-dom";

import './Card.css';
  
  const Card = (props) => {
  console.log('cards --------->', props)

  const AjustDate = (dateBd) => {
    let date = new Date (dateBd);
    return `${date.getDate()}/${date.getMonth()}/${date.getYear()}`
  }
    return (
    <Link to={{
      pathname: '/dashboard/people/'+props._id,
      }}>
      <div 
        className="Card">
        <img src= {props.picPath} />
        <div className="basic-info">
          <h3>First Name:</h3>
          <p>{ props.firstName }</p>
          <h3>Last Name:</h3>
          <p>{ props.lastName }</p>
          <h3>Date of birth:</h3>
          <p>{ AjustDate(props.dateOfBirth) }</p>
          <h3>Last update</h3>
          <p>{ AjustDate(props.Updated_at) }</p>
        </div>
      </div>
    </Link>
  )
}

export default Card;
