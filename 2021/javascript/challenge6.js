// Examples
// Input:

//     const exampleRoster = []
//     const exampleAstronaut = {
//       firstName:"Chris",
//       lastName: "Hadfield",
//       nickname:"Space Oddity",
//       prefix:"Astronaut"
//     }
    
// Output:

//     const exampleRoster = [
//       {
//         firstName:"Chris",
//         lastName: "Hadfield",
//         nickname:"Space Oddity",
//         prefix:"Astronaut"
//       }
//     ]

const addAstronautToRoster = (roster, astronaut) => {
    roster.push(astronaut);
    return roster
}