var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

var addElementToBeginningOfArray = (array, element) => {
  var out_array = array.slice();
  out_array.unshift(element);
  return out_array
}

var destructivelyAddElementToBeginningOfArray = (array, element) => {
  array.unshift(element);
  return array
}

var accessElementInArray = (array, index) => {
  return array[index]
}

var destructivelyRemoveElementFromBeginningOfArray = array => {
  array.shift();
  return array
}

var removeElementFromBeginningOfArray = array => {
  return array.slice(1)
}

var destructivelyRemoveElementFromEndOfArray = array => {
  array.pop();
  return array
}

var removeElementFromEndOfArray = array => {
  return array.slice(0, array.length - 1)
}

var addElementToEndOfArray = (array, element) => {
  var out_array = array.slice();
  out_array.push(element);
  return out_array
}

var destructivelyAddElementToEndOfArray = (array, element) => {
  array.push(element);
  return array
}
