import React, { Component } from 'react';

/* CSS */
import classes from './Backdrop.css';

class Backdrop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    }
  }

  showHandler() {
    this.setState({ show: !this.state.show })
  }

  render() {
    return (
      <div className={classes.Backdrop}></div>
    )
  }
}

export default Backdrop;