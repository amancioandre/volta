import React from 'react';

import './NavigationalItems.css';

const navigationalItems = (props) => {
  return (
    <div className=".NavigationalItems">
      <ul>
        <li>Cadastros</li>
        <li>Desaparecidos</li>
        <li>Mapa</li>
        <li>Mensagens</li>
        <li>Relatórios</li>
        <li>Sobre</li>
        <li>Logout</li>
      </ul>
    </div>
  )
}

export default navigationalItems;