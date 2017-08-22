var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(arr,element){
  var result = arr
  result = [element, ...arr]
  return result;
}

function destructivelyAddElementToBeginningOfArray(arr,element){
  arr.unshift(element)
  return arr
}

function addElementToEndOfArray(arr,element){
  var tmpArr = arr
  tmpArr.push(element)
  return tmpArr
}

function destructivelyAddElementToEndOfArray(arr,element){
  arr.push(element)
  return arr
}

function accessElementInArray(arr,index){
  return arr[index]
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift()
  return arr
}

function removeElementFromBeginningOfArray(arr){
  return arr.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop()
  return arr
}

function removeElementFromEndOfArray(arr){
  return arr.slice(0,arr.length - 1)
}
