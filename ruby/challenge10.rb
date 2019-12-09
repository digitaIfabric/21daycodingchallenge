  #  spots = [
  #        ['s', 's', 's', 'S', 'R', 'M'], 
  #        ['s', 'M', 's', 'S', 'R', 'M'], 
  #        ['s', 'M', 's', 'S', 'R', 'm'], 
  #        ['S', 'r', 's', 'm', 'R', 'M'], 
  #        ['S', 'r', 's', 'm', 'R', 'M'], 
  #        ['S', 'r', 'S', 'M', 'M', 'S'], 
  #    ]

  #  vehicle = 'regular'

def whereCanIPark(spots, vehicle)
  options = ['R','RS','RSM']
  # options = {'regular': 'R', 'motorcycle': 'RSM'}
  coord = [0, 0]
  spotsJoin = spots.join
  puts spotsJoin
  if (spotsJoin.index(options[0])) # Regular only
      index = spotsJoin.index(options[0])
      n = spots.length - 1 # 0 to n
      arrayLength = spotsJoin.length
      if index <= n
          coord[1] = index
      elsif index >= n
          coord[0] = (index/n).floor
          coord[1] = ((index/n).modulo(1) * n).floor
      end
      return coord
  else
    return false
  end
end
# whereCanIPark(spots, vehicle)
