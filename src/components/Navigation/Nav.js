import React from 'react';

import './Nav.css'

const nav = (props) => {
  return (
    <nav className="Nav">
      {/* <Logo /> */}
      {/* <NavigationItems /> */}
      <img src="/img/logo_placeholder.png" />
      <div>
        <p>Hello, Andre!</p>
        <img src="/img/icons/menu.png" />
      </div>      
    </nav>
  )
}

export default nav;