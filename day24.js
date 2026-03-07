


// let nums = [11,22,33]
// let names = ["chinmay","deshpande","shirish"]
// let info = ["chinmay",7709192441,34]

// console.log(nums[0])
// console.log(nums[1])
// console.log(nums[2])
// evrthing is object ---> properties and methods 

//             0          1        2
let names = ["chinmay","shrish","sachin"]
// index starts with zero
console.log(names[0])
console.log(names.length)
console.log(names[names.length-1])
//names.length-1 is always the lastindex 


// program 2
//                 0         1         2          3
let countries = ["india","england","srilanka","bangladesh"]
for(let i = 0 ; i < countries.length  ; i++){ 
    //console.log(i) // 0  // 1 // 2 // 3
    console.log(countries[i])
}

for(let i = countries.length-1 ; i >= 0 ; i--){
    //console.log(i)
    console.log(countries[i])
}

// program 3
countries = ["india","england","srilanka","bangladesh"]
let i1 = 0
while(i1 < countries.length){
    //console.log(i1)
    console.log(countries[i1])
    i1 = i1 + 1
}


// program 3

// Gym
// Action - Excerxise
// Return - Health

//          0         1        2
names = ["chinmay","shrish","sachin"]
let q1 = names.push("raj")
console.log(q1)
console.log(names)

names = ["chinmay","shrish","sachin"]
let q2 = names.unshift('sameer')
console.log(names)
console.log(q2)


names = ["chinmay","shrish","sachin"]
let q3 = names.pop()
console.log(q3)
console.log(names)

names = ["chinmay","shrish","sachin"]
let q4 = names.shift()
console.log(q4)
console.log(names)

// property - length
// methods - push(), pop(),shift(), unshift()

// program 5

let fruits = ["apple","banana","grapes","oranges","oranges"]
let q5 = fruits.includes("apple")
let q6 = fruits.includes("Apple")
console.log(q5)
console.log(q6)
//          0        1       2       3         4        5          6
fruits = ["apple","banana","apple","grapes","oranges","oranges","apple"]
let q7 = fruits.indexOf("apple")
let q8 = fruits.indexOf("apple",1)
let q9 = fruits.lastIndexOf("apple")
console.log(q7)
console.log(q8)
console.log(q9)

//                  0           1            2      3       4
let vegetables = ["carrot","cauliflower","potato","onion","brinjal"]
let q10 =  vegetables.at(2)
console.log(q10)

let q11 = vegetables.join("-")
console.log(q11)

let q12 = q11.split('-')
console.log(q12)


// program 4
vegetables = ["carrot","cauliflower","potato","onion","brinjal"]
let q15 = vegetables.sort()
console.log(q15)
let q16 = q15.reverse()
console.log(q16)