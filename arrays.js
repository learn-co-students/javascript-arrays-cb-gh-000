var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function removeElementFromBeginningOfArray(array, element) {
  return array.slice(1)
}

function removeElementFromEndOfArray(array, element) {
  return array.slice(0,-1)
}


function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift()
  return array
}

function destructivelyRemoveElementFromEndOfArray(array, element) {
  array.pop()
  return array
}
