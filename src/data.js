import data from './data/worldbank/worldbank.js';
// Exportar lo que *regresa* la función getCountries
export default getCountries();

// Función para manipular los datos; regresa el objeto a exportar
function getCountries() {
    // iniciar objeto a exportar
    let countries = {};
    const indicatorsWanted = [
        "SE.PRM.TENR.FE",
        "SE.ENR.TERT.FM.ZS",
        "SE.ENR.PRIM.FM.ZS",
        "SE.ENR.SECO.FM.ZS"
    ];

    const indicatorsDescriptions = {
      "SE.PRM.TENR.FE": "Esta es una descripción",
      "SE.ENR.TERT.FM.ZS": "Esta es una descripción",
      "SE.ENR.PRIM.FM.ZS": "Esta es una descripción",
      "SE.ENR.SECO.FM.ZS": "Esta es una descripción"
    }

    // iterar sobre la data para llenar el objeto
    for (const countryKey in data) {
        let indicatorsFiltered = data[countryKey].indicators.filter(indicator => {
            // si el indicatorCode está incluido en indicatorsWanted
            return indicatorsWanted.includes(indicator.indicatorCode);
        });

        indicatorsFiltered.forEach(indicator => {
          // crear objeto con datos auxiliares para el objeto que se regresa
          // Sólo se le van a añadir los años que no estén vacío
          let filteredData = {};
          for (const year in indicator.data) {
              if (indicator.data[year] != "") {
                  // Crear un atributo con el porcentaje redondeado a dos decimales
                  filteredData[year] = parseInt(indicator.data[year] * 100) / 100;
              }
          }

          // agereagar los datos (año: porcentaje) a unn nuevo  atributo general
          indicator.filteredData = filteredData;
          indicator.description = indicatorsDescriptions[indicator.indicatorCode];
        });

        // Se agrega una nueva propiedad ("MEX","PER", etc)
        // solamente con nombre, code y los datos filtrados
        countries[countryKey] = {
            // Tomar el primer indicator (no importa cuál) y obtener su countryName
            name: data[countryKey].indicators[0].countryName,
            code: countryKey,
            indicatorsFiltered
        };
    }

    return countries;
}


// export const example=()=>{return "example";};