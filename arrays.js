var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
];

addElementToBeginningOfArray = (array, element) => {
  const anotherArray = [element, ...array]
  return anotherArray;
};

destructivelyAddElementToBeginningOfArray = (array, element) => {
  return array.unshift(element)
};

addElementToEndOfArray = (array, element) => {
  const anotherArray = [array, ...element]
  return anotherArray;
}

destructivelyAddElementToEndOfArray = (array, element) => {
  return array.push(element);
}

accessElementInArray = (array, index) => {
  return array[index];
}

destructivelyRemoveElementFromBeginningOfArray = (array) => {
  array.shift()
  return array;
}

removeElementFromBeginningOfArray = (array) => {
  return array.slice(1);
}

destructivelyRemoveElementFromEndOfArray = (array) => {
  return array.pop();
}

removeElementFromEndOfArray = (array) => {
  return array.slice(-1);
}
