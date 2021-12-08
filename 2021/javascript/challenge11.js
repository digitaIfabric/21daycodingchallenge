// Examples
// Input:

//     const missionDate = "2021-12-12"
//     const platformList = [
//       {
//         name:"Platform A",
//         bookDate:"2021-12-11"
//       },
//       {
//         name:"Platform B",
//         bookDate:undefined
//       },
//       {
//         name:"Platform C",
//         bookDate:undefined
//       },
//     ] 
    
// Output:

//     const platformList = [
//       {
//         name:"Platform A",
//         bookDate:"2021-12-11"
//       },
//       {
//         name:"Platform B",
//         bookDate:"2021-12-12"
//       },
//       {
//         name:"Platform C",
//         bookDate:undefined
//       },
//     ] 
    
const bookFreePlatform = (platformList, missionDate) => {
    for (const platform of platformList) {
      if (platform.bookDate === undefined){
          platform.bookDate = missionDate
          break;
      }
    }
    return platformList
}
  