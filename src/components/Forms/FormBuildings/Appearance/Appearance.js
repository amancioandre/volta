import React from "react";
import Aux from "../../../../hoc/Aux/Aux";
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';

// CSS

const Appearance = props => {
  return (
    <FormGroup>
      <Label>Body type:</Label>
      <Input type= "select" name="bodyType" onChange={e => props.change(e)}>
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
      <Input type= "select" name="eyeColor" onChange={e => props.change(e)}>
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
      <Input type= "select" name="skinColor" onChange={e => props.change(e)}>
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
      </Input>
      <Label>Hair Type:</Label>
      <Input type="text" name="hairType" value={ props.hairType } onChange={ e => props.change(e)}/>  
      <Label>Height:</Label>
      <Input type="number" name="height" value={ props.height } onChange={ e => props.change(e)}/> <span>kg</span>  
      <Label>Weight:</Label>
      <Input type="text" name="weight" value={ props.weight } onChange={ e => props.change(e)}/> <span>m</span> 
      <Label>Tattoos:</Label>
      <Input type="textarea" name="tattoos" value={ props.tattoos } onChange={ e => props.change(e)}/>   
    </FormGroup>
  );
};

export default Appearance;
