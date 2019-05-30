var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, elt) {
  newArr = [elt, ...arr];
  return newArr;
}

function addElementToEndOfArray(arr, elt) {
  newArr = [...arr, elt];
  return newArr;
}

function destructivelyAddElementToEndOfArray(arr, elt) {
  arr.push(elt);
  return arr;
}

function destructivelyAddElementToBeginningOfArray(arr, elt) {
  arr.unshift(elt);
  return arr;
}

function accessElementInArray(arr, index) {
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr;
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr) {
  newArr = arr.slice(0, arr.length -1);
  return newArr;
}

function removeElementFromBeginningOfArray(arr) {
  newArr = arr.slice(1);
  return newArr;
}
