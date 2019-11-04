
const registerToVote = (name, unregisteredVoters) => {
  // Code here!
  let names = []
  for (let ii = 0; ii < unregisteredVoters.length; ii++){
    if (unregisteredVoters[ii] !== name){
      names.push(unregisteredVoters[ii])
    }
  }
  return names
}
