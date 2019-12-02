def finalPosition(moves)
    xTotal = 0
    yTotal = 0
    for i in moves
      if (i == 'north')
        yTotal = yTotal + 1
      elsif (i == 'south')
        yTotal = yTotal - 1
      elsif (i == 'west')
        xTotal = xTotal - 1
      elsif (i == 'east')
        xTotal = xTotal + 1
      end
    end 
    return [xTotal, yTotal]
end
