var chocolateBars = ['snikers', 'hundred grand', 'kitkat', 'skittles']
function destructivelyAddElementToBeginningOfArray(array, element) {
  var array = [element, ...array];
  return array;
}
function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}
function destructivelyAddElementToEndOfArray(array, element) {
  var array = [...array, element];
  return array;
}
function addElementToEndOfArray(array, element) {
  return [...array, element];
}
function accessElementInArray(array, index) {
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  var array.shift();
  return array;
}
function removeElementFromBeginningOfArray(array) {
  return array.slice[1]
}
function destructivelyRemoveElementFromEndOfArray(array) {
  var array.shift();
  return array ;
}
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}
