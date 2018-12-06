import React from 'react';
import Aux from '../../../hoc/Aux/Aux';

// CSS

const FirstName = (props) => {
  return(
    <Aux>
      <label>First Name:</label>
      <input type="text" name="firstName" value={props.firstName} onChange={ e => props.change(e)}/>    
    </Aux>
  )
}

export default FirstName;