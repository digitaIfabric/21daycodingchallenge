def checkAir(samples, threshold):
    dirtyCount = samples.count("dirty")
    if (threshold >= dirtyCount/len(samples)):
      return "Clean"
    else:
      return "Polluted"
      
# samples = ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'clean', 'clean', 'clean']
# threshold = 0.3            
# checkAir(samples, threshold)
