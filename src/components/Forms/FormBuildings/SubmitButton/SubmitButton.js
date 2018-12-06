import React from 'react';
import Aux from '../../../../hoc/Aux/Aux';

// CSS

const SubmitButton = (props) => {
  return(
    <Aux>
      <input type="submit" value= {props.buttonName} />
    </Aux>
  )
}

export default SubmitButton;