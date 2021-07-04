var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray (arrary,toadd) {
  var toreturn = [toadd,...arrary]
  return toreturn
}

function destructivelyAddElementToBeginningOfArray (arrary,toadd) {
  arrary.unshift(toadd);
  return arrary
}

function destructivelyRemoveElementFromBeginningOfArray (arrary) {
  arrary.shift();
  return arrary;
}

function removeElementFromBeginningOfArray (arrary) {
  return arrary.slice(1);
}

function destructivelyRemoveElementFromEndOfArray (arrary) {
  return arrary.pop();
}

function removeElementFromEndOfArray (arrary) {
  return arrary.slice(0,arrary.length-1);
}

function addElementToEndOfArray (arrary,toadd) {
  return [...arrary,toadd];
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray (arrary,index) {
  return arrary[index];
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}
