// Examples
// Input:

//     const someToggle = {
//       name:"toggleA",
//       isOn:false
//     }
    
// Output:

//     const someToggle = {
//       name:"toggleA",
//       isOn:true
//     }
    
// Input:

//     // If ran twice
//     const someToggle = {
//       name:"toggleB",
//       isOn:true
//     }
    
// Output:

//     const someToggle = {
//       name:"toggleB",
//       isOn:true
//     }

const switchToggle = (toggle) => {
    toggle.isOn = !toggle.isOn
    return toggle
}