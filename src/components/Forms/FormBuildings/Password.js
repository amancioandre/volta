import React from 'react';
import Aux from '../../../hoc/Aux/Aux';

// CSS

const Password = (props, change) => {
  return(
    <Aux>
      <label>password:</label>
      <input type="password" name="password" value={props.password} onChange={ e => props.change(e)}/>    
    </Aux>
  )
}

export default Password;