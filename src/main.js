"use strict";
// importar el objeto filtrado de data.js
import dataCountries from "./data.js";

// import data from './data/worldbank/worldbank.js';
// import { getIndicatorsByBra, getIndicatorsByPer, getIndicatorsByChl, getIndicatorsByMex } from './data.js';

// console.log(data)


// console.log(getIndicatorsByBra())
// console.log(getIndicatorsByPer())
// console.log(getIndicatorsByChl())
// console.log(getIndicatorsByMex())


//Cambio de pantalla
let firtsScreen = document.getElementById("portada");
let secondScreen = document.getElementById("content");
let mapAmerica = document.getElementById ("mapa-america");


/**
 * Objecto para guardar todas las screens de países
 */
let countriesScreens = {};

function makeCountryScreen(countryCode) {
    // section que contendrá la screen del país
    let countryData = dataCountries[countryCode];
    let countryScreen = document.createElement("section");
    let countryScreenID = "section-" + countryData.code.toLowerCase();
    countryScreen.id = countryScreenID;
    countryScreen.className = "section-country"

    // Crear una section por cada indicador y append it al país
    countryData.indicatorsFiltered.forEach(indicator => {
        let indicatorSection = document.createElement("section");
        let indicatorSectionID = countryScreenID + "-" +
            indicator.indicatorCode.toLowerCase().replace(/\./g, "-");
        indicatorSection.id = indicatorSectionID;
        indicatorSection.className = "country-indicator";
        indicatorSection.innerHTML = `
        <h3>${indicator.indicatorName}</h3>
        `;

        // Crear el canvas para el chart para el indicador respectivo
        // y append it a la section del indicador
        let indicatorGraph = document.createElement("canvas");
        indicatorGraph.id = indicatorSectionID + "-graph";
        indicatorGraph.height = 200;
        indicatorGraph.width = 400;
        let yearsForChart = Object.keys(indicator.filteredData);
        let percentagesForChart = Object.values(indicator.filteredData);
        indicatorSection.appendChild(indicatorGraph);

        // create chart with chart.js
        var chart = new Chart(indicatorGraph, {
            // The type of chart we want to create
            type: 'line',
        
            // The data for our dataset
            data: {
                labels: yearsForChart,
                datasets: [{
                    label: `${indicator.indicatorName} (${countryData.name})`,
                    backgroundColor: 'hsla(250, 40%, 60%, 0.2)',
                    borderColor: 'hsla(250, 50%, 40%, 1)',
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
                            fontColor: 'hsl(0, 0%, 35%)'
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            fontColor: 'hsl(0, 0%, 35%)'
                        }
                    }]
                }
            }
        });

        countryScreen.appendChild(indicatorSection);
    });
    
    return countryScreen;
}

function getCountryScreen(countryCode) {
    if (!countriesScreens.hasOwnProperty(countryCode)) {
        countriesScreens[countryCode] = makeCountryScreen(countryCode);
    }

    return countriesScreens[countryCode];
}

const countryContent = document.querySelector("#modal-countries-body");
function showCountryIndicators(countryCode) {
    document.querySelector("#modal-country-title").textContent = dataCountries[countryCode].name;
    countryContent.innerHTML = "";
    countryContent.appendChild(getCountryScreen(countryCode));
    showModalCountries();
}


function showModalCountries() {
    modalCountries.style.display = "block";
}
function hideModalCountries() {
    modalCountries.style.display = "none";
}

document.querySelector("#countries-modal-close").addEventListener("click", function(){
    hideModalCountries();
});

let modalCountries = document.querySelector("#modal-countries");
modalCountries.addEventListener("click", function (event) {
    if (event.target.id == "modal-countries" || event.target.id == "modal-countries-wrapper") {
        hideModalCountries();
    }
});

const menuShow = document.querySelectorAll(".show-indicators");
menuShow.forEach(function(menuElement){
    menuElement.addEventListener("click", function(event){
        event.preventDefault();
        const countryCode = event.target.getAttribute("data-country");
        showCountryIndicators(countryCode);
    })
});

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
    if (event.target.id == "miModal" || event.target.id == "modal-content-wrapper") {
        closeModal();
    }
});



//Acceder al mapa desde un archivo svg externo
function mexCountry () {
    let mapAmericaDoc = mapAmerica.contentDocument; mapAmericaDoc.getElementById().style.fill="red"
}










