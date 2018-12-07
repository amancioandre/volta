import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import Nav from '../../components/Navigation/Nav';
import Menu from '../../components/Menu/Menu';

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    }
    this.show = this.show.bind(this);
  }

  show() {
    this.setState({ show: !this.state.show })
  }

  render() {
    return (
      <Aux>
        <Nav 
          showMenu={this.show}/>
        <Menu 
          showMenu={this.state.show}/>
        Nav, Menu, Backdrop
        <main>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout;