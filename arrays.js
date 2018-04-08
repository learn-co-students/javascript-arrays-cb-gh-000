const chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

function addElementToBeginningOfArray(arr, el) {
  let outputArr = arr.unshift(el);
  return outputArr;
}

function destructivelyAddElementToBeginningOfArray(arr, el) {
  return arr.unshift(el);
}

function accessElementInArray(arr, i) {
  return arr[i];
}
function destructivelyRemoveElementFromBeginningOfArray(arg) {
  return arr.shift();;
}
