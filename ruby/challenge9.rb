def carPassing(cars, speed)
    cars << ({"time": Time.new.to_i, "speed": speed})
    return cars
end

# cars = [ { time: 1568329654807, speed: 40, }, { time: 1568329821632, speed: 42, }, { time: 1568331115463, speed: 35 } ]
# speed = 38
# carPassing(cars, speed)
