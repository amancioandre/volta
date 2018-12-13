import React from 'react';

const savePersonEdit = (props) => {
  return (
    <button 
      className="Controller"
      onClick={props.savePerson}>
      <i class="fa fa-floppy-o" aria-hidden="true"></i>
    </button>
  )
}

export default savePersonEdit;