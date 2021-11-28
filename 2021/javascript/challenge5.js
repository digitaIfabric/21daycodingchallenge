// Examples
// Input:

//     const exampleAstronaut = {
//       firstName:"Chris",
//       lastName: "Hadfield",
//       nickname:"Space Oddity",
//       prefix:"Astronaut"
//     }
    
// Output:

//     const exampleAstronaut = {
//       firstName:"Chris",
//       lastName: "Hadfield",
//       nickname:"Space Oddity",
//       prefix:"Astronaut",
//       job:"Shuttle DJ"
//     }

const addJobToAstronaut = (astronaut, job) => {
    astronaut.job = job;
    return astronaut
}