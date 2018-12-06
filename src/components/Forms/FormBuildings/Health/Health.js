import React from "react";
import Aux from "../../../../hoc/Aux/Aux";

// CSS

const Health = props => {
  return (
    <Aux>
      <label>Drugs:</label>
      <select name="drugs" onChange={e => props.change(e)}>
        <option value="false">
          No
        </option>
        <option value="true">
          Yes
        </option>
      </select>
      <label>Amputhee:</label>
      <select name="amputhee" onChange={e => props.change(e)}>
        <option value="No">
        No
        </option>
        <option value="Left Arm/Hands">
        Left Arm/Hands
        </option>
        <option value="Right Arm/Hands">
        Right Arm/Hands
        </option>
        <option value="Left Leg/Feet">
        Left Leg/Feet
        </option>
        <option value="Right Leg/Feet">
        Right Leg/Feet
        </option>
      </select>
      <label>Mental:</label>
      <input type="text" name="mental" value={ props.mental } onChange={ e => props.change(e)}/>  
      <label>Diseases:</label>
      <input type="text" name="diseases" value={ props.diseases } onChange={ e => props.change(e)}/> 
    </Aux>
  );
};

export default Health;
