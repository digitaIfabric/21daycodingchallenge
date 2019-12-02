def smartGarbage(trash, bins)
    arr = []
    for garbage in bins do
        arr << garbage[1]
    end
    if trash == "waste"
      arr[0] = arr[0] + 1
    elsif trash == "recycling"
      arr[1] = arr[1] + 1
    elsif trash == "compost"
      arr[2] = arr[2] + 1
    end
    return {"waste": arr[0], "recycling": arr[1], "compost": arr[2]}
  end
  
#   bins = { waste: 4, recycling: 2, compost: 5 }
#   trash = 'recycling'
#   smartGarbage(trash, bins)
