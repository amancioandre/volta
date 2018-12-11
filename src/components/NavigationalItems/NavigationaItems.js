import React from 'react';
import { Link } from 'react-router-dom';

import './NavigationalItems.css';

const navigationalItems = (props) => {
  console.log('@@@@@',props.user);
  if(props.user){
    return (
      <div className="NavigationalItems">
        <ul>
          <li>
            <Link to='/dashboard/people'>
              <img src="/img/icons/registers.png" /> My registers
            </Link>
          </li>
          <li>
            <Link to='/dashboard/missing'>
              <img src="/img/icons/missing.png" /> Missing
            </Link>
          </li>
          <li>
            <Link to='/dashboard/profile'>
              <img src="/img/icons/profile.png" />{props.user.name.firstName}'s Profile
            </Link>
          </li>

          <li>About</li>
          <li>Logout</li>
        </ul>
      </div>
    )
  } else {
    return (
    <div className="NavigationalItems">
    <ul>
      <li>
        <Link to='/login'>
          Login
        </Link>
      </li>
     
      <li>
        <Link to='/signup'>
          Signup
        </Link>
      </li>
      <li>About</li>
    </ul>
  </div>)
  }
}

export default navigationalItems;