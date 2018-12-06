import React from 'react';
import Aux from '../../../hoc/Aux/Aux';

// CSS

const LastName = (props, change) => {
  return(
    <Aux>
      <label>Last Name:</label>
      <input type="text" name="lastName" value={props.lastName} onChange={ e => props.change(e)}/>    
    </Aux>
  )
}

export default LastName;