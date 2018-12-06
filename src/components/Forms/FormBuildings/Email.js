import React from 'react';
import Aux from '../../../hoc/Aux/Aux';

// CSS

const Email = (props, change) => {
  return(
    <Aux>
      <label>Email:</label>
      <input type="text" name="email" value={ props.email } onChange={ e => props.change(e)}/>    
    </Aux>
  )
}

export default Email;