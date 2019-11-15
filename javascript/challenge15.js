const finalPosition = (moves) => {
  let xTotal = 0
  let yTotal = 0
  for (let i = 0; i <= moves.length; i++){
    if (moves[i] === 'north'){
      yTotal++
    } else if (moves[i] === 'south'){
      yTotal--
    } else if (moves[i] === 'west'){
      xTotal--
    } else if (moves[i] === 'east'){
      xTotal++
    }
  }
  return [xTotal, yTotal]
}
