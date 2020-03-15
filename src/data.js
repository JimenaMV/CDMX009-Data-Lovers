 import data from './data/worldbank/worldbank.js';


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


export const braArrayIndicators = (data) => {
  console.log('data', data);
  data.BRA.indicators.filter(tal)
}
// export const braArrayIndicators = () => {
//   console.log('data', data);
//   data.BRA.indicators.filter( indicator => indicator.indicatorCode === "SE.PRM.TENR.FE")}

function tal(elem) {
  return 
}


export const filtro = (data) => {
  data.BRA.indicators.forEach((indicator) => {
    if(indicator.indicatorCode.includes("SE.PRM.TENR.FE")) {
      console.log(indicator);
    }
  })
}

// // filtro();
//  braArrayIndicators(); 

 let perA rrayIndicators = data.PER.indicators.filter(indicators=>{
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
