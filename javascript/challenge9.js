const carPassing = (cars, speed) => {
    cars.push({"speed": speed, "time": Number(Date.now()) })
    return cars
  }  