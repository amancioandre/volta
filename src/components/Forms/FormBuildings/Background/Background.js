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
        <option value="PhD">
          PhD
        </option>
        <option value="Unknown">
          Unknown
        </option>
      </Input>
      <Label for='maritalStatus'>Marital Status:</Label>
      <Input type='select' id = 'maritalStatus' name="maritalStatus" onChange={e => props.change(e)}>
        <option value="Maried">
          Maried
        </option>
        <option value="Single">
          Single
        </option>
        <option value="Widowed">
          Widowed
        </option>
      </Input>
    </FormGroup>
  );
};

export default Background;
