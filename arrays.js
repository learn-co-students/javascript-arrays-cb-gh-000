var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
var element = "mars"

function addElementToBeginningOfArray(chocolateBars, element) {
  chocolateBars = [element, ...chocolateBars]
  return chocolateBars
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, element) {
  chocolateBars.unshift(element)
  return chocolateBars
}

function addElementToEndOfArray(chocolateBars, element) {
  chocolateBars = [...chocolateBars, element]
  return chocolateBars
}

function destructivelyAddElementToEndOfArray(chocolateBars, element) {
  chocolateBars.push(element)
  return chocolateBars
}

function accessElementInArray(ourArr, index) {
  return ourArr[index]
}

function removeElementFromBeginningOfArray(ourArr) {
  return ourArr.slice(1)
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars, element) {
  chocolateBars.shift(element)
  return chocolateBars
}

function destructivelyRemoveElementFromEndOfArray(ourArr) {
  ourArr.pop()
  return ourArr
}

function removeElementFromEndOfArray(ourArr) {
  return ourArr.slice(0, ourArr.length - 1)
}
