import React from "react";
import Aux from "../../../../hoc/Aux/Aux";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText
} from "reactstrap";
import aux from "../../../../hoc/Aux/Aux";
// CSS

const Health = props => {
  return (
    <Aux>
      <FormGroup>
        <Label>Drugs:</Label>
        <Input type="select" name="drugs" onChange={e => props.change(e)}>
          <option value="false">
            No
          </option>
          <option value="true">
            Yes
          </option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label>Amputhee:</Label>
        <Input type="select" name="amputhee" >
          <option value="No">
          No
          </option>
          <option value="Left Arm/Hands">
          Left Arm/Hands
          </option>
          <option value="Right Arm/Hands">
          Right Arm/Hands
          </option>
          <option value="Left Leg/Feet">
          Left Leg/Feet
          </option>
          <option value="Right Leg/Feet">
          Right Leg/Feet
          </option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label>Mental:</Label>
        <Input type="text" name="mental" value={ props.mental } onChange={ e => props.change(e)}/>  
        <Label>Diseases:</Label>
        <Input type="text" name="diseases" value={ props.diseases } onChange={ e => props.change(e)}/> 
      </FormGroup>
    </Aux>
  );
};

export default Health;
