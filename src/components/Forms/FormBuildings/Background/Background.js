import React from "react";
import Aux from "../../../../hoc/Aux/Aux";

// CSS

const Background = props => {
  return (
    <Aux>
      <label>Profession:</label>
      <input
        type="text"
        name="profession"
        value={props.profession}
        onChange={e => props.change(e)}
      />
      <label>Degree:</label>
      <select name="degree" onChange={e => props.change(e)}>
        <option value="Non-alphabetized">
          Non-alphabetized
        </option>
        <option value="Basic">
          Basic
        </option>
        <option value="College">
          College
        </option>
        <option value="Master">
          Master
        </option>
      </select>
      <label>Marital Status:</label>
      <select name="degree" onChange={e => props.change(e)}>
        <option value="maried">
          Maried
        </option>
        <option value="single">
          Single
        </option>
        <option value="widwed">
          Widwed
        </option>
      </select>
    </Aux>
  );
};

export default Background;
