var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, elem) {
  var array1 = array;
  array1.unshift(elem);
  return array1;  
}

function destructivelyAddElementToBeginningOfArray(array, elem) {
  array.unshift(elem);
  return array;
}

function addElementToEndOfArray(array, elem) {
  var array1 = array;
  array1.push(elem);
  return array1;  
}

function destructivelyAddElementToEndOfArray(array, elem) {
  array.push(elem);
  return array;
}

function accessElementInArray(array, index) {
  var item = array[index];
  return item;
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray (array) {
  var arrays = array.slice(1);
  return arrays;
}

function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray (array) {
  var arr = array.slice(0, array.length -1);
  return arr;
}



