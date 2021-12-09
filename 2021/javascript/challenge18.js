
// Your task is to write a function that will take in an array of lunch choices (strings) and return the choice as a string with the most votes.

// There is always two lunch choices, and always an odd number of astronauts!

// Examples
// Input:

//     const listOfChoices = [
//       "Chicken Dinner",
//       "Chicken Dinner",
//       "Chicken Dinner",
//       "Ice Cream Sandwich", 
//       "Ice Cream Sandwich"
//     ]
// Output:

//     Chicken Dinner

const chooseLunchWinner = (listOfChoices) => {
    const count = listOfChoices.reduce((obj,e) => {
      obj[e] = (obj[e] || 0) + 1;
      return obj;
    }, {});
    
    const output = Object.keys(count).reduce((a,b) => { 
        count[a] > count[b] ? a : b 
    });
    return output
}