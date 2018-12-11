import React from 'react';
import Aux from '../../../../hoc/Aux/Aux';
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';


// CSS

const PrimaryInfo = (props) => {
  return(
    <Aux>
      <FormGroup>
        <Label>First Name:</Label>
        <Input type="text" name="firstName" required value={props.firstName} onChange={ e => props.change(e)}/>    
      </FormGroup> 
      <FormGroup>
        <Label>Last Name:</Label>
        <Input type="text" name="lastName" required value={props.lastName} onChange={ e => props.change(e)}/>
      </FormGroup> 
      <FormGroup>
        <Label>Date of birth:</Label>
        <Input type="date" name="dateOfBirth" required value={props.dateOfBirth} onChange={ e => props.change(e)}/>
      </FormGroup> 
    </Aux>
  )
}

export default PrimaryInfo;