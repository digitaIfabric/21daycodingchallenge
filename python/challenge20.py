pi = 3.14159 

def sphereVolume(r):
    return (4 / 3) * pi * (r ** 3)


def coneVolume(r, h):
    return pi * (r ** 2) * ( h / 3 )


def prismVolume(h, w, d):
    return h * w * d

def getVolume(solid):
    if (solid['type'] == 'sphere'):
        return sphereVolume(solid['radius'])
    elif (solid['type'] == 'cone'):
        return coneVolume(solid['radius'], solid['height'])
    elif (solid['type'] ==  'prism'): 
        return prismVolume(solid['height'], solid['width'], solid['depth'])
    else:
        return 0
  
def totalVolume (solids):
    volume = [0] * len(solids)
    i = 0
    for solid in solids:
        volume[i] = getVolume(solid)
        i = i + 1
    return sum(volume)

# largeSphere = { 'type': 'sphere', 'radius': 40 }
# smallSphere = { 'type': 'sphere', 'radius': 10 }
# cone = { 'type': 'cone', 'radius': 3, 'height': 5 } 
# duck = [ largeSphere, smallSphere, cone ]
# totalVolume(duck)
