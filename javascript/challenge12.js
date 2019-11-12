const checkAir = (samples,threshold) => {
    let dirtyCount = 0;
    samples.forEach((v) => (v === 'dirty' && dirtyCount++));  
    if (threshold >= dirtyCount/samples.length){
      return 'Clean'
    } else {
      return 'Polluted'
    }
}
