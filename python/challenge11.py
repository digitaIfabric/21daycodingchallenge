def busTimes(buses): 
  times = {}
  for bus in buses:
    times[bus] = buses[bus]["distance"]/buses[bus]["speed"]
  return times

# buses = { "pickadilly": {"distance":10,"speed":5},"uptown":{"distance":13,"speed":10}}
# busTimes(buses)
