// Instructions
// (This challenge is worth 10 points)

// Your task is to write a function that will take in speed (number), missionData (object) and checks (object) as parameters. The goal is to make sure that the speed is within the limits and that the amount of entries per type matches with the checks. If one of the values is a mismatch, return false, if everything is fine, return true.

// Speed will be compared against maxSpeed and minSpeed inclusively and the length of each array inside missionData will be compared to the values inside the dataEntries object values.

// Examples
// Input:

//   const speed = 40
//   const missionData = {
//     astro:["...","..."], 
//     bio:["..."], 
//     physics:["..."]
//   }

//   const checks = {
//     maxSpeed:50,
//     minSpeed:20,
//     dataEntries:{
//       astro:3,
//       bio:1,
//       physics:1
//     }
//   }
    
// Output:

//   false // Not the same amount of entries


const confirmReentryPlans = (speed, missionData, checks) => {
    let output = true;

    if (speed > checks.maxSpeed || speed < checks.minSpeed) {
        output = false;
    }

    for ( let i = 0; i < Object.keys(missionData).length; i++) {
        if (Object.values(missionData)[i].length !== Object.values(checks.dataEntries)[i]){
        output = false;
        break;
        }
    }

    return output
}