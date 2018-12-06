import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import FormSignIn from '../Forms/FormSignIn/FormSignIn';

// CSS
import './signIn.css';

const SignIn = (props) => {
  return(
    <Aux>
      <FormSignIn/>
    </Aux>
  )
}

export default SignIn;