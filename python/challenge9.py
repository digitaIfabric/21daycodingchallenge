from datetime import date

def carPassing(cars, speed): 
    cars.append({"speed": speed, "time": date.today()})
    return cars