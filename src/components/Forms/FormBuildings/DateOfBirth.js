import React from 'react';
import Aux from '../../../hoc/Aux/Aux';

// CSS

const DateOfBirth = (props, change) => {
  return(
    <Aux>
      <label>Date of birth:</label>
      <input type="date" name="dateOfBirth" value={props.dateOfBirth} onChange={ e => props.change(e)}/>    
    </Aux>
  )
}

export default DateOfBirth;