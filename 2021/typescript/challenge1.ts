// Examples
// Input:

//      parseMessage("Mission Control", "Hello there!")
    
// Output:

//      Mission Control: Hello there!

const parseMessage = (origin: string, message: string): string => {
    return origin + ': ' + message
}