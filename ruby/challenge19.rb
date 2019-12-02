def pumpkinSpice(money)
    pies = (money / 5).floor
    r = money % 5
    l = floor(r / 3).floor
    m = r % 3
    g = 30 * pies + 15 * l + 3 * m
    return [pies, l, m, g]
end
