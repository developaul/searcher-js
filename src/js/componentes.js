import '../css/normalize.css';
import '../css/skeleton.css';

import { autos } from './db.js';


// References
const year  = document.querySelector( '#year' ),
      max   = new Date().getFullYear(),
      min   = max - 10;



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



// Events
export const startEventListeners = () => {
    document.addEventListener( 'DOMContentLoaded', () => {

        fillSelect();
    });
}
