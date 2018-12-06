import React, { Component } from 'react';

class Person extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    }
  }

  
  /* Lifecycle Methods */
  render() {

    return (
      <div className="Person">
        <div className="">
          <img src='' alt='Person Foto'/>
        </div>
        <div className="info">
          <div className="main-info">
            
          </div>
        </div>
      </div>
    )
  }
}

export default Person;