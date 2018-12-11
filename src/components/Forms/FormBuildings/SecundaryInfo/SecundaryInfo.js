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

// CSS

const SecundaryInfo = props => {
  return (
    <Aux>
      <FormGroup>
        <Label>Alias:</Label>
        <Input
          type="text"
          name="alias"
          value={props.alias}
          onChange={e => props.change(e)}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="status">Select Multiple</Label>
        <Input
          type="select"
          value={props.status}
          onChange={e => props.change(e)}
          name="status"
          id="status"
          required
        >
          <option value="Status1 aqui">Status aqui</option>
          <option value="Status2 aqui">Status aqui</option>
          <option value="Status3 aqui">Status aqui</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="sex">Sex:</Label>
        <Input
          type="select"
          id="sex"
          name="sex"
          onChange={e => props.change(e)}
          required
        >
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label>Location of Birth</Label>
      </FormGroup>
      <FormGroup>
        <Label>City:</Label>
        <Input
          type="text"
          name="city"
          value={props.city}
          onChange={e => props.change(e)}
        />
      </FormGroup>
      <FormGroup>
        <Label>Address:</Label>
        <Input
          type="text"
          name="address"
          value={props.address}
          onChange={e => props.change(e)}
        />
      </FormGroup>
      <FormGroup>
        <Label>State:</Label>
        <Input
          type="text"
          name="state"
          value={props.addressState}
          onChange={e => props.change(e)}
        />
      </FormGroup>
      <FormGroup>
        <Label>Zip:</Label>
        <Input
          type="text"
          name="zip"
          value={props.zip}
          onChange={e => props.change(e)}
        />
      </FormGroup>
    </Aux>
  );
};

export default SecundaryInfo;
