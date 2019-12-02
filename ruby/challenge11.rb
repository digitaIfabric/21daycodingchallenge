def busTimes(buses)
  times = {}
  for bus in buses
    times[bus[0]] = buses[bus[0]][:distance] / buses[bus[0]][:speed]
  end
  return times
end

# buses = { "pickadilly": {"distance":10,"speed":5},"uptown":{"distance":13,"speed":10}}
# busTimes(buses)
