import React from 'react'
import './BodyContact.css'

export default function BodyContact() {
  return (
     
    <div id='container'>
      <form className='formulario'>
        <div className='inputGroup name'>
          <label htmlFor='name'>Nombre</label>
          <textarea type='text' id='name' name='name'/>
        </div>

        <div className='inputGroup mail'>
          <label htmlFor='mail'>Correo</label>
          <textarea type='text' id='mail' name='mail'/>
        </div>

        <div className='inputGroup message'>
          <label htmlFor='message'>Mensaje</label>
          <textarea id='message' name='message'/>
        </div>
        <button className='boton' type='submit'>Enviar</button>
      </form>
      <div className='cardContainer'>
      <div className='card'>
        <h1 className='title'>Contacto</h1>
        <h2 className='text'>emperatriz_593@gmail.com</h2>
        <h2 className='phone'>+33 47258955</h2>
      <div className='image'>
      <img src={require('../../../assets/Home/contacto.png')}/>
      </div>
    </div>
      </div>
    </div>
  )
}
