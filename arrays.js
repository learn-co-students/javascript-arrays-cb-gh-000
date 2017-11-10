var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var addElementToBeginningOfArray = (arr, element) => {
    var newArr = [element, ...arr];
    return newArr;
}

var destructivelyAddElementToBeginningOfArray = (arr, element) => {
    arr.unshift(element);
    return arr;
}

var addElementToEndOfArray = (arr, element) => {
    var newArr = [...arr, element];
    return newArr;
}

var destructivelyAddElementToEndOfArray = (arr, element) => {
    arr.push(element);
    return arr;
}

var accessElementInArray = (arr, index) => {
    return arr[index];
}

var destructivelyRemoveElementFromBeginningOfArray = arr => {
    arr.shift();
    return arr;
}

var removeElementFromBeginningOfArray = arr => {
    return arr.slice(1, arr.length);
}

var destructivelyRemoveElementFromEndOfArray = arr => {
    arr.pop();
    return arr;
}

var removeElementFromEndOfArray = arr => {
    return arr.slice(0, arr.length - 1);
}
