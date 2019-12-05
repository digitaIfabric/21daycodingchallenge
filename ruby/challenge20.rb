def sphereVolume(r)
    return (4 / 3) * 3.14159 * (r ** 3)
end

def coneVolume(r, h)
    return 3.14159 * (r ** 2) * ( h / 3 )
end

def prismVolume(h, w, d)
    return h * w * d
end

def getVolume(solid)
    if (solid[:type] == 'sphere')
        return sphereVolume(solid[:radius])
    elsif (solid[:type] == 'cone')
        return coneVolume(solid[:radius], solid[:height])
    elsif (solid[:type] ==  'prism')
        return prismVolume(solid[:height], solid[:width], solid[:depth])
    else
        return 0
    end
end
  
def totalVolume(solids)
    volume = []
    i = 0
    for solid in solids
        volume[i] = getVolume(solid)
        i = i + 1
    end
    # return volume.inject(0, :+)
    return volume.inject(0){|sum,x| sum + x }
end

# largeSphere = { 'type': 'sphere', 'radius': 40 }
# smallSphere = { 'type': 'sphere', 'radius': 10 }
# cone = { 'type': 'cone', 'radius': 3, 'height': 5 } 
# duck = [ largeSphere, smallSphere, cone ]
# totalVolume(duck)
