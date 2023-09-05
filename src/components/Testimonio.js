import React from 'react'
import '../styles/Testimonio.css'

export function Testimonio(props) {
  return (
    <div className='contenedorTestimonio'>
      <img 
      className= 'imgTestimonio' 
      src= {require (`../imgs/fcc-${props.imagen}.png`)}
      alt= 'Foto de Emma'/>
      <div className= 'contenedorTextoTestimonio'>
        <h3 className= 'nombreTestimonio'>{props.nombre} in {props.pais}</h3>
        <h3 className= 'cargoTestimonio'>{props.cargo} at {props.empresa}</h3>
        <p className= 'textoTestimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}

// export default Testimonio;