// Examples
// Input:

// const listOfReceivedData = [
//   {type: "astro", data: "Saturn Data"},
//   {type: "bio", data: "Space Potatoes"},
//   {type: "physics", data: "Lagrange Points"},
//   {type: "bio", data: "OMG Tardigrades"},
//   {type: "physics", data: "Material reflectivity"},
//   {type: "astro", data: "Mercury is not the hottest"},
// ]
    
// Output:

// {
//   "astro":  ["Saturn Data", "Mercury is not the hottest"],
//   "bio": ["Space Potatoes", "OMG Tardigrades"],
//   "physics": ["Lagrange Points", "Material reflectivity"],
// }

const organizeData = (receivedData) => {
  return receivedData.reduce((accumulator, dataObject) => {
    let key = dataObject.type;
    if (!accumulator[key]) {
      accumulator[key] = [];
    }
    accumulator[key].push(dataObject.data);
    return accumulator
  }, {});
}