import React from 'react';

const saveUser = (props) => {

  return (
    <button 
      className="Controller"
      onClick={props.saveUser}>
      <img src="/img/icons/cloud-computing.png" />
    </button>
  )
}

export default saveUser;