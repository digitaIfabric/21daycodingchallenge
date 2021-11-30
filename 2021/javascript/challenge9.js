// Examples
// Input:

//     const exampleRoster = [
//       {
//         ...
//         job:"Shuttle DJ"
//       },
//       {
//         ...
//         job:"Space Cook"
//       }
//     ] 
    
// Output:

//     ["Shuttle DJ", "Space Cook"]


// const listAstronautJobs = (roster) => {
//     const output = [];
//     for (const astronaut of roster){
//       output.push(astronaut.job);
//     }
//     return output
// }

const listAstronautJobs = (roster) => {
    return roster.reduce((previousValue, currentValue) => {
      return [...previousValue, currentValue.job]
    }, []);
}
  