import React, { Component } from 'react';
import PictureUploader from '../../../components/Forms/FormBuildings/PictureUpload/PictureUpload';
import Aux from '../../../hoc/Aux/Aux';

import Service from '../../../crud/crud-services';

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
  }
  
  show() {
    this.setState({show: !this.state.show})
  }

  render() {
    return (
      
      <Aux>
        { this.state.show ? <PictureUploader change={this.handleChange}/> : null}
        <button
          onClick={() => {
            if (this.state.show) {
              this.handleSubmit();
              this.show();
            } else {
              this.show();
            }
          }}
          className="Controller">
          <img src="/img/icons/photo-camera.png" />
        </button>
      </Aux>
    )
  }
}

export default SendPicture;