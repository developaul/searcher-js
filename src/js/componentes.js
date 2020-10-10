import '../css/normalize.css';
import '../css/skeleton.css';

import { autos } from './db.js';


// References
const brand             = document.querySelector( '#marca' ),
      year              = document.querySelector( '#year' ),
      minimum           = document.querySelector( '#minimo' ),
      maximum           = document.querySelector( '#maximo' ),
      result            = document.querySelector( '#resultado' ),
      doors             = document.querySelector( '#puertas' ),
      transmission      = document.querySelector( '#transmision' ),
      color             = document.querySelector( '#color' ),
      max               = new Date().getFullYear(),
      min               = max - 10,
      searchData        = {
        brand           : '',
        year            : '',
        minimum         : '',
        maximum         : '',
        doors           : '',
        transmission    : '',
        color           : ''
      };



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

// Llena el objeto con los datos
const fillData = event => {
    const value = event.target.value;
    searchData[ event.target.name ] = ( isNaN( value ) ) ? value : parseInt( value );
    console.log( searchData );
}



// Events
export const startEventListeners = () => {
    document.addEventListener( 'DOMContentLoaded', () => {
        showCars( autos );
        fillSelect();
    });

    brand.addEventListener( 'change', fillData );
    year.addEventListener( 'change', fillData );
    minimum.addEventListener( 'change', fillData );
    maximum.addEventListener( 'change', fillData );
    doors.addEventListener( 'change', fillData );
    transmission.addEventListener( 'change', fillData );
    color.addEventListener( 'change', fillData );

}
