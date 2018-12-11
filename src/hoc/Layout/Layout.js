import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import Nav from '../../components/Navigation/Nav';
import Menu from '../../components/Menu/Menu';
import Backdrop from '../../components/Backdrop/Backdrop';

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
          showMenu={this.show} user = {this.props.user} />
        <Menu
          showMenu = {this.show}
          show = {this.state.show}
          user = {this.props.user} />
        <Backdrop
          show={this.state.show}
          showBackdrop={this.show} /> 

        <main>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout;