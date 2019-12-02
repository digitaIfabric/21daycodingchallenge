def dynamicPricing(numberOfPeople, distanceTraveled)
    basePrice = (1.00 + (distanceTraveled.to_f*0.25).round(3)).round(3)
    totalPrice = (numberOfPeople >= 30) ? basePrice.to_f.round(3) + 0.25 : basePrice.to_f.round(3)
    return '$' + totalPrice.round(3).to_s
end
  
# numberOfPeople = 30
# distanceTraveled = 10
# dynamicPricing(numberOfPeople, distanceTraveled)
