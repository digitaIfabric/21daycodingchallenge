const whereCanIPark = (spots, vehicle) => {
  let OPTIONS = { regular : 'R', small: 'RS', motorcycle: 'RSM' }
  for (let n = 0; n < spots.length; n++){
    for (let m = 0; m < spots[n].length; m++){
      if (OPTIONS[vehicle].includes(spots[n][m])){
        return [m, n] 
      }
    }
  }
  return false
}
