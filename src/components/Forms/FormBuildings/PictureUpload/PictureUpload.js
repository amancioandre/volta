import React from 'react';
import Aux from '../../../../hoc/Aux/Aux';
import './PictureUploader.css'

const pictureUploader = (props, change) => {
  return(
    <Aux>
      <div className="pictureUploader">
        <label>Picture:</label>
        <input type="file" name="picture" onChange={e => props.change(e)}/>    
      </div>
      <div id="arrow"></div>
    </Aux>
  )
}

export default pictureUploader;