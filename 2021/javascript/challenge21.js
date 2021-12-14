// Examples
// Input:

//  const exchanges = [
//    {origin:"MC", message:"So how is it out there?"},
//    {origin:"Shuttle", message:"Oh it's pretty nice!"},
//    {origin:"MC", message:"Did you like the challenges?"},
//  ]
    
//  const missionData = {
//    astro:["...","..."], 
//    bio:["..."], 
//    physics:["..."]
//  }
    
// Output:

//  {
//    transcript:
//    [
//      "MC: So how is it out there?",
//      "Shuttle: Oh it's pretty nice!",
//      "MC: Did you like the challenges?"
//    ],
//    missionData:{
//      astro:["...","..."], 
//      bio:["..."], 
//      physics:["..."]
//    }
//  }
    

const parseMessage = (origin, message) => {
    return `${origin}: ${message}`;
}

const parseMissionSummary = (exchanges, missionData) => {
    const output = {};
    const formattedExchanges = [];
    for (const item of exchanges){
      formattedExchanges.push([parseMessage(item.origin, item.message)]);
    }
    output.transcript = formattedExchanges;
    output.missionData = missionData;
    return output;
}