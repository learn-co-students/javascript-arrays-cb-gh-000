function addElementToBeginningOfArray(array, element) {
    return array = [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
    array.unshift(element);
    return array;
}

function addElementToEndOfArray(array, element) {
    return array = [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
    array.push(element);
    return array;
}

function accessElementInArray(array, index) {
    return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
    array.shift();
    return array;
}

function removeElementFromBeginningOfArray(array) {
    var a = array.slice(1);
    return a;
}

function destructivelyRemoveElementFromEndOfArray(array) {
    array.pop();
    return array;
}

function removeElementFromEndOfArray(array) {
    var a = array.slice(0, array.length - 1);
    return a;
}

var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"];
