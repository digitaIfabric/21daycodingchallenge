// Challenge #20 - Bouncy Castles
// There's a new attraction at this year's town festival. The organizers have decided to bring in several inflatable attractions, but they have no clue how to much blow them up. Each attraction needs to be pumped to a precise volume to achieve maximum festival fun!
// The attractions are each made up of a combination of several different shapes: cones, spheres and prisms. For example, the giant inflatable duck is made up of two spheres (the body and head) and a cone (the beak) 🦆.
// Instructions
// Each shape has a different calculation for determining volume, so we'll need to create a few functions that will help us figure out the volume of the various inflatable attractions.
// In this challenge, we'll need to implement four functions.
// The first three will calculate the volume of the individual shapes:
// sphereVolume()will calculate the volume of a sphere given a radius
// coneVolume() will calculate the volume of a cone given a radius and a height
// prismVolume() will calculate the volume of a prism given a height, a width, and a depth
// The fourth function, totalVolume(), will receive an array containing the different shapes that make up a single attraction. The totalVolume function should use the previous three functions to calculate the total volume of an attraction.
// Don't worry about getting the answers to the perfect precision: our tests will check to see that you're within a correct range.
// Examples
// Input:
//     const spher// Challenge #20 - Bouncy Castles
// There's a new attraction at this year's town festival. The organizers have decided to bring in several inflatable attractions, but they have no clue how to much blow them up. Each attraction needs to be pumped to a precise volume to achieve maximum festival fun!
// The attractions are each made up of a combination of several different shapes: cones, spheres and prisms. For example, the giant inflatable duck is made up of two spheres (the body and head) and a cone (the beak) 🦆.
// Instructions
// Each shape has a different calculation for determining volume, so we'll need to create a few functions that will help us figure out the volume of the various inflatable attractions.
// In this challenge, we'll need to implement four functions.
// The first three will calculate the volume of the individual shapes:
// sphereVolume()will calculate the volume of a sphere given a radius
// coneVolume() will calculate the volume of a cone given a radius and a height
// prismVolume() will calculate the volume of a prism given a height, a width, and a depth
// The fourth function, totalVolume(), will receive an array containing the different shapes that make up a single attraction. The totalVolume function should use the previous three functions to calculate the total volume of an attraction.
// Don't worry about getting the answers to the perfect precision: our tests will check to see that you're within a correct range.
// Examples
// Input:
//     const sphere = {
//       type: 'sphere',
//       radius: 2
//     }
//     sphereVolume(sphere.radius)
// Output:
// 33.5102
// Input:
//     const cone = {
//       type: 'cone',
//       radius: 3,
//       height: 5
//     }
//     coneVolume(cone.radius, cone.height)
// Output:
// 47.12385
// Input:
//     const prism = {
//       type: 'prism',
//       height: 3,
//       width: 4,
//       depth: 5
//     }
//     coneVolume(prism.height, prism.width, prism.depth)
// Output:
// 60
// Input:
// const largeSphere = {
//   type: 'sphere',
//   radius: 40
// }
// const smallSphere = {
//   type: 'sphere',
//   radius: 10
// }
// const cone = {
//   type: 'cone',
//   radius: 3,
//   height: 5
// }
// const duck = [
//   largeSphere,
//   smallSphere,
//   cone
// ]
//     totalVolume(duck)
// Output:
// 49.8  

interface shape {
    type: string;
    radius?: number;
    height?: number;
    width?: number;
    depth?: number;
}

const π = 3.14159 

const sphereVolume = function (r: number): number {
  return (4 / 3) * π * r * r * r
}

const coneVolume = function (r: number, h: number): number {
  return π * r * r * ( h / 3 )
}

const prismVolume = function (h: number, w: number, d: number): number {
  return h * w * d
}

const getVolume = function (solid: shape): number {
    switch(solid.type){
      case 'sphere': return sphereVolume(solid.radius);
      case 'cone': return coneVolume(solid.radius, solid.height);
      case 'prism': return prismVolume(solid.height, solid.width, solid.depth);
      default: return 0;
    }
  }
  
const totalVolume = function (solids: Array<any>): number {
    return solids.reduce((volume: number, solid: shape) => volume + getVolume(solid), 0)
}
