import React from 'react';
import Aux from '../../../hoc/Aux/Aux';

// CSS

const Username = (props, change) => {
  return(
    <Aux>
      <label>Username:</label>
      <input type="text" name="username" value={props.username} onChange={ e => props.change(e)}/>    
    </Aux>
  )
}

export default Username;