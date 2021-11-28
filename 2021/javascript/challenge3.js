// Examples
// Input:

//     const exampleGauge = {
//       current:0.4,
//       min:0.1,
//       max:0.9
//     }
    
// Output:

//     true
    
// Input:

//     const exampleGauge = {
//       current:1.4,
//       min:0.1,
//       max:0.4
//     }
    
// Output:

//     false

const checkGaugeStatus = (gauge) => {
    let gaugeValue = gauge.current;
    return (gauge.min < gaugeValue && gaugeValue < gauge.max) ? true : false 
}