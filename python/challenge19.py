import math

def pumpkinSpice(money):
    pies = math.floor(money / 5)
    r = money % 5
    l = math.floor(r / 3)
    m = r % 3;
    g = 30 * pies + 15 * l + 3 * m;
    return [pies, l, m, g]
