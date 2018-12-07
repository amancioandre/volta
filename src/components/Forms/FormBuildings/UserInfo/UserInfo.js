import React from "react";
import Aux from "../../../../hoc/Aux/Aux";
import { FormGroup, Label, Input, FormFeedback } from "reactstrap";

// CSS

const UserInfo = props => {
  if (props.signup === true) {
    return (
      <Aux>
        <FormGroup>
          <Label>Username:</Label>
          <Input
            type="text"
            name="username"
            value={props.username}
            onChange={e => props.change(e)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Email:</Label>
          <Input
            type="text"
            name="email"
            value={props.email}
            onChange={e => props.change(e)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Organization:</Label>
          <Input
            type="text"
            name="organization"
            value={props.organization}
            onChange={e => props.change(e)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Password:</Label>
          <Input
            type="password"
            name="password"
            value={props.password}
            onChange={e => props.change(e)}
          />
        </FormGroup>
        </Aux>
        )
         } else return (
           <Aux>
            <FormGroup>
              <Label>Username:</Label>
              <Input
                type="text"
                name="username"
                value={props.username}
                onChange={e => props.change(e)}
              />
            </FormGroup>
            <FormGroup>
              <Label>Password:</Label>
              <Input
                type="password"
                name="password"
                value={props.password}
                onChange={e => props.change(e)}
              />
            </FormGroup>
          </Aux>
    );
  }

export default UserInfo;
