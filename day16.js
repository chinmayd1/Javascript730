//                0     1   2     3
let birthYear = [2000,2001,2002,2003]
//[26,25,24,23]
let ages = []
for(let i = 0 ; i < birthYear.length ; i++){
    //console.log(i)
    //console.log(birthYear[i])
    //console.log(2026 - birthYear[i])
    ages.push(2026 - birthYear[i])
}
console.log(ages)

let q1 =  birthYear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2026 - el
})
console.log(q1)

//console.log(birthYear.map(el=>2026-el))

//program 2 
let numbers = [11,22,33,44,55]
let q2 = numbers.map(function(el,index,arr){
    return el + 10
})
console.log(q2)

// program 3

let marks = [66,77,88,78,87,99,45]
let above70 = [] // [77]
for(let i = 0 ; i < marks.length ; i++){
    // console.log(i)// 0
    //console.log(marks[i])
    if(marks[i]> 70){
       // console.log(marks[i])
       above70.push(marks[i])
    }
}
console.log(above70)
let q3 = marks.filter(function(el,index,arr){
    return el > 70
})
console.log(q3)

// program 4

let transactions = [22,33,-56,77,88,-20,55,66,-77]


let deposits = transactions.filter(function(el,index,arr){
    return el > 0
})
let withdrawl = transactions.filter(function(el,index,arr){
    return el < 0
})

console.log(deposits)
console.log(withdrawl)




