// Examples
// Input:

// const toggleList = [
//   {
//     name: "toggleA",
//     isOn: false
//     }, 
//   {
//     name: "toggleB",
//     isOn: true
//   }
// ]
// const specificToggle = "toggleA"
    
// Output:

// [
//   {
//     name: "toggleA",
//     isOn: true
//   }, 
//   {
//     name: "toggleB",
//     isOn: true
//   }
// ]

const switchSpecificToggle = (toggleList, specificToggle) => {
    for (const toggleItem of toggleList) {
        if (specificToggle === toggleItem.name){
            toggleItem.isOn = true
        }
    }
    return toggleList
}
  