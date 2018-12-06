import React from 'react';
import Aux from '../../../../hoc/Aux/Aux';

// CSS

const PrimaryInfo = (props) => {
  return(
    <Aux>
      <label>First Name:</label>
      <input type="text" name="firstName" value={props.firstName} onChange={ e => props.change(e)}/>    
      <label>Last Name:</label>
      <input type="text" name="lastName" value={props.lastName} onChange={ e => props.change(e)}/>
      <label>Date of birth:</label>
      <input type="date" name="dateOfBirth" value={props.dateOfBirth} onChange={ e => props.change(e)}/> 
    </Aux>
  )
}

export default PrimaryInfo;