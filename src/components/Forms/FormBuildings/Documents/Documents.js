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

const Documents = props => {
  return (
    <Aux>
      <FormGroup>
        <Label>Registry:</Label>
        <Input
          type="text"
          name="registry"
          value={props.registry}
          onChange={e => props.change(e)}
        />
      </FormGroup>
      <FormGroup>
        <Label>Economic Registry:</Label>
        <Input
          type="text"
          name="economicReg"
          value={props.economicReg}
          onChange={e => props.change(e)}
        />
      </FormGroup>
      <FormGroup>
        <Label>Driver Lisense:</Label>
        <Input
          type="text"
          name="driverLisense"
          value={props.driverLisense}
          onChange={e => props.change(e)}
        />
      </FormGroup>
      <FormGroup>
        <Label>Birth Certificate:</Label>
        <Input
          type="text"
          name="birthCertificate"
          value={props.birthCertificate}
          onChange={e => props.change(e)}
        />
      </FormGroup>
      <FormGroup>
        <Label>Professional License:</Label>
        <Input
          type="text"
          name="professionalLicense"
          value={props.professionalLicense}
          onChange={e => props.change(e)}
        />
      </FormGroup>
    </Aux>
  );
};

export default Documents;
