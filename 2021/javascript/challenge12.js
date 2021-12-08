// Examples
// Input:

//     const messages = [
//       {origin:"MC", message:"Hello!"},
//       {origin:"Shuttle", message:"Hey!"},
//     ]
    
// Output:

//     [
//       "MC: Hello!",
//       "Shuttle: Hey!"
//     ]
    
    

// Add your parseMessage function here if you want!

const parseTranscripts = (messages) => {
    let output = [];
    for (const message of messages) {
      output.push(`${message.origin}: ${message.message}`);
    }
    
    return output;
  }
  