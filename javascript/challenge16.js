const festivalColours = color1 => {
  let saturation = ((color1 + 150) > 360 ) ? color1 - 210 : color1 + 150;
  let lightness = ((color1 + 210) > 360 ) ? color1 - 150 : color1 + 210;
  return [saturation, lightness].sort();
}
