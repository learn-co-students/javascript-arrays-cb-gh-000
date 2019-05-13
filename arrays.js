
chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToBeginningOfArray(array, element){
  newArray = [];
  newArray.push(element);
  Array.prototype.push.apply(newArray,array);
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function addElementToEndOfArray(array, element){
  newArray = [];
  newArray.push(element);
  Array.prototype.unshift.apply(newArray,array);
  return newArray;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  newArray = [];
  Array.prototype.push.apply(newArray, array.slice(1));
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  newArray = [];
  Array.prototype.push.apply(newArray, array);
  newArray.pop();
  return newArray;
}