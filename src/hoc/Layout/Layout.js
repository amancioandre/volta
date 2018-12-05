import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import Nav from '../../components/Navigation/Nav';

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    }
  }

  render() {
    return (
      <Aux>
        <Nav />
        Nav, Menu, Backdrop
        <main>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout;