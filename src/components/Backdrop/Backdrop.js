import React, { Component } from 'react';

/* CSS */
import './Backdrop.css';

class Backdrop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    }
  }

  showHandler() {
    this.setState({ show: false })
  }

  render() {
    return (
      <div 
        className="Backdrop"
        style={{
          display: this.props.show ? 'block' : 'none'
        }}
        onClick={this.props.showBackdrop || this.props.clicked}>
      </div>
    )
  }
}

export default Backdrop;