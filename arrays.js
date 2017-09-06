
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']


function addElementToBeginningOfArray (array, element) {
  return [element, ...array]
}
function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray (array, element) {
  return [...array, element]
}
function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element)
  return array
}


function accessElementInArray (array, index) {
  return array[index]
}


function removeElementFromBeginningOfArray (array) {
  return array.slice(1)
}
function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift()
  return array
}

function removeElementFromEndOfArray  (array) {
  return array.slice(0, array.length - 1)
}
function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop()
  return array
}

/*
// FROM THE MIDDLE OF AN ARRAY
// splice()

items = [1, 2, 3, 4]
// "at index 1, remove 1 item and add 6 and add 7"
// it returns the removed items: [2]
// and adds the items to add starting at the removal index
items.splice(1, 1, 6, 7)

items // [1, 6, 7, 3, 4]


// BONUS

// We can use slice, combined with the spread operator, to make removing from the middle of an array much easier.
var items = [1, 2, 3, 4, 5]

// let's remove the third element

// a slice from the start up to but not including index 2 (the third element)
// and a slice from index 3 to the end
[...items.slice(0, 2), ...items.slice(3)] // [1, 2, 4, 5]

*/
