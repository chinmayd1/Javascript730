
// map()

let birthYear = [2000,2001,2002,2003]
//[26,25,24,23]
let e1 = birthYear.map(function(el,index,arr){
    return 2026 - el
})
console.log(e1)

let numbers = [11,22,33]
let e2 = numbers.map(function(el,index,arr){
    return el + 10
})
console.log(e2)


// filter()
let marks = [33,44,43,39,49,50,22,33]
let e3 = marks.filter(function(el,index,arr){
    return el > 30
})
console.log(e3)

let transactions = [10,-9,10,-8,3,2,9,-9]
let deposits = transactions.filter(function(el,index,arr){
    return el > 0
})
console.log(deposits)
let withdrawls = transactions.filter(function(el){
    return el < 0
})
console.log(withdrawls)

// reduce()
let numbersB = [11,22,33]
let total = 0
for(let i = 0 ; i < numbersB.length ; i++){
    total = total  + numbersB[i]
    //       0     +      11   ----> 11
    //      11     +      22   ----> 33
    //      33     +      33   -----> 66
}
// console.log(total)
// let e5 =  numbersB.reduce(function(acc,el,index,arr){
//     return acc + el
// },0)
// console.log(e5)
let e6 = numbersB.reduce(function(acc,el,index,arr){
    return acc + el
},5)
console.log(e6)

// forEach()
let cities = ["pune","mumbai","banglore","kolkata"]
for(let i = 0 ; i < cities.length ; i++){
    console.log("welcome "+ cities[i])
}
cities.forEach(function(el,index,arr){
     console.log("welcome "+ el)
})

// find()

let mks = [89,44,55,66,77,22,33]
let e7 =  mks.filter(function(el,index,arr){
    return el < 50   
})
console.log(e7)
//[44,22,33]
let e8 =  mks.find(function(el,index,arr){
    return el < 50   
})
console.log(e8)
// findIndex()
let e9 =  mks.findIndex(function(el,index,arr){
    return el < 50   
})
console.log(e9)


// every() --> boolean ---> true or false
let mk2 = [33,44,55,22,33,44,55]
let e10 = mk2.every(function(el,index,arr){
    return el > 30
})
console.log(e10)

// some()
mk2 = [33,44,55,22,33,44,55]
let e11 = mk2.some(function(el,index,arr){
    return el > 500
})
console.log(e11)


// map(el,index,arr) -> array
// filter(el,index,arr)-> array
// reduce((acc,el,index,arr),0) --> accumulated value
// forEach(el,index,arr) --> none
// find(el,index,arr) --> single value
// findIndex(el,index,arr) --> number
// some(el,index,arr) --> boolean
// every(el,index,arr) --> boolean
