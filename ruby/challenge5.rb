def chooseStations(stations)
  output = []
  for ii in 0..stations.length do
      station = stations[ii]
      if station[1] > 20 and (station[2] == 'community centre' or station[2] ==  'school')
        output << (station[0])
      end
  end
  return output
end

# stations = [['Big Bear Donair', 10, 'restaurant'],['Bright Lights Elementary', 50, 'school'],['Moose Mountain Community Centre', 45, 'community centre']];
# chooseStations(stations)
