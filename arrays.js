function addElementToBeginningOfArray(arr, ele) {
  return [ele, ...arr];
}

function destructivelyAddElementToBeginningOfArray(arr, ele) {
  arr.unshift(ele);
}

function addElementToEndOfArray(arr, ele) {
  return [...arr, ele];
}

function destructivelyAddElementToEndOfArray(arr, ele) {
  arr.push(ele);
}

function accessElementInArray(arr, ind) {
  return arr[ind];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray(arr) {
  return arr.slice(1);
}
