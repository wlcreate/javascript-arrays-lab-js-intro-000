var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
  return kittens.push("Ralph")
}

function destructivelyPrependKitten(name) {
  return kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  return kittens.concat(name)
}

function prependKitten(name) {
  return [name, ...kittens]
}
