import React from 'react';
import { Link } from 'react-router-dom';
import AuthServices from '../../auth/auth-services';
import './NavigationalItems.css';

const service = new AuthServices();



const navigationalItems = (props) => {
 
  const clickHandler = () => {
    service.logout();
    props.resetState();
  };

  if(props.user){
    return (
      <div className="NavigationalItems">
        <ul>
          <li>
            <Link to='/dashboard/people'>
              <i class="fa fa-address-book-o" aria-hidden="true"></i> My registers
            </Link>
          </li>
          <li>
            <Link to='/dashboard/missing'>
              <i class="fa fa-users" aria-hidden="true"></i> Missing
            </Link>
          </li>
          <li>
            <Link to='/dashboard/profile'>
              <i class="fa fa-address-card" aria-hidden="true"></i> {props.user.name.firstName}'s Profile
            </Link>
          </li>

          <li>
            <Link to='/about'>
            <i class="fa fa-sticky-note-o" aria-hidden="true"></i> About
            </Link>
          </li>
          <li>
            <Link to='/' onClick={clickHandler}>
              <i class="fa fa-sign-out" aria-hidden="true"></i> Logout 
            </Link>
          </li>
        </ul>
      </div>
    )
  } else {
    return (
    <div className="NavigationalItems">
    <ul>
      <li>
        <Link to='/login'>
          <i class="fa fa-sign-in" aria-hidden="true"></i> Login
        </Link>
      </li>
     
      <li>
        <Link to='/signup'>
          <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Signup
        </Link>
      </li>
      {/* <li>About</li> */}
    </ul>
  </div>)
  }
}

export default navigationalItems;