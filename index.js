// Code your solution here
function findMatching(drivers, strg) {
  return drivers.filter((drivers) => {
    return drivers.toLowerCase() === strg.toLowerCase()
  })
}

function fuzzyMatch(drivers, strg) {
  return drivers.filter(driver => {
    return driver.toLowerCase().substring(0, strg.length) === strg.toLowerCase()
  })
}

function matchName(drivers, strg) {
  return drivers.filter(driver => {
    return driver.name === strg
  })
}