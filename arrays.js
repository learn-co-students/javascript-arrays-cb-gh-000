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
