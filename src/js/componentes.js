import '../css/normalize.css';
import '../css/skeleton.css';

import { autos } from './db.js';


// References
const year      = document.querySelector( '#year' ),
      result    = document.querySelector( '#resultado' ),
      max       = new Date().getFullYear(),
      min       = max - 10;



// Functions
// Llena el selector de year con opciones de los últimos 10 años
const fillSelect = () => {
    for( let i = max; i >= min; i-- ) {
        const option = document.createElement( 'option' );
        option.textContent = i;
        option.value = i;
        year.appendChild( option );
    }
}

// Limpia el HTML de los resultados
const clearHTML = () => {
    while( result.firstChild ) { result.removeChild( result.firstChild ); }
}

// Muestra los autos en pantalla
const showCars = autos => {
    clearHTML();

    autos.forEach( ( { marca : brand, modelo : model, year, precio : price, puertas : doors, color, transmision : transmission } ) => {
        const carHTML = document.createElement( 'p' );
        carHTML.textContent = `${ brand } ${ model } - ${ year } - ${ doors } Puertas - Transmisión: ${ transmission } - Precio: ${ price } - Color: ${ color }`;
        result.appendChild( carHTML );
    });
}



// Events
export const startEventListeners = () => {
    document.addEventListener( 'DOMContentLoaded', () => {
        showCars( autos );
        fillSelect();
    });
}
