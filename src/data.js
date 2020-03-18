import data from './data/worldbank/worldbank.js';
export default getCountries();

function getCountries() {
    let countries = {};
    let indicatorsWanted = [
        "SE.PRM.TENR.FE",
        "SE.ENR.TERT.FM.ZS",
        "SE.ENR.PRIM.FM.ZS",
        "SE.ENR.SECO.FM.ZS"
    ];

    for (const countryKey in data) {
        let indicatorsFiltered = data[countryKey].indicators.filter(indicator => {
            if (!indicatorsWanted.includes(indicator.indicatorCode)) {
                return false;
            }
            
            let filteredData = {};
            for (const year in indicator.data) {
                if (indicator.data[year]) {
                    filteredData[year] = parseInt(indicator.data[year] * 100) / 100;
                }
            }
            indicator.filteredData = filteredData;
            return true;
        }
        );

        countries[countryKey] = {
            name: data[countryKey].indicators[0].countryName,
            code: countryKey,
            indicatorsFiltered
        };
    }

    return countries;
}


// export const example=()=>{return "example";};

// newArrayIndicators(data);

// export const newArrayIndicators = function(){
//    data.PER.indicators.map(function(indicator) {
//       console.l og(newArrayIndicators);
//    })
// }



// export function newArrayIndicators(data){
//    let filteredIndicators = data.filter(function(indicator){
//       return indicator.indicatorCode === "SE.PRM.TENR.FE"
//    }) 
// }

// newArrayIndicators(indicator);

// export const braArrayIndicators = (data) => {
//   console.log('data', data);
//   data.BRA.indicators.filter(indicator=>{
//     indicator.indicatorCode.includes("SE.PRM.TENR.FE") || indicator.indicatorCode.includes("SE.ENR.TERT.FM.ZS")  || indicator.indicatorCode.includes("SE.ENR.PRIM.FM.ZS") || indicator.indicatorCode.includes("SE.ENR.SECO.FM.Z") 
//   })
// }


// export const braArrayIndicators = (data) => {
//   console.log('data', data);
//   data.BRA.indicators.filter(tal)
// }
// // export const braArrayIndicators = () => {
// //   console.log('data', data);
// //   data.BRA.indicators.filter( indicator => indicator.indicatorCode === "SE.PRM.TENR.FE")}

// function tal(elem) {
//   return 
// }


// export const filtro = (data) => {
//   data.BRA.indicators.forEach((indicator) => {
//     if(indicator.indicatorCode.includes("SE.PRM.TENR.FE")) {
//       console.log(indicator);
//     }
//   })
// }

// export function getIndicatorsByBra (SE.PRM.TENR.FE, "SE.ENR.TERT.FM.ZS", "SE.ENR.PRIM.FM.ZS", "SE.ENR.SECO.FM.Z") {
//   let braArrayIndicators = data.PER.indicators.filter(indicators=>{
//     return indicators.indicatorCode.includes("SE.PRM.TENR.FE") | (indicators.indicatorCode.includes("SE.ENR.TERT.FM.ZS")) | (indicators.indicatorCode.includes("SE.ENR.PRIM.FM.ZS")) | (indicators.indicatorCode.includes("SE.ENR.SECO.FM.Z"));
//   })
//   console.log(braArrayIndicators); 
// }



//4 indicadores de educación para Brasil

export function getIndicatorsByBra () {
  let braArrayIndicators = data.BRA.indicators.filter(indicators=>{
    return indicators.indicatorCode === "SE.PRM.TENR.FE" | indicators.indicatorCode === "SE.ENR.TERT.FM.ZS" | indicators.indicatorCode === "SE.ENR.PRIM.FM.ZS" | indicators.indicatorCode === "SE.ENR.SECO.FM.ZS"
  })
  return (braArrayIndicators);
}


//4 indicadores de educación para Perú

export function getIndicatorsByPer () {
  let perArrayIndicators = data.PER.indicators.filter(indicators=>{
    return indicators.indicatorCode === "SE.PRM.TENR.FE" | indicators.indicatorCode === "SE.ENR.TERT.FM.ZS" | indicators.indicatorCode === "SE.ENR.PRIM.FM.ZS" | indicators.indicatorCode === "SE.ENR.SECO.FM.ZS"
  })
  return (perArrayIndicators);
}

//4 indicadores de educación para Chile

export function getIndicatorsByChl () {
  let chlArrayIndicators = data.CHL.indicators.filter(indicators=>{
    return indicators.indicatorCode === "SE.PRM.TENR.FE" | indicators.indicatorCode === "SE.ENR.TERT.FM.ZS" | indicators.indicatorCode === "SE.ENR.PRIM.FM.ZS" | indicators.indicatorCode === "SE.ENR.SECO.FM.ZS"
  })
  return (chlArrayIndicators);
}

//4 indicadores de educación para México

export function getIndicatorsByMex () {
  let mexArrayIndicators = data.MEX.indicators.filter(indicators=>{
    return indicators.indicatorCode === "SE.PRM.TENR.FE" | indicators.indicatorCode === "SE.ENR.TERT.FM.ZS" | indicators.indicatorCode === "SE.ENR.PRIM.FM.ZS" | indicators.indicatorCode === "SE.ENR.SECO.FM.ZS"
  })
  return (mexArrayIndicators);
}




//  let chlArrayIndicators = data.CHL.indicators.filter(indicators=>{
//    return indicators.indicatorCode.includes("SE.PRM.TENR.FE") | (indicators.indicatorCode.includes("SE.ENR.TERT.FM.ZS")) | (indicators.indicatorCode.includes("SE.ENR.PRIM.FM.ZS")) | (indicators.indicatorCode.includes("SE.ENR.SECO.FM.Z")) 
// })
// //  console.log(chlArrayIndicators); 


//  let mexArrayIndicators = data.MEX.indicators.filter(indicators=>{
//    return indicators.indicatorCode.includes("SE.PRM.TENR.FE") | (indicators.indicatorCode.includes("SE.ENR.TERT.FM.ZS")) | (indicators.indicatorCode.includes("SE.ENR.PRIM.FM.ZS")) | (indicators.indicatorCode.includes("SE.ENR.SECO.FM.Z")) 
// })

