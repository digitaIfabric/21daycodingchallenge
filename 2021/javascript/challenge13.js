// Examples
// Input:

//     const gaugeList = [
//       {
//         current:0.4,
//         min:0.1,
//         max:0.9
//       },
//       {
//         current:1.2,
//         min:0.1,
//         max:0.6
//       }
//     ]
    
// Output:

//     false
    
const checkAllGauges = (gaugeList) => {
    let output = true;
    for (const item of gaugeList) {
      if (item.max < item.current || item.min > item.current){
        output = false;
        break;
      }
    }
    return output;
}