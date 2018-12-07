import React from 'react';
import Aux from '../../../../hoc/Aux/Aux';
import { Button } from 'reactstrap';
// CSS

const SubmitButton = (props) => {
  return(
    <Aux>
      <Button type="submit">{ props.buttonName }</Button>
    </Aux>
  )
}

export default SubmitButton;