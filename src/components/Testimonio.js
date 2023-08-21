import React from 'react'

function Testimonio() {
  return (
    <div className='contenedor-testimonio'>
      <img 
      className= 'img-testimonio' 
      src= {require ('../imgs/fcc-emma.png')}
      alt= 'Foto de Emma'/>
      <div className= 'contenedor-texto-testimonio'>
        <h3 className= 'nombre-testimonio'>Emma Bostian in Sweden</h3>
        <h3 className= 'cargo-testimonio'>Software Engineer at Spotify</h3>
        <p className= 'testo-testimonio'>I've always struggled with learning JavaScript..."</p>
      </div>
    </div>
  );
}

export default Testimonio;