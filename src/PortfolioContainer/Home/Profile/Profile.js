import React from 'react'; 
import Typical from 'react-typical';
import './Profile.css'
 

export default function Profile(){
   /* OTRA FORMA DE COLOCAR ICONOS
   const prepareText = (text) => {
        const p = document.createElement('p');
        p.innerHTML = text ;
        return p.innerHTML;
            <Typical 
                loop={Infinity}
                steps= {[
                    prepareText('Enthusiastic 👩‍💻 '), 1000,
                     ]}                    
    } */
   
    return (
        <div className='profileContainer'>
            
            <div className='lines'>
            <div className='line-1'>
                <div className='line-inter1'></div>
            </div>
            <div className='line-2'>
                <div className='line-inter2-1'></div>
                <div className='line-inter2-2'></div>
            </div>     
            <div className='line-3'>
                <div className='line-inter3-1'></div>
                <div className='line-inter3-2'></div>
            </div>
                

            </div>
        

            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                    <div className='colz-icon'>     
                        {' '}
                        <a href='https://www.facebook.com/emperatriz.malave'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                
                        {' '}
                        <a href='https://www.instagram.com/emperatrizmalave/'>
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href='www.linkedin.com/in/coromoto-emperatriz-malave-rengel-1b251a151'>
                            <i className='fa fa-linkedin-square'></i>
                        </a>
                        <a href='https://github.com/EmperatrizMalave'>
                            <i className='fa fa-github-square'></i>
                        </a>
                        {' '}
            
                        </div>

                        <div className='profile-details-name'>
                            <span className='primary-text'>{' '} Hola, soy 
                            <span className='highlighted-text'>{' '}EmperMR</span>
                            </span>
                        </div>

                        <div className='profile-details-role'>
                            <span className='primary-text'>
                                {' '}
                                <h1>
                                    {''}
                                  <Typical 
                                    loop={Infinity}
                                    steps= {[
                                        'Entusiasta 👩‍💻 ', 1000,
                                        'Desarrolladora Junior 👩‍💼', 1000,
                                        "Html y Css 💻", 1000,
                                        "React js 📚", 1000,
                                     ]}
                                     />
                                </h1>
                                {' '}
                                     <span className='profile-role-tagline'>Aplicaciones con front end.</span> 
                                    
                            </span>
                            {''}
                            {''}
                            <div className='profile-options'>
                            
                                <button className='btn primary-btn'>{""}Contactame{' '}</button>
                                    <a href='CV Coromoto Malave actualizado.docx' download='CV Coromoto Malave actualizado.docx'> 
                                        <button className='btn highlighted-btn'> Obtener currículum</button>
                                        {' '}
                                    </a>
                                   
                                </div>
                            </div>
                        
                 </div>
            </div>
 
        </div>
        <div className='profile-picture'>
                <div className='profile-picture-background'></div>
                        </div>  
        <div className='figureBase'>
        <div className='figure'>
            </div> 
            </div> 

    </div>
    )
}