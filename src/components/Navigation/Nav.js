import React, { Component } from 'react';
import './Nav.css'

class Nav extends Component {
  constructor(props) {
    super(props) 

  }

  render() {
    return (
      <nav className="Nav">
        <img src="/img/logo_placeholder.png" />
        <div onClick={this.props.showMenu}>
          <i class="fa fa-bars" aria-hidden="true"></i>
        </div>      
      </nav>
    )
  }
} 

export default Nav;