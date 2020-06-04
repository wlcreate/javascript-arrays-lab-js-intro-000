var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
//adds to end of og
function destructivelyAppendKitten(name) {
  return kittens.push("Ralph")
}
//adds to beginning of og
function destructivelyPrependKitten(name) {
  return kittens.unshift("Bob")
}
//remove last from og
function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}
//remove first from og
function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}
//add to end & new array
function appendKitten(name) {
  return kittens.concat(name)
}
//add to beginning & new array
function prependKitten(name) {
  return [name, ...kittens]
}
//removes the last kitten in og array, returns a new array & leaves og alone
function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}
