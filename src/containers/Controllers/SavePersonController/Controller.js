import React from 'react';
import Axios from 'axios';

const savePersonEdit = (props) => {

    
    return (
      <button 
        className="Controller"
        onClick={props.savePerson}>
        <img src="/img/icons/cloud-computing.png" />
      </button>
    )
}


export default savePersonEdit;