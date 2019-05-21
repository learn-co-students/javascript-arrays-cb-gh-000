var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array, element) {
  var chocolateBars = array;
  chocolateBars.unshift(element);
  return chocolateBars;
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var chocolateBars = array;
  chocolateBars.push(element);
  return chocolateBars;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
    return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  var chocolateBars = array;
  chocolateBars.shift();
  return chocolateBars;
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length-1);
  // return chocolateBars;
}
