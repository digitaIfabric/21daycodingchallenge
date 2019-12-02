def festivalColours(color1)
    hue1 = ((color1 + 150) > 360 ) ?  (color1 - 210) : color1 + 150
    hue2 = ((color1 + 210) > 360 ) ? (color1 - 150) : color1 + 210;
    return [hue1, hue2].sort
end
