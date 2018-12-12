import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const about = (props) => {

  return (
    <div className='About'>
      <div className='main-info'>
        <h1>O que é o <span>Volta</span>?</h1>
        <p>O volta nasceu da inspiração entre o encontro de Raimundo, "o Condicionado",
           e a jovem Shalla Monteiro.</p>
           <iframe className="video" src="https://www.youtube.com/embed/CqWGhooSqtk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h5>Shalla, nós também sentimos que precisamos fazer algo...</h5>
        <p><a href="#secondary-info">Mais...</a></p>
      </div>
      <div id='secondary-info'>
        <div>
          <h2>Como funciona?</h2>
          <p>A tecnologia em serviço do reencontro de familiares desaparecidos.</p>
          <p>  
            Através do cadastro de moradores de rua podemos mapear suas características,
            sua localização e demais informações que auxiliam na inferência e pesquisa em
            bancos de dados de pessoas desaparecidas. Acreditamos que as probabilidades
            de localizar seus familiares perdidos é maior entre esta população.
          </p>
        </div>
        <div>
          <h2>Como ajudar?</h2>
          <p>Se você é Agente Social participante de uma Organização ou Instituição,
            basta solicitar o acesso e cadastrar os moradores que acompanha e também
            aqueles que ainda não forem censeados.
          </p>
          <p>Se você é uma pessoa altruísta, você também pode ajudar. No futuro lançaremos
            uma feature de apontamento. Esta feature visa apontar a localização de dormitório
            de moradores de rua. Com este dado os Agentes Sociais podem traçar estratégias de
            auxílio e censeamento dos moradores.
          </p>
        </div>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  )
}

export default about;