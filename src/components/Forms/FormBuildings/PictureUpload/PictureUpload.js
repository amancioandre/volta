import React from 'react';
import Aux from '../../../../hoc/Aux/Aux';
import './PictureUploader.css'

const pictureUploader = (props, change) => {
  return(
    <Aux>
      <div className="pictureUploader">
        <label>Choose a picture to send:</label>
        <input type="file" name="picture" onChange={e => props.change(e)}/>
        <button onClick={props.submit}>Send</button>    
      </div>
    </Aux>
  )
}

export default pictureUploader;