// Examples
// Input:

// const toggleList = [
// 	{
// 		name:"Air",
// 		isOn:true
// 	},
// 	{
// 		name:"Radio",
// 		isOn:false
// 	},
// ]
    
// Output:

// [
// 	{
// 		name:"Air",
// 		isOn:true
// 	},
// 	{
// 		name:"Radio",
// 		isOn:true
// 	},
// ]

const switchAllTogglesOn = (toggleList) => {
    for (const item of toggleList){
      if (item.isOn === false) {
        item.isOn = true;
      }
    }
    return toggleList;
}
	