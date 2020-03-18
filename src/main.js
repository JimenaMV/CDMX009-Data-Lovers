import data from './data/worldbank/worldbank.js';
import { getIndicatorsByBra, getIndicatorsByPer, getIndicatorsByChl, getIndicatorsByMex } from './data.js';

// console.log(data)


console.log(getIndicatorsByBra())
console.log(getIndicatorsByPer())
console.log(getIndicatorsByChl())
console.log(getIndicatorsByMex())


//Cambio de pantalla
let firtsScreen = document.getElementById("portada");
let secondScreen = document.getElementById("content");
let mapAmerica = document.getElementById ("mapa-america");


// Funciones para el cambio de pantallas

function segundaPantalla() {
    firtsScreen.style="display:none";
    secondScreen.style="display:block";
}

//Listeners
document.getElementById("logo").addEventListener("click", segundaPantalla);




//Modal, ¿Quiénes somos?

let modal = document.getElementById('miModal');


function openModal (){
    modal.style.display = 'block';
}

function closeModal (){
    modal.style.display = 'none';
}


document.getElementById('aboutbtn').addEventListener('click', openModal);
document.getElementById('close').addEventListener('click', closeModal);



//Acceder al mapa desde un archivo svg externo
function mexCountry () {
    let mapAmericaDoc = mapAmerica.contentDocument; mapAmericaDoc.getElementById().style.fill="red"
}










