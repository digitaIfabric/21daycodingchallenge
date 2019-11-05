
const chooseStations = (stations) => {
  // Code here!
  let length = stations.length;
  let output = [];
  for (ii = 0; ii < length; ii++){
      let stationArray = stations[ii];
      if (stationArray[1] >= 20 && (stationArray[2] === 'community centre' || stationArray[2] ===  'school')){
          output.push(stationArray[0]);
      }
  }
  return output
}
