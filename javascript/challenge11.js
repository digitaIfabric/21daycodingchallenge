const busTimes = (buses) => {
  const times = {}
  for (let [key, value] of Object.entries(buses)) {
    times[key] = value[distance]/value[speed]
    }
    console.log(times)
    return times
}
