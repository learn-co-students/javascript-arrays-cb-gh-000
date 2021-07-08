
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, item) {
  var otherarray = [item, ...arr];
  return otherarray;
}

function destructivelyAddElementToBeginningOfArray(arr, item) {
  arr.unshift(item);
  return arr;
}

function addElementToEndOfArray(arr, element) {
  arr = [...arr, element];
  return arr;
}

function destructivelyAddElementToEndOfArray(arr, element) {
  arr.push(element);
  return arr;
}

function accessElementInArray(arr, element) {
  return arr[element];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray(arr) {
  arr = arr.slice(1);
  return arr;
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(0, arr.length - 1);
}
