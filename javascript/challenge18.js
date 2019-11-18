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
    let index = result.indexOf(Math.max(...result));         
    return `You have the best odds of winning the ${Object.keys(raffleEntries)[index]} raffle.`
};
