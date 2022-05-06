import React from 'react';
import './Menu.css';

export default function Menu() {
  return (
    <div className='menuContainer'>
      <h1>Portafolio</h1>
        <nav> 
            <ul>
                <li><a href='#homeMenu'>Inicio</a></li>
                <li><a href='#AboutMe'>Sobre mi</a></li>
                <li><a href='#ContactMe'>Contacto</a></li>           
            </ul>
        </nav>
    </div>
  )
}
