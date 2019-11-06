
const voterTurnout = (voter_signatures, voter_ids) => {
  // Code here!
  let truth = [];
  
  if (voter_signatures.length !== voter_ids.length){
    return false
  }
  
for (ii = 0; ii <= voter_ids.length; ii++){
  if (voter_signatures[ii] === voter_ids[ii]){
    truth[ii] = true
  } else {
    truth[ii] = false
  }
}

console.log(truth)

if (truth.every(Boolean)){
  return 'All clear, we can count the votes!'
} else {
  return 'FRAUD!'
}

}
