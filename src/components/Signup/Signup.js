import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import FormSignUp from '../Forms/FormSignUp/FormSignUp';

// CSS
import './Signup.css';

const Signup = (props) => {
  console.log ('@@@@@@@',props);
  return(
    <Aux>
      <FormSignUp getUser = {props.getUser}/>
    </Aux>
  )
}

export default Signup;