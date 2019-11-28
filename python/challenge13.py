def lightsOn(lights): 
  for light in lights:
    light["on"] = True
  return lights

def lightsOff(lights): 
  for light in lights:
    light["on"] = False
  return lights

def toggleLights(lights, lightsAreOn):
  for light in lights:
    light["on"] = ~light["on"]
  return lights;

# lightsAreOn = True
# lights = [ { id: 1, "on": True }, { id: 2, "on": True }, { id: 3, "on": True }, { id: 4, "on": True }, { id: 5, "on": True } ]
# lightsOff(lights)
