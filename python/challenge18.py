def countTickets(tickets):
    object = { 'red': 0, 'green': 0, 'blue': 0 }
    for i in range(0, len(tickets)):
        if (tickets[i] == 'red'):
            object['red'] = object['red'] + 1
        elif (tickets[i] == 'green'):
            object['green'] = object['green'] + 1
        elif (tickets[i] == 'blue'):
            object['blue'] = object['blue'] + 1
    return object

def bestOdds(tickets, raffleEntries): 
    tally = countTickets(tickets)
    red = 'Red'
    odds = []
    p = [0.3, 0.3, 0.5]
    for color in tally:
        odds.append(tally[color]/raffleEntries[color])
    index_max = max(range(0,len(odds)), key=odds.__getitem__)
    if (index_max == 0):
        return 'You have the best odds of winning the Red raffle.'
    elif (index_max == 1):
        return 'You have the best odds of winning the Green raffle.'
    elif (index_max == 2):
        return 'You have the best odds of winning the Blue raffle.'

# tickets = [ 'red', 'red', 'green', 'blue', 'green' ]
# raffleEntries = { 'red': 10, 'green': 30, 'blue': 15 }
# bestOdds(tickets, raffleEntries)
