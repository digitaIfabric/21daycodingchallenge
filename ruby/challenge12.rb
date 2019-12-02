def checkAir(samples, threshold)
    if (threshold.to_f >= (samples.count("dirty").to_f/samples.length.to_f))
      return "Clean"
    else
      return "Polluted"
    end
end

# samples = ['dirty', 'dirty', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'dirty', 'dirty']
# threshold = 0.3            
# checkAir(samples, threshold)
