// import data from './data/injuries/injuries.js';
// import data from './data/lol/lol.js';
// import data from './data/patient/patient.js';
// import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/steam/steam.js';
<<<<<<< HEAD
 import data from './data/worldbank/worldbank.js';
=======
import data from './data/worldbank/worldbank.js';
<<<<<<< HEAD
>>>>>>> 3eb3dba2c732d36b9f1eae1063404a906983d109
=======
export const example=()=>{return "example";};
// export const newArrayIndicators = data.filter( item => {
//    return item.indicatorCode;
// });
>>>>>>> 238c4e34cc8eb5e3995b1897892b054e6dc02893

// export const newArrayIndicators = (data) => {
//    data.PER.indicators.map(item => console.log(item.indicators))
// };

<<<<<<< HEAD
export const example = () => {
  return 'example';
};
<<<<<<< HEAD
 console.log (data);
=======
 
>>>>>>> 3eb3dba2c732d36b9f1eae1063404a906983d109
=======
// newArrayIndicators(data);

// export const newArrayIndicators = function(){
//    data.PER.indicators.map(function(indicator) {
//       console.log(newArrayIndicators);
//    })
// }


// export function newArrayIndicatorsPeru(data){

// //    let filtered = data.PER.indicators.filter(i=>i.indicatorCode==="SE.PRM.TENR.FE")
// //    console.log(filtered)
// // }
//    console.log(peruFiltered)
//    return data.PER.indicators.filter(
//       item => item.indicatorCode==="SE.PRM.TENR.FE"
//    )
// }

//newArrayIndicators(data)


// export function newArrayIndicators(data){
//    let filteredIndicators = data.filter(function(indicator){
//       return indicator.indicatorCode === "SE.PRM.TENR.FE"
//    }) 
// }

// newArrayIndicators(indicator);

let braArrayIndicators = data.BRA.indicators.filter(indicators=>{
   return indicators.indicatorCode.includes("SE.PRM.TENR.FE") | (indicators.indicatorCode.includes("SE.ENR.TERT.FM.ZS")) | (indicators.indicatorCode.includes("SE.ENR.PRIM.FM.ZS")) | (indicators.indicatorCode.includes("SE.ENR.SECO.FM.Z")) 
})
 console.log(braArrayIndicators); 

 let perArrayIndicators = data.PER.indicators.filter(indicators=>{
   return indicators.indicatorCode.includes("SE.PRM.TENR.FE") | (indicators.indicatorCode.includes("SE.ENR.TERT.FM.ZS")) | (indicators.indicatorCode.includes("SE.ENR.PRIM.FM.ZS")) | (indicators.indicatorCode.includes("SE.ENR.SECO.FM.Z")) 
})
 console.log(perArrayIndicators); 


 let chlArrayIndicators = data.CHL.indicators.filter(indicators=>{
   return indicators.indicatorCode.includes("SE.PRM.TENR.FE") | (indicators.indicatorCode.includes("SE.ENR.TERT.FM.ZS")) | (indicators.indicatorCode.includes("SE.ENR.PRIM.FM.ZS")) | (indicators.indicatorCode.includes("SE.ENR.SECO.FM.Z")) 
})
 console.log(chlArrayIndicators); 


 let mexArrayIndicators = data.MEX.indicators.filter(indicators=>{
   return indicators.indicatorCode.includes("SE.PRM.TENR.FE") | (indicators.indicatorCode.includes("SE.ENR.TERT.FM.ZS")) | (indicators.indicatorCode.includes("SE.ENR.PRIM.FM.ZS")) | (indicators.indicatorCode.includes("SE.ENR.SECO.FM.Z")) 
})
 console.log(mexArrayIndicators); 
>>>>>>> 238c4e34cc8eb5e3995b1897892b054e6dc02893
