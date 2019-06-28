var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var old_array = array
  return old_array.unshift(element);
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array
}

function addElementToEndOfArray(array, element) {
  var old_array = array
  return old_array.push(element);
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array
}
function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
}
function removeElementFromBeginningOfArray(array) {
  new_array = array.slice(1)
  return new_array
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}
