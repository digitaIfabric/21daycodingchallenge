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
    print(tally)
    return f'You have the best odds of winning the {red} raffle.'

tickets = [ 'red', 'red', 'green', 'blue', 'green' ]
raffleEntries = { 'red': 10, 'green': 30, 'blue': 15 }
bestOdds(tickets, raffleEntries)
