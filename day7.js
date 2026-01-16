

let names = ["alice","bob","charlie","david","eva"];
names.unshift("zara")
console.log(names);
//["zara",alice","bob","charlie","david","eva"];
let e1 = names.shift()
console.log(e1);
console.log(names);

// map()

// program 1
let numbers = [1,2,3,4,5,6,7,8,9,10]
let tableofTwo = numbers.map(function(el,index,arr){
    //console.log(el,index,arr)
    return el * 2
})
console.log(tableofTwo)

// filter()
let transactions = [2000,-6777,3000,-566,4000,5000,-5555,6000,7000]
let deposits = transactions.filter(function(el,index,arr){
    return el > 0
})
console.log(deposits)
let withdrawls = transactions.filter(function(el,index,arr){
    return el < 0
})
console.log(withdrawls)
// reduce()
let nums = [5,10,15]
let addition= nums.reduce(function(acc,el,index,arr){
    return acc + el // 30
},0)
console.log(addition)

// forEach()
let cities = ["pune","mumbai","bangalore","chennai"]
cities.forEach(function(el){
    console.log("welcome to "+el)
})

// find()
//            0  1   2  3  4  5 6  7  8
let scores = [11,22,33,44,55,66,77,88,99]
let greaterThanFifty = scores.filter(function(el){
    return el > 50
})
console.log(greaterThanFifty)

let firstValue = scores.find(function(el){
    return el > 50
})
console.log(firstValue)

// findIndex()
let firstIndex = scores.findIndex(function(el,index,arr){
    return el > 50
})
console.log(firstIndex);


// every()
let marks = [90,80,70,60,50]
let q1 = marks.every(function(el,index,arr){
    return el > 55
})
console.log(q1); // true

// some()
let q2 = marks.some(function(el,index,arr){
    return el > 80
})
console.log(q2); // false