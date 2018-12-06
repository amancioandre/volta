import React from "react";
import Aux from "../../../../hoc/Aux/Aux";

// CSS

const Appearance = props => {
  return (
    <Aux>
      <label>Body type:</label>
      <select name="bodyType" onChange={e => props.change(e)}>
        <option value="skinny">
          Skinny
        </option>
        <option value="athletical">
          Athletical
        </option>
        <option value="fat">
          Fat
        </option>
      </select>
      <label>Eye color:</label>
      <select name="eyeColor" onChange={e => props.change(e)}>
        <option value="brown">
          Brown
        </option>
        <option value="green">
          Green
        </option>
        <option value="blue">
          Blue
        </option>
      </select>
      <label>Skin Color:</label>
      <select name="skinColor" onChange={e => props.change(e)}>
        <option value="black">
          Black
        </option>
        <option value="dark brow">
          Dark Brow
        </option>
        <option value="brown">
          Brown
        </option>
        <option value="yellow">
          Yellow
        </option>
        <option value="caucasian">
          Caucasian
        </option>
      </select>
      <label>Hair Type:</label>
      <input type="text" name="hairType" value={ props.hairType } onChange={ e => props.change(e)}/>  
      <label>Height:</label>
      <input type="number" name="height" value={ props.height } onChange={ e => props.change(e)}/> <span>kg</span>  
      <label>Weight:</label>
      <input type="text" name="weight" value={ props.weight } onChange={ e => props.change(e)}/> <span>m</span> 
      <label>Tattoos:</label>
      <input type="textarea" name="tattoos" value={ props.tattoos } onChange={ e => props.change(e)}/>   
    </Aux>
  );
};

export default Appearance;
