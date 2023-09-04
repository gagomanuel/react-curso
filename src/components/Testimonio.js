import React from 'react'
import '../styles/Testimonio.css'

export function Testimonio() {
  return (
    <div className='contenedorTestimonio'>
      <img 
      className= 'imgTestimonio' 
      src= {require ('../imgs/fcc-emma.png')}
      alt= 'Foto de Emma'/>
      <div className= 'contenedorTextoTestimonio'>
        <h3 className= 'nombreTestimonio'>Emma Bostian in Sweden</h3>
        <h3 className= 'cargoTestimonio'>Software Engineer at Spotify</h3>
        <p className= 'textoTestimonio'>"I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."</p>
      </div>
    </div>
  );
}

// export default Testimonio;