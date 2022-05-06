import React from 'react'
import './AboutMe.css';

export default function AboutMe() {

  return (
    
    <div className='container' id='AboutMe'>
        <div className='container-text'>
          <h1 className='main-text'>Sobre mi </h1> 
          <h2 className='secondary-text'> Desarrolladora Web </h2>
          {''}
          <h3 className='third-text'>Coromoto Malave</h3>
          <h4 className='personal-review'>Soy una profesional dispuesta a aprender y siempre me ha atraido el área tecnológica por lo cual he estado incursionando en el desarrollo de aplicaciones web lo que me ha llevado a tener habilidades de análisis de requerimientos, investigación, desarrollo de especificaciones, detección y corrección de errores.
          <p></p>Mi experiencia laboral me ha llevado a ser un profesional  en el área de la Contaduría Pública con conocimiento en la elaboración de la información financiera que permita reflejar el resultado, esto con la finalidad de tomar decisiones basadas en resultados reales.
</h4>
        </div>

      <div className='container-design'>
        <div className='display'>
          <div className='camera'></div>
          <div className='camera-light'></div>
          <div className='internal-display'>
            <img src={require("../../assets/Home/fondo.png")}/>
          </div>
        </div>
        <div className='low-casing'></div>
        <div className='monitor-stand'></div>
      </div>
    </div>
  )
};
