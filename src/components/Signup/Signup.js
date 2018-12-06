import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import FormSignUp from '../Forms/FormSignUp/FormSignUp';

// CSS
import './Signup.css';

const Signup = (props) => {
  return(
    <Aux>
      <FormSignUp/>
    </Aux>
  )
}

export default Signup;