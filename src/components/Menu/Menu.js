import React, { Component } from 'react';
import NavigationalItems from '../NavigationalItems/NavigationaItems';

import './Menu.css'

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    }
  }

  render() {

    return (
      <div 
        className="Menu"
        style={{
          transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)'
        }}>
        <NavigationalItems />
      </div>
    )
  }
}

export default Menu;