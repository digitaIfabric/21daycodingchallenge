const π = 3.14159 

const sphereVolume = function (r) {
  return (4 / 3) * π * r * r * r
}

const coneVolume = function (r, h) {
  return π * r * r * ( h / 3 )
}

const prismVolume = function (h, w, d) {
  return h * w * d
}

const getVolume = function (solid) {
  switch(solid.type){
    case 'sphere': return sphereVolume(solid.radius);
    case 'cone': return coneVolume(solid.radius, solid.height);
    case 'prism': return prismVolume(solid.height, solid.width, solid.depth);
    default: return 0;
  }
}

const totalVolume = function (solids) {
  return solids.reduce((volume, solid) => volume + getVolume(solid), 0)
}
