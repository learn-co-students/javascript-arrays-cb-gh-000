var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, value){
  arr = [value, ...arr]
  return arr
}

function destructivelyAddElementToBeginningOfArray(arr, value){
  arr.unshift(value)
  return arr
}

function addElementToEndOfArray(arr, value){
  arr = [...arr, value]
  return arr
}

function destructivelyAddElementToEndOfArray(arr, value){
  arr.push(value)
  return arr
}

function accessElementInArray(arr, index){
  return arr[index]
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift()
  return arr
}

function removeElementFromBeginningOfArray(arr){
  newArr = arr.slice(1)
  return newArr
}

function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop()
  return arr
}

function removeElementFromEndOfArray(arr){
  newArr = arr.slice(0, arr.length - 1)
  return newArr
}
