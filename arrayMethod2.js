//               0     1   2    3
let birthYear = [2000,2001,2002,2003]
let ages = []
// [26,25,24,23]
for(let i = 0 ; i < birthYear.length ; i++){
    //console.log(i)
    //console.log(ages[i])
    //console.log(2026-birthYear[i])
    ages.push(2026-birthYear[i])
}
console.log(ages)


birthYear = [2000,2001,2002,2003]
let ages2 = birthYear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2026 - el
})
console.log(ages2)

let numbers = [11,22,33,44]
let q1 = numbers.map(function(el,index,arr){
    return el + 10
})
console.log(q1)


// program 2

let marks = [92,86,85,66,73,99]
let above85 = []
for(let i = 0 ; i < marks.length ; i++){
    // console.log(i)
    //console.log(marks[i])
    if(marks[i] > 85){
        above85.push(marks[i])
    }
}
console.log(above85)
// filter
marks = [92,86,85,66,73,99]
let above852 = marks.filter(function(el,index,arr){
    return el > 85
})
console.log(above852)

// reduce 
let numberB = [11,22,33]
let total = 0
for(let i = 0 ; i < numberB.length ; i++){
    //console.log(i)
    //console.log(numberB[i])
    total = total + numberB[i]
    //       0    +     11   ----> 11
    //       11   +     22   ----> 33
    //       33   +     33   ----> 66
}

console.log(total)
let q2 = numberB.reduce(function(acc,el,index,arr){
    return acc + el
},0)
console.log(q2)

let cities = ["pune","mumbai","kolkata","chennai"]
for(let i = 0 ;  i < cities.length ; i++){
    console.log("welcome " + cities[i])
}

cities.forEach(function(el,index,arr){
    console.log('welcome  '+ el)
})


