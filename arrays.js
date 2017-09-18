chocolateBars = ["snickers","hundred grand","kitkat","skittles"]


function addElementToBeginningOfArray(list,elem){
  return [elem,...list]
}
function destructivelyAddElementToBeginningOfArray(list,elem){
  return list.unshift(elem)
}

function addElementToEndOfArray(list,elem){

  return [...list, elem]
}
function destructivelyAddElementToEndOfArray(list,elem){
  return list.push(elem)
}

function accessElementInArray(list,index){
  return list[index]
}

function destructivelyRemoveElementFromEndOfArray(list){
  list.pop()
  return list
}
function removeElementFromEndOfArray(list){
  return list.slice(0,list.length-1)  

}
