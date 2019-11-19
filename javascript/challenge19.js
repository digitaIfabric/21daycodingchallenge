const pumpkinSpice = money => {
    let pies = Math.floor(money/5)
    let remainder = money%5;
    let lattes = Math.floor(remainder/3);
    remainder = remainder%3;
    let macarons = remainder
    let grams = pies*30+lattes*15+macarons*3
    return [pies, lattes, macarons, grams];
}
