
// Gym 
// Action - Excercise
// Return - Health

// function addA(x,y){
//     return [11,22,33]
// }
// let q1 = addA(12,3)
// console.log(q1)

//push()
//              0         1      2       3       4
let names = ["chinmay","shirsh","ram","satish","sam"]
console.log(names)
let q2 = names.push("sarika")
console.log(q2)
console.log(names)

//unshift()

let cities = ["pune","mumbai","banglore","kolkata"]
let q3 = cities.unshift("ujjain")
console.log(q3)
console.log(cities)


//pop()
let numbers = [1,22,333,4444,55555]
let q4 = numbers.pop()
console.log(q4)
console.log(numbers)


//shift()
//                0        1         2          3
let countries = ["india","china","pakistan","srilanka"]
let q5 = countries.shift()
console.log(q5)
console.log(countries)

//includes()
countries = ["india","china","pakistan","srilanka"]
let q6 = countries.includes("china")
let q7 = countries.includes("Pakistan")
console.log(q7)

// indexOf()
//              0      1     2       3     4      5    6
let names2 = ["john","mike","sham","jay","john","ram","john"]
let q8 = names2.indexOf('John')
console.log(q8)
let q9 = names2.indexOf('john')
console.log(q9)
let q10 = names2.indexOf('john',3)
console.log(q10)
let q11 = names2.lastIndexOf('john')
console.log(q11)

// at()
let q12 = names2.at(5)
console.log(q12)

// sort()
let names3 = ["abhisha","chinmay","bimal","poorva"]
let q13 = names3.sort()
console.log(q13)

// reverse()
names3 = ["abhisha","chinmay","bimal","poorva"]
let q14 = names.reverse()
console.log(q14)

// join()
names3 = ["chinmay","deshapande",7709192441]
let q15 = names3.join("-")
console.log(q15)

// contact()
let numbersF = [11,22,33,44]
let numbersG = [55,66,77,88]

let q22 = numbersF.concat(numbersG)
console.log(q22)
