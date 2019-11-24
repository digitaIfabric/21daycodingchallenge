from decimal import getcontext, Decimal
getcontext().prec = 3

def dynamicPricing(numberOfPeople, distanceTraveled):
  basePrice = 1.00 + distanceTraveled*0.25
  totalPrice = (Decimal(basePrice) + Decimal(0.25)) if (numberOfPeople >= 30) else Decimal(basePrice)
  return '$' + str(Decimal(totalPrice))
