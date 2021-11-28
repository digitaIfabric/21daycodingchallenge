// Examples
// Input:

//     const exampleAstronaut = {
//       firstName: "Yuri",
//       lastName: "Gagarin",
//       nickname: "First!",
//       prefix: "Cosmonaut"
//     }
    
// Output:

//     Cosmonaut: Yuri "First!" Gagarin
    
// Input:

//     const exampleAstronaut = {
//       firstName: "Neil",
//       lastName: "Armstrong",
//       nickname: "Steps",
//       prefix: "Astronaut"
//     }
    
// Output:

//     Astronaut: Neil "Steps" Armstrong

const generateAstronautTag = (astronaut) => {
    return `${astronaut.prefix}: ${astronaut.firstName} "${astronaut.nickname}" ${astronaut.lastName}`   
}