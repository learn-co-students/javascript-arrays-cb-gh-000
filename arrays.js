chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, item) {
	newArr = [item, ...array];
	return newArr;
}

function destructivelyAddElementToBeginningOfArray(array, item) {
	array.unshift(item);
	return array;
}

function addElementToEndOfArray(array, item) {
	newArray = [...array, item];
	return newArray;
}

function destructivelyAddElementToEndOfArray(array, item) {
	array.push(item);
	return array;
}

function accessElementInArray(array, index) {
	return array[index];
}

function destructivelyRemoveElementFromEndOfArray(array) {
	array.pop();
	return array;
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
	array.shift();
	return array;
}

function removeElementFromEndOfArray(array) {
	newArr = array.slice(0, array.length - 1);
	return newArr;
}

function removeElementFromBeginningOfArray(array) {
	newArr = array.slice(1);
	return newArr;
}
