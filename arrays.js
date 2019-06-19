var chocolateBars = ['snickers','hundred grand','kitkat','skittles']

var addElementToBeginningOfArray = (chocolateBars1,element) =>{
  return  [element,...chocolateBars1] 
}

var destructivelyAddElementToBeginningOfArray = (chocolateBars1,element) =>{
  chocolateBars1.unshift(element)
  return chocolateBars1
  
}

var addElementToEndOfArray = (chocolateBars1,element) =>{
  return [...chocolateBars1,element]
}

var destructivelyAddElementToEndOfArray = (chocolateBars1,element) =>{
 chocolateBars1.push(element)
  return chocolateBars1
  
}

var accessElementInArray = (chocolateBars1,index) =>{
  return chocolateBars1[index]
}

var destructivelyRemoveElementFromBeginningOfArray = (chocolateBars1) =>{
  
   chocolateBars1.shift() 
  return chocolateBars1
  
}

var removeElementFromBeginningOfArray = (chocolateBars1) =>{
  
afterremoving = chocolateBars1.slice(1)
return afterremoving
}

var destructivelyRemoveElementFromEndOfArray = (chocolateBars1) =>{
  chocolateBars1.pop()
  return chocolateBars1
  
}

var removeElementFromEndOfArray = (chocolateBars1) =>{
  after_removing_but_not_altering =  chocolateBars1.slice(0,chocolateBars1.length-1)
  return after_removing_but_not_altering
  
}



