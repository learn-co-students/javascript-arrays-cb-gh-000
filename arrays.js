var chocolateBars = [
    'snickers',
    'hundred grand',
    'kitkat',
    'skittles'
];

function addElementToBeginningOfArray(array, element) {
    return [element, ...array];
};

function destructivelyAddElementToBeginningOfArray(array, element) {
    array.unshift(element);
    return array;
};

function addElementToEndOfArray(array, element) {
    return [...array, element];
};

function destructivelyAddElementToEndOfArray(array, element) {
    array.push(element);
    return array;
};

function accessElementInArray(array, element) {
    return array[element];
};

function removeElementFromBeginningOfArray(array) {
    return array.slice(1);
};

function destructivelyRemoveElementFromBeginningOfArray(array) {
    array.shift(1);
    return array;
};

function removeElementFromEndOfArray(array) {
    array.pop();
    return array;
};

function destructivelyRemoveElementFromEndOfArray(array) {
    array.pop();
    return array;
};
