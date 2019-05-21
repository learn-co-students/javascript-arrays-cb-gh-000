var chocolateBars = ['snickers', 'hundred grand','kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, el) {
  var newArray = arr;
  newArray.unshift(el);
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(arr, el) {
  arr.unshift(el);
  return arr;
}

function addElementToEndOfArray(arr, el) {
  var newArray = arr;
  newArray.push(el);
  return newArray;
}

function destructivelyAddElementToEndOfArray(arr, el) {
  arr.push(el);
  return arr;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
    array.shift();
    return array;
}

function removeElementFromBeginningOfArray(array) {
  array = array.slice(1);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  array.pop();
  return array;
}
