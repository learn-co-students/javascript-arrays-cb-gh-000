var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

var addElementToBeginningOfArray = (arr, elem) =>([elem, ...arr])

var destructivelyAddElementToBeginningOfArray = (arr, elem) => { arr.unshift(elem); return arr;}

var addElementToEndOfArray = (arr, elem) => ([...arr, elem])

var destructivelyAddElementToEndOfArray = (arr, elem) => {arr.push(elem); return arr;}

var accessElementInArray = (arr, i) => (arr[i])

var destructivelyRemoveElementFromBeginningOfArray = (array) => {array.shift(); return array;}

var removeElementFromBeginningOfArray = arr => (arr.slice(1))

var destructivelyRemoveElementFromEndOfArray = arr => {arr.pop(); return arr;}

var removeElementFromEndOfArray = arr =>(arr.slice(0, arr.length -1))
