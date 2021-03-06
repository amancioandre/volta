import React, { Component } from 'react';
import PictureUploader from '../../../components/Forms/FormBuildings/PictureUpload/PictureUpload';
import Aux from '../../../hoc/Aux/Aux';

import Service from '../../../crud/crud-services';
import Backdrop from '../../../components/Backdrop/Backdrop';

class SendPicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      file: null,
    }
    this.service = new Service;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.show = this.show.bind(this)
  }

  handleChange(event) {
    this.setState({
      file: event.target.files[0],
    })
  }

  handleSubmit() {
    this.service.addPicture(this.props.personId, this.state.file)
      .then(response => {
        this.props.refresh();
        this.show();
      })
  }
  
  show() {
    this.setState({show: !this.state.show})
  }

  render() {
    return (
      <Aux>
        <Backdrop 
          show={this.state.show}
          clicked={this.show} />
        { this.state.show ? <PictureUploader 
                              change={this.handleChange}
                              submit={this.handleSubmit} 
                              show={this.show}/> : null}
        <button
          onClick={() => {
            if (this.state.show && this.state.file !== null) {
              this.handleSubmit();
              this.show()
            } else if (this.state.show) {
              this.show();
            } else {
              this.show();
            }
          }}
          className="Controller">
          <i className="fa fa-camera-retro" aria-hidden="true"></i>
        </button>
      </Aux>
    )
  }
}

export default SendPicture;