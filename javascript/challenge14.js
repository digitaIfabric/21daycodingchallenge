
const dynamicPricing = (numberOfPeople, distanceTraveled) => {
  let basePrice = 1.00 + distanceTraveled*0.25;
  let totalPrice = (numberOfPeople >= 30) ? basePrice + 0.25 : basePrice;
  return '$' + totalPrice.toFixed(2);
}
