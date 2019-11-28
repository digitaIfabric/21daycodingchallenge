def whereCanIPark(spots, vehicle):
    options = { "regular" : "R", "small": "RS", "motorcycle": "RSM" }
    for n in range(0, len(spots)):
        for m in range(0, len(spots[n])):
            if options[vehicle].__contains__(spots[n][m]):
                return [m, n]
    return False

# vehicle = "regular"
# spots = [['s', 's', 's', 'S', 'R', 'M'], ['s', 'M', 's', 'S', 'R', 'M'], ['s', 'M', 's', 'S', 'R', 'm'], ['S', 'r', 's', 'm', 'R', 'M'], ['S', 'r', 's', 'm', 'R', 'M'],    ['S', 'r', 'S', 'M', 'M', 'S']]
# whereCanIPark(spots, vehicle)
