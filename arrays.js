var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, first){
  return [first, ...arr];
}

function destructivelyAddElementToBeginningOfArray(arr, first){
  arr.unshift(first);
  return arr;
}

function addElementToEndOfArray(arr, last){
  return [...arr, last];
}

function destructivelyAddElementToEndOfArray(arr, last){
  arr.push(last);
  return arr;
}

function accessElementInArray(arr, index){
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray(arr){
  arr = arr.slice(1);
  return arr;
}

function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr){
  arr = arr.slice(0, arr.length-1);
  return arr;
}
