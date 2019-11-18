const countTickets = (tickets) => {
    let object = { red: 0, green: 0, blue: 0 };
    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i] === 'red') {
            object['red']++;
        } else if (tickets[i] === 'green') {
            object['green']++;
        } else if (tickets[i] === 'blue') {
            object['blue']++;
        }
    }
    return object;
};

const bestOdds = (tickets, raffleEntries) => {
    let tally = countTickets(tickets)
    let rT = Object.keys(tally).map(i => tally[i])
    let rE = Object.keys(raffleEntries).map(i => raffleEntries[i])
    let result = rT.map(function (n, i) { return n / rE[i]; });
    console.log(result)
    if (result[0] >= result[1]) {
        if (result[2] > result[0]) {
            return "You have the best odds of winning the blue raffle."
        }
        return "You have the best odds of winning the red raffle."
    } else {
        if (result[2] >= result[1]) { 
            return "You have the best odds of winning the blue raffle."
        } else {
          return "You have the best odds of winning the green raffle."
        }
    }
};
