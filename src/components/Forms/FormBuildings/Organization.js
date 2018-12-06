import React from 'react';
import Aux from '../../../hoc/Aux/Aux';

// CSS

const Organization = (props, change) => {
  return(
    <Aux>
      <label>Organization:</label>
      <input type="text" name="organization" value={props.organization} onChange={ e => props.change(e)}/>    
    </Aux>
  )
}

export default Organization;