import React from "react";
import Aux from "../../../../hoc/Aux/Aux";

// CSS

const UserInfo = props => {
  if (props.signup === true) {
    return (
      <Aux>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={props.username}
          onChange={e => props.change(e)}
        />
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={props.email}
          onChange={e => props.change(e)}
        />
        <label>Organization:</label>
        <input
          type="text"
          name="organization"
          value={props.organization}
          onChange={e => props.change(e)}
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={props.password}
          onChange={e => props.change(e)}
        />
      </Aux>
    );
  } else return (
    <Aux>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={props.username}
          onChange={e => props.change(e)}
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={props.password}
          onChange={e => props.change(e)}
        />
      </Aux>
  )
};

export default UserInfo;
