// 8 methods 
//                0     1    2   3
let birthYear = [2000,2001,2002,2003]
// [26,25,24,23]
let ages  = [] // [26,25,24,23]

for(let i = 0 ; i < birthYear.length ; i++){
    //console.log(i)
    //console.log(birthYear[i])
    //console.log(2026 - birthYear[i])
    ages.push(2026 - birthYear[i])
}
console.log(ages)
//            0    1   2     3
birthYear = [2000,2001,2002,2003]
let q1 = birthYear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2026 - el
})
console.log(q1)

let numbers = [11,22,33]
let q2 = numbers.map(function(el,index,arr){
    return el + 10
})
console.log(q2)

// filter
//           0  1  2  3  4
let marks = [89,34,55,66,77]
let above60 = []

for(let i = 0 ; i < marks.length ; i++){
    // console.log(i)
    // console.log(marks[i])
    if(marks[i] > 60){
        above60.push(marks[i])
    }
}
console.log(above60)

let q3 = marks.filter(function(el,index,arr){
    return el > 60
})
console.log(q3)


let transactions = [44,-55,66,-99,66,77,-88]

let deposit = transactions.filter(function(el,index,arr){
    return el > 0
})
let withdrawl = transactions.filter(function(el,index,arr){
    return el < 0
})
console.log(deposit)
console.log(withdrawl)

// program 3 

let nums = [11,22,33] // 66
let total = 0
let q44 = nums.reduce(function(acc,el,index,arr){
    return acc + el // 66
},0)
console.log(q44)

for(let i = 0 ; i < nums.length ; i++){
   // console.log(i)
   total = total + nums[i] 
   //       0    +   11  // 11
   //       11   +   22  // 33
   //       33   +   33  // 66
}
console.log(total)

// program 4

let cities = ["mumbai","banglore","kolakta","chennai"]
for(let i = 0 ; i < cities.length ; i++){
    //console.log(i)
    console.log("welcome "+ cities[i])
}
cities.forEach(function(el,index,arr){
    console.log("welcome "+ el)
})