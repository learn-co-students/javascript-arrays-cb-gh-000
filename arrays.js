var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, x) {

  var newArray = [x, ...array];

  return newArray;
  
}

function destructivelyAddElementToBeginningOfArray(array, x) {

  array.unshift(x);

  return array;
  
}

function addElementToEndOfArray(array, x) {

  var newArray = [...array, x];

  return newArray;
  
}

function destructivelyAddElementToEndOfArray(array, x) {

  array.push(x);

  return array;
  
}

function accessElementInArray(array, n) {

  return array[n];
  
}

function destructivelyRemoveElementFromBeginningOfArray(array) {

  array.shift();

  return array;
  
}

function removeElementFromBeginningOfArray(array) {

  var newArray = array.slice(1);

  return newArray;
  
}

function destructivelyRemoveElementFromEndOfArray(array) {

  array.pop();

  return array;
  
}

function removeElementFromEndOfArray(array) {

  return array.slice(0, array.length - 1);
  
}