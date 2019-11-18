// Challenge #7 - You Choose, (You Don't) Lose
// The people of Codeville have spoken, and you have been elected mayor once again! Now it's time to get back to work. You need to decide which issues to focus on first for your new term in office. Using the dataset from voter surveys, determine the top three issues voters were most concerned about when choosing the new Codeville leadership.

// Instructions
// We need to go through the survey responses to see what your constituents would like you to focus on over the course of your term in office. The array that you are given contains many phrases and words pulled from a number of interviews. We only want to focus on the following three key phrases: "smart city", "arts funding", and "transportation".

// Our termTopics function needs to count how many times each of those topics was mentioned in the surveys, and then return an array with the number of mentions in the following order: smart city, arts funding, and then transportation.

// Examples
// Input:

//     const interviews = [
//       'smart city', 
//       'rebuild the lighthouse', 
//       'arts funding', 
//       'transportation',
//       'arts funding', 
//       'rebuild the lighthouse', 
//       'sports funding', 
//       'tax cuts', 
//       'smart city',
//       'arts funding', 
//       'smart city'
//     ]
    
// Output:

//     [
//       3, // smart city
//       3, // arts funding
//       1  // transportation
//     ]

const termTopics = (interviews : Array<string>): Array<number> =>  interviews.reduce(([countA,countB,countC], interview)=> {
    switch(interview){
      case "smart city": return [countA+1,countB,countC];
      case "arts funding": return [countA,countB+1,countC];
      case "transportation": return [countA,countB,countC+1];
      default: return [countA,countB,countC];
    }
  },[0,0,0])

//  console.log(termTopics(interviews))
