
const chooseStations = (stations) => {
  let output = [];
  for (ii = 0; ii < stations.length; ii++){
      let station = stations[ii];
      if (station[1] >= 20 && (station[2] === 'community centre' || station[2] ===  'school')){
          output.push(station[0]);
      }
  }
  return output
}
