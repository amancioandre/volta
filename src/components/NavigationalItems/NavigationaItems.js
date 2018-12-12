import React from 'react';
import { Link } from 'react-router-dom';
import AuthServices from '../../auth/auth-services';
import './NavigationalItems.css';

const service = new AuthServices();



const navigationalItems = (props) => {
 
  const clickHandler = () => {
    console.log('@@@@');
    service.logout();
    props.resetState();
  };

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
          <li>
            <Link to='/' onClick={clickHandler}>
              Logout 
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
          <img src="/img/icons/home.png" /> Login
        </Link>
      </li>
     
      <li>
        <Link to='/signup'>
          <img src="/img/icons/pen.png" /> Signup
        </Link>
      </li>
      {/* <li>About</li> */}
    </ul>
  </div>)
  }
}

export default navigationalItems;