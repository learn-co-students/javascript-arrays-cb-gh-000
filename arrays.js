var chocolateBars = ["snickers","hundred grand", "kitkat","skittles"];

function accessElementInArray(array, index) {
  return array[index];
}

function addElementToBeginningOfArray(array, element){
   array.unshift(element);
   return array;
}

function addElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
   array.unshift(element);
   return array;
}

function destructivelyRemoveElementFromBeginningOfArray() {

}
