var chocolateBars = ["snickers","hundred grand","kitkat","skittlest"];
function addElementToBeginningOfArray(array, element) {
  var temp = array;
  temp.unshift(element);
  return temp;
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  var temp = array;
  temp.unshift(element);
  return temp;
}
function addElementToEndOfArray(array, element) {
  var temp = array;
  temp.push(element);
  return temp;
}
function destructivelyAddElementToEndOfArray(array, element) {
  var temp = array;
  temp.push(element);
  return temp;
}
function accessElementInArray(array, index) {
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  var temp = array;
  temp.shift();
  return temp;
}
function removeElementFromBeginningOfArray(array) {
//  var temp = array;
//  temp.slice(0);
  //return temp;
  return array.slice(1);
}
function destructivelyRemoveElementFromEndOfArray(array) {
  var temp = array;
  temp.pop();
  return temp;
}
function removeElementFromEndOfArray(array) {
  var temp = array.slice(0, array.length - 1);
  return temp;
}
