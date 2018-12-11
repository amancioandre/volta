import React, { Component } from 'react';

import NavigationalItems from '../NavigationalItems/NavigationaItems';

import './Nav.css'

class Nav extends Component {
  constructor(props) {
    super(props) 

  }



  render() {
    return (
      <nav className="Nav">
        <img src="/img/logo_placeholder.png" />
        <div>
          <img src="/img/icons/menu.png" onClick={this.props.showMenu} />
        </div>      
      </nav>
    )
  }
} 

export default Nav;