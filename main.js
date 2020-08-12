"use strict";
// importar en dataCountries el data **ya filtrado** de data.js
import dataCountries from "./data.js";

// import data from './data/worldbank/worldbank.js';
// import { getIndicatorsByBra, getIndicatorsByPer, getIndicatorsByChl, getIndicatorsByMex } from './data.js';

// console.log(data)


// console.log(getIndicatorsByBra())
// console.log(getIndicatorsByPer())
// console.log(getIndicatorsByChl())
// console.log(getIndicatorsByMex())


// Cambio de pantalla
let firtsScreen = document.getElementById("portada");
let secondScreen = document.getElementById("content");
let mapAmerica = document.getElementById ("mapa-america");



// ### inicia código para crear y mainipular las screens de países ###

// Object para guardar todas las screens (sections) de países
// debe quedar {"MEX": section, "PER": section, etc}
let countriesScreens = {};

// div en la que se insertará la screen (section) del país que corresponda
const countryBody = document.querySelector("#modal-countries-body");

// función para "llenar" countryBody con el país que se pida
// con esta función se llamará a las otras definidas más abajo
function showCountryIndicators(countryCode) {
    // cambiar el contenido del h2 de la modal
    document.querySelector("#modal-country-title").textContent = dataCountries[countryCode].name;
    // borra el contenido previo de countryBody
    countryBody.innerHTML = "";
    // llenar countryBody son la screen (section) del país
    countryBody.appendChild(getCountryScreen(countryCode));

    // mostrar la modal (ya llena con la screen del país)
    showModalCountries();
}

// jalar la screen (section) de un país y, si no existe, crearla y asignarla
function getCountryScreen(countryCode) {
    if (!countriesScreens.hasOwnProperty(countryCode)) {
        countriesScreens[countryCode] = makeCountryScreen(countryCode);
    }

    return countriesScreens[countryCode];
}

// crear la section que contenga todos los datos (indicadores con sus gráficas) de un país
function makeCountryScreen(countryCode) {
    // Tomar los datos de el país en cuestión
    let countryData = dataCountries[countryCode];
    // section que contendrá la screen del país
    let countryScreen = document.createElement("section");
    let countryScreenID = "section-" + countryCode.toLowerCase();
    countryScreen.id = countryScreenID;
    countryScreen.className = "section-country"

    // Crear una section por cada indicador y append it al país
    countryData.indicatorsFiltered.forEach(indicator => {
        // Crear section por cada indicador
        let indicatorSection = document.createElement("section");
        // ID de la section = id del padre más el código del indicator
        // en minúsculas y reemplazando puntos por diagonales
        let indicatorSectionID = countryScreenID + "-" +
            indicator.indicatorCode.toLowerCase().replace(/\./g, "-");
        indicatorSection.id = indicatorSectionID;
        indicatorSection.className = "country-indicator";
        // iniciar la section del indicador con el name en h3
        indicatorSection.innerHTML = `
        <h3>${indicator.indicatorName}</h3>
        `;

        // Crear el canvas para el chart para el indicador respectivo
        // y append it a la section del indicador
        let indicatorGraph = document.createElement("canvas");
        indicatorGraph.id = indicatorSectionID + "-graph";
        indicatorGraph.height = 200;
        indicatorGraph.width = 400;
        // chart.js pide un array para las labels (la posición debe corresponder con la de los valores)
        let yearsForChart = Object.keys(indicator.filteredData);
        // chart.js pide un array para las labels (la posición debe corresponder con la de las labels)
        let percentagesForChart = Object.values(indicator.filteredData);
        indicatorSection.appendChild(indicatorGraph);

        // create chart with chart.js
        // la mayoría de esto fue copiado de su página
        var chart = new Chart(indicatorGraph, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                // el array con las labels
                labels: yearsForChart,
                datasets: [{
                    // El título que se muestra en cada gráfica
                    label: `${indicator.indicatorName} (${countryData.name})`,
                    // Colores de la línea y el relleno de las gráficas
                    backgroundColor: 'hsla(250, 40%, 60%, 0.2)',
                    borderColor: 'hsla(250, 50%, 40%, 1)',
                    // El array con los valores
                    data: percentagesForChart
                }]
            },

            // Configuration options go here
            options: {
                legend: {
                    labels: {
                        // This more specific font property overrides the global property
                        fontColor: 'hsl(0, 0%, 60%)'
                    }
                },
                scales: {
                    xAxes: [{
                        ticks: {
                            // color de fuente del eje x
                            fontColor: 'hsl(0, 0%, 35%)'
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            // color de fuente del eje y
                            fontColor: 'hsl(0, 0%, 35%)'
                        }
                    }]
                }
            }
        });

        // agrecar la section con el indicador y su gráfica a la sectoin del país
        countryScreen.appendChild(indicatorSection);
    });

    // regresar la section con todos los indicadores
    return countryScreen;
}

// mostrar la modal de países
function showModalCountries() {
    modalCountries.style.display = "block";
}
// ocultar la modal de países
function hideModalCountries() {
    modalCountries.style.display = "none";
}

// Cerrar la modal con el tache
document.querySelector("#countries-modal-close").addEventListener("click", hideModalCountries);

// Cerrar la modal de países si se da click "afuera" de ella
let modalCountries = document.querySelector("#modal-countries");
modalCountries.addEventListener("click", function (event) {
    if (event.target.id == "modal-countries" || event.target.id == "modal-countries-wrapper") {
        hideModalCountries();
    }
});

// menuShow = cada a del menú de países (con la clase show-indicators)
const menuShow = document.querySelectorAll(".show-indicators");
// a cada uno se le asigna un eventListener para su país
// el índice del país está en el atributo data-country
menuShow.forEach(function(menuElement){
    menuElement.addEventListener("click", function(event){
        event.preventDefault();
        const countryCode = event.target.getAttribute("data-country");
        showCountryIndicators(countryCode);
    })
});

// ### termina el código para crear y mainipular las screens de países ###

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

// cerrar el modal si se hace click en el espacio vacío
document.getElementById("miModal").addEventListener("click", function(event) {
    if (event.target.id == "miModal" || event.target == document.querySelector("#miModal > div")) {
        closeModal();
    }
});




// //Mapa con create element
let svg = document.createElement("svg");
svg.innerHTML = "src/img/mapa-america1.svg"

let sectionMap = document.querySelector('.wrapper-map')
// wrapper-map = appendChild(svg)


//export default svg;
async function loadmap(){
    let mapResponse = await fetch ("img/mapa-america1.svg");
    let mapResponseText = await mapResponse.text();
    document.querySelector('#wrapper-map-america').innerHTML = mapResponseText;
}



// Se ejecuta esta funcion cuando se carga el documento
document.addEventListener('DOMContentLoaded', function(){
    loadmap();
},false);