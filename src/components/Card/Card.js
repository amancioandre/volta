import React from "react";
import { Link } from "react-router-dom";

import "./Card.css";

const Card = props => {
  const person = props;
  const AjustDate = dateBd => {
    let date = new Date(dateBd);
    return `${date.getDate()}/${date.getMonth()}/${date.getYear()}`;
  };
  return (
      <Link
        to={{
          pathname: "/dashboard/people/" + props._id,
          state: person
        }}
      >
        <div className="Card">
          <img src={props.picture.picPath} />
          <div className="basic-info">
            <h3>First Name:</h3>
            <p>{props.name.firstName}</p>
            <h3>Last Name:</h3>
            <p>{props.name.lastName}</p>
            <h3>Date of birth:</h3>
            <p>{AjustDate(props.dateOfBirth)}</p>
            <h3>Last update</h3>
            <p>{AjustDate(props.Updated_at)}</p>
          </div>
          <div className="controls" />
        </div>
      </Link>
  );
};

export default Card;
