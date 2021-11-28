// Examples
// Input:

//     const temperature = 32
//     const condition = "Sunny with small clouds"
//     const windSpeed = 20
//     const windDirection = "NNE
    
// Output:

//     {
//       temperature:0,
//       windSpeed:9,
//       windDirection:"NNE",
//       condition:"Sunny with small clouds"
//     }

const storeWeatherConditions = (temperature, condition, windSpeed, windDirection) => {
    const temperatureCelsius = Math.round((temperature-32)*5/9);
    const windSpeedMetersSecond = Math.round(windSpeed/2.237);
    return {
      temperature: temperatureCelsius,
      windSpeed: windSpeedMetersSecond,
      windDirection: windDirection,
      condition: condition
    }
}