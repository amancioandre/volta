import React from 'react';

import classes from './Landing.css';

const landing = (props) => {
  return (
    <div className="Landing">
      <div>
        <h1>volta</h1>
      </div>
      {/* <div>
        <p> O volta é um jeito de ajudar as pessoas carentes moradoras de rua e
            desaparecidos a recuperar seus laços familiares.
        </p>
        <p>
          Se você é agente social, se cadastre para ter acesso ao banco de dados de
          moradores e desaparecidos. Você também poderá cadastrar a população que acompanha,
          sua ajuda é essencial!
        </p>
      </div> */}
      <div>
        <button>Sign in</button>
        <button>Login</button>
      </div>
      <p id="about">sobre nós</p>
    </div>
  )
}

export default landing;