def finalPosition(moves):
  xTotal = 0
  yTotal = 0
  for i in moves:
    if (i == 'north'):
      yTotal = yTotal + 1
    elif (i == 'south'):
      yTotal = yTotal - 1
    elif (i == 'west'):
      xTotal = xTotal - 1
    elif (i == 'east'):
      xTotal = xTotal + 1
  coord = [xTotal, yTotal]
  return coord
