var chocolateBars=["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray (arr,ele) {
  return [ele,...arr];
}

function destructivelyAddElementToBeginningOfArray (arr,ele) {
    arr.unshift(ele);
    return arr;
}

function destructivelyAddElementToEndOfArray (arr,ele) {
    arr.push(ele);
    return arr;
}

function addElementToEndOfArray (arr,ele) {
  return [...arr,ele];
}

var accessElementInArray = (arr,ind) => {  return arr[ind];};
var destructivelyRemoveElementFromBeginningOfArray = (arr,ind) => {arr.shift();return arr };
var destructivelyRemoveElementFromEndOfArray = (arr,ind) => {arr.pop();return arr };
var removeElementFromBeginningOfArray = (arr,ind) => {return arr.slice(1); };
var removeElementFromEndOfArray = (arr,ind) => {return arr.slice(0,arr.length-1); };

