
// map()

let numbers = [11,22,33,44]
let q1 = numbers.map(function(el,index,arr){
    return el + 10
})
console.log(q1)

// filter()
let marks = [90,78,44,55,66]
let q2 = marks.filter(function(el,index,arr){
    return el > 60
})
console.log(q2)

// reduce()
let nums = [11,22,33]
let q3 = nums.reduce(function(acc,el,index,arr){
    return el + acc
},0)
console.log(q3)

// forEach()
let names = ["sarika","raj","chinmay","ninad"]
names.forEach(function(el,index,arr){
    console.log("welcome "+el)
})

// find()

let cities = ["pune","mumbai","goa","chennai"]
let q5 = cities.filter(function(el,index,arr){
    return el.length > 5
})
console.log(q5)

let q6 = cities.find(function(el,index,arr){
    return el.length > 5
})
console.log(q6)

let q7 = cities.findIndex(function(el,index,arr){
    return el.length > 5
})
console.log(q7)


// every()
let evenNumber = [2,4,6,8,10,12,14,16,18,5]
let q8 = evenNumber.every(function(el,index,arr){
    return el % 2 == 0
})
console.log(q8)


// some
let q9 = evenNumber.some(function(el,index,arr){
    return el % 2 != 0
})
console.log(q9)


// push() , pop(), shift(), unshift()
// includes(), indexOf(), reverse(), sort()
// at(), map(), filter(),reduce(), forEach()
// find(), findIndex(), some(),every(), join(),concat()
// slice(), splice(),fill()


let info2 = ["chinmay","deshpande",34]
let q10 = info2.join("-")
console.log(q10)

let q11 =  q10.split('-')
console.log(q11)

//             0         1        2       3       4
let fruits = ["apple","mango","banana","orange","grapes"]
//              -5      -4      -3       -2        -1
let q12 = fruits.slice(1)
console.log(q12)
console.log(fruits.slice(1,4))
console.log(fruits.slice(-5,4))
console.log(fruits.slice(1,-1))
console.log(fruits.slice(-4,-1))
console.log(fruits.slice(-1,-4))

fruits = ["apple","mango","banana","orange","grapes"]

// fruits.pop()
// fruits.unshift()
//fruits.splice(indexNumber,numberOfElements)
//fruits.splice(indexNumber,numberOfElements,rep1,rep2)

fruits.splice(3,1)
fruits.splice(3,2,"chikoo","berry")
console.log(fruits)

fruits = ["apple","mango","banana","orange","grapes"]
//console.log(fruits.fill("@",1))
console.log(fruits.fill("@",1,4))

// Array Done