import React from "react";
import Aux from "../../../../hoc/Aux/Aux";

// CSS

const Documents = props => {
  return (
    <Aux>
      <label>Registry:</label>
      <input type="text" name="registry" value={ props.registry } onChange={ e => props.change(e)}/>  
      <label>Economic Registry:</label>
      <input type="text" name="economicReg" value={ props.economicReg } onChange={ e => props.change(e)}/> 
      <label>Driver Lisense:</label>
      <input type="text" name="driverLisense" value={ props.driverLisense } onChange={ e => props.change(e)}/> 
      <label>Birth Certificate:</label>
      <input type="text" name="birthCertificate" value={ props.birthCertificate } onChange={ e => props.change(e)}/> 
      <label>Professional License:</label>
      <input type="text" name="professionalLicense" value={ props.professionalLicense } onChange={ e => props.change(e)}/> 
    </Aux>
  );
};

export default Documents;
