// import data from './data/injuries/injuries.js';
// import data from './data/lol/lol.js';
// import data from './data/patient/patient.js';
// import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/steam/steam.js';
import data from './data/worldbank/worldbank.js';
// export const newArrayIndicators = data.filter( item => {
//    return item.indicatorCode;
// });

// export const newArrayIndicators = (data) => {
//    data.PER.indicators.map(item => console.log(item.indicators))
// };

// newArrayIndicators(data);

// export const newArrayIndicators = function(){
//    data.PER.indicators.map(function(indicator) {
//       console.log(newArrayIndicators);
//    })
// }


export function newArrayIndicators(){

//    let filtered = data.PER.indicators.filter(i=>i.indicatorCode==="SE.PRM.TENR.FE")
//    console.log(filtered)
// }
   

   let peruFiltered = data.PER.indicators.filter(i=>i.indicatorCode==="SE.PRM.TENR.FE")
   console.log(peruFiltered)
