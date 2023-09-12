// import React from 'react'
import '../styles/Testimonio.css'

export function Testimonio(props) {
  return (
    <div className='contenedorTestimonio'>
      <img 
      className= 'imgTestimonio'
      src= {require (`../imgs/fcc-${props.imagen}.png`)}
      alt= {("Foto de " + props.nombre.split(' ')[0])} />
      <div className= 'contenedorTextoTestimonio'>
        <p className= 'nombreTestimonio'>
          <strong>{props.nombre}</strong> in {props.pais}
        </p>
        <p className= 'cargoTestimonio'>
          {props.cargo} at <strong>{props.empresa}</strong>
          </p>
        <p className= 'textoTestimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}

// export default Testimonio;