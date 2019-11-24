def festivalColours(color1):
  saturation = (color1 - 210) if ((color1 + 150) > 360 ) else color1 + 150
  lightness = (color1 - 150) if ((color1 + 210) > 360 ) else color1 + 210;
  return [saturation, lightness].sort() 
