// Examples
// Input:

//   const firstPosition = {
//     time: 1637074462,
//     altitude: 1100
//   }
//   const secondPosition = {
//     time: 1637074558,
//     altitude: 2200
//   }
    
// Output:

//   11.5

const getAverageSpeed = (firstPosition, secondPosition) => {
    let output = (secondPosition.altitude - firstPosition.altitude) / (secondPosition.time - firstPosition.time);
    return Math.round(output * 10)/10;
  }
  