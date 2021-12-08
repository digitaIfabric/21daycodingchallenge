// Examples
// Input:

//     const launchDate = "2021-12-12"
//     const fakeToday = "2021-12-01"
//     const missionName = "Moon visit"
    
// Output:

//     {
//       missionName = "Moon visit",
//       daysRemaining = 11
//     }

const timeRemaining = (launchDate, missionName, fakeToday) => {
    const today = fakeToday || new Date() // Do not alter this line!
    const days = (new Date(launchDate).getTime() - today.getTime())/8.64e7;
    return {
        missionName: missionName,
        daysRemaining: Math.round(days)
    }
}
  
    