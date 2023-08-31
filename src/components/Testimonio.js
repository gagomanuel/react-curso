import React from 'react'

export function Testimonio() {
  return (
    <div className='contenedor-testimonio'>
      <img 
      className= 'img-testimonio' 
      src= {require ('../imgs/fcc-emma.png')}
      alt= 'Foto de Emma'/>
      <div className= 'contenedor-texto-testimonio'>
        <h3 className= 'nombre-testimonio'>Emma Bostian in Sweden</h3>
        <h3 className= 'cargo-testimonio'>Software Engineer at Spotify</h3>
        <p className= 'testo-testimonio'>I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."</p>
      </div>
    </div>
  );
}

// export default Testimonio;