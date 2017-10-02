var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
];
function addElementToBeginningOfArray(array, element) {
  //chocolateBars.unshift("romashka");
  var newArr = array.slice(0);
   newArr.unshift(element);
   return newArr;
}
addElementToBeginningOfArray(chocolateBars, "foo");

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}
destructivelyAddElementToBeginningOfArray(chocolateBars, "foo");//[0]
//destructivelyAddElementToBeginningOfArray(chocolateBars, 1);




function addElementToEndOfArray(array, element) {
  var newArr2 = array.slice(0);
  newArr2.push(element);
  return newArr2;
}
addElementToEndOfArray(chocolateBars, "foo");



function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}
destructivelyAddElementToEndOfArray(chocolateBars, "foo");


function accessElementInArray(array, index) {
  return array[index];
}
accessElementInArray(chocolateBars, 3);


function removeElementFromBeginningOfArray(array) {
  var newArr3 = array.slice(0);
  newArr3.shift(0);
  return newArr3;
}
removeElementFromBeginningOfArray(chocolateBars);


function removeElementFromEndOfArray(array) {
  var newArr4 = array.slice(0);
  newArr4.pop();
  return newArr4;
}
removeElementFromEndOfArray(chocolateBars);
