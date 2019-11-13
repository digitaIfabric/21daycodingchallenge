const lightsOn = function(lights) {
  lights.forEach(light =>{light.on = true});
  return lights;
}

const lightsOff = function(lights) {
  lights.forEach(light =>{light.on = false});
  return lights;
}

const toggleLights = function(lights, lightsAreOn) {
  if(lightsAreOn)
    {
    return lightsOff(lights);
    }
  return lightsOn(lights);
}
