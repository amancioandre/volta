import React from "react";
import Aux from "../../../../hoc/Aux/Aux";
import { FormGroup, Label, Input } from 'reactstrap';

// CSS

const Appearance = props => {
  return (
    <FormGroup>
      <Label>Body type:</Label>
      <Input type= "select" required name="bodyType" onChange={e => props.change(e)}>
        <option value="skinny">
          Skinny
        </option>
        <option value="athletical">
          Athletical
        </option>
        <option value="fat">
          Fat
        </option>
      </Input>
      <Label>Eye color:</Label>
      <Input type= "select" required name="eyeColor" onChange={e => props.change(e)}>
        <option value="brown">
          Brown
        </option>
        <option value="green">
          Green
        </option>
        <option value="blue">
          Blue
        </option>
      </Input>
      <Label>Skin Color:</Label>
      <Input type= "select" required name="skinColor" onChange={e => props.change(e)}>
        <option value="Black">
          Black
        </option>
        <option value="Bark Brow">
          Dark Brow
        </option>
        <option value="Brown">
          Brown
        </option>
        <option value="Yellow">
          Yellow
        </option>
        <option value="Caucasian">
          Caucasian
        </option>
      </Input>
      <Label>Hair Type:</Label>
      <Input type="text" name="hairType" required value={ props.hairType } onChange={ e => props.change(e)}/>  
      <Label>Height:</Label>
      <Input type="number" name="height" required value={ props.height } onChange={ e => props.change(e)}/> <span>kg</span>  
      <Label>Weight:</Label>
      <Input type="text" name="weight" required value={ props.weight } onChange={ e => props.change(e)}/> <span>m</span> 
      <Label>Tattoos:</Label>
      <Input type="textarea" name="tattoos" required value={ props.tattoos } onChange={ e => props.change(e)}/>   
    </FormGroup>
  );
};

export default Appearance;
