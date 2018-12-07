import React from "react";
import Aux from "../../../../hoc/Aux/Aux";
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';

// CSS

const Background = props => {
  return (
    <FormGroup>
      <Label>Profession:</Label>
      <Input
        type="text"
        name="profession"
        value={props.profession}
        onChange={e => props.change(e)}
      />
      <Label for= "degree">Degree:</Label>
      <Input type='select' id = 'degree' name="degree" onChange={e => props.change(e)}>
        <option value="Non-alphabetized">
          Non-alphabetized
        </option>
        <option value="Basic">
          Basic
        </option>
        <option value="College">
          College
        </option>
        <option value="Master">
          Master
        </option>
      </Input>
      <Label for='maritalStatus'>Marital Status:</Label>
      <Input type='select' id = 'maritalStatus' name="maritalStatus" onChange={e => props.change(e)}>
        <option value="maried">
          Maried
        </option>
        <option value="single">
          Single
        </option>
        <option value="widwed">
          Widwed
        </option>
      </Input>
    </FormGroup>
  );
};

export default Background;
