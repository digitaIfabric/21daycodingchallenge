// Examples
// Input:

//     const exampleEntries = [
//       { 
//         temperature:0, 
//         weather:"sunny", 
//         windDirection: "NNE", 
//         windSpeed:24
//       },
//       { 
//         temperature:10, 
//         weather:"cloudy", 
//         windDirection: "NNE", 
//         windSpeed:9 
//       }
//     ] 
    
// Output:

//     17

const averageWindSpeed = (weatherEntries) => {
    const windSpeedTotal = weatherEntries.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.windSpeed 
    }, 0)
    return Math.round(windSpeedTotal/weatherEntries.length)
}
  