def lightsOn(lights):
  for light in lights:
    light.on = True
  end
  return lights
end

def lightsOff(lights):
    for light in lights:
      light.on = False
    end
    return lights;

def toggleLights(lights, lightsAreOn):
  for light in lights:
    light.on = ~light.on
  end
  return lights
end
