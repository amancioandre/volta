import React from 'react';
import { Link } from 'react-router-dom';

import './NavigationalItems.css';

const navigationalItems = (props) => {
  return (
    <div className="NavigationalItems">
      <ul>
        <li>
          <Link to='/dashboard'>
            <img src="/img/icons/dashboard.png" /> Dashboard
          </Link>
        </li>
        <li>
          <Link to='/dashboard'>
            <img src="/img/icons/registers.png" /> My registers
          </Link>
        </li>
        <li>
          <Link to=''>
            <img src="/img/icons/missing.png" /> Missing
          </Link>
        </li>
        <li>
          <Link to=''>
            <img src="/img/icons/map.png" /> Map
          </Link>
        </li>

        <li>About</li>
        <li>Logout</li>
      </ul>
    </div>
  )
}

export default navigationalItems;