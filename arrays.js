chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, itemToAdd) {
  return Array.prototype.concat(itemToAdd, array);
}

function destructivelyAddElementToBeginningOfArray(array, itemToAdd) {
  array.unshift(itemToAdd);
  return array;
}

function addElementToEndOfArray(array, itemToAdd) {
  return Array.prototype.concat(array, itemToAdd);
}

function destructivelyAddElementToEndOfArray (array, itemToAdd) {
  array.push(itemToAdd);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0,array.length-1)
}
