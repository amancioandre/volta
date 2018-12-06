import React from 'react';
import Aux from '../../../../hoc/Aux/Aux';

// CSS

const SecundaryInfo = (props) => {
  return(
    <Aux>
      <label>Alias:</label>
      <input type="text" name="alias" value={ props.alias } onChange={ e => props.change(e)}/>    
      <label>Status:</label>
      <select name="status" value={ props.status } onChange={ e => props.change(e)}>
        <option value="Status1 aqui">Status aqui</option>
        <option value="Status2 aqui">Status aqui</option>
        <option value="Status3 aqui">Status aqui</option>
      </select>
      <label>Sex:</label>
      <select name="sex" onChange={ e => props.change(e)}>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
      </select>
      <label>Location of Birth</label>
      <label>City:</label>
      <input type="text" name="city" value={ props.city } onChange={ e => props.change(e)}/>  
      <label>Address:</label>
      <input type="text" name="address" value={ props.address } onChange={ e => props.change(e)}/>  
      <label>State:</label>
      <input type="text" name="state" value={ props.state } onChange={ e => props.change(e)}/>  
      <label>Zip:</label>
      <input type="text" name="zip" value={ props.zip } onChange={ e => props.change(e)}/>      
    </Aux>
  )
}

export default SecundaryInfo;