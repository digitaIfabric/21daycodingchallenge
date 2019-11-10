// Remember, the possible candidates are: Tim, Sally, and Beth (in that order)
const castVote = (name, votes) => {
  // Code here!
  if (name === 'Tim'){
    votes[0] = votes[0] + 1
  } else if (name === 'Sally'){
    votes[1] = votes[1] + 1
  } else if (name === 'Beth'){
   votes[2] = votes[2] + 1
  }
  return votes
}
