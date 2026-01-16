
// let surname = ["deshpande","sharma","patil","kumar"]; 
// surname.push("gupta")
// console.log(surname);

// surname.unshift("joshi")
// console.log(surname);

// surname.pop();
// console.log(surname);

// surname.shift();
// console.log(surname);

// let q = surname.includes("patil")
// console.log(q);

// let q2 = surname.reverse();
// console.log(q2);

// let arr1 = [1,2,3]
// let arr2 = [4,5,6]  
// let q3 = arr1.concat(arr2)
// console.log(q3);

// let info = ["chinmay","deshpande","gmail.com"]
// let email = info.join(".")
// console.log(email);

// // program 1
// //                 0    1    2    3
// let birthYear = [1989,1990,1991,1992]
// let ages = [] //[36,35,34,35]
// // [36,35,34,33]
// console.log(ages)
// for(let i = 0 ; i < 4 ; i++){
//     //console.log(i)
//     //console.log(birthYear[i])
//     //console.log(2025 - birthYear[i])
//     let g = 2025 - birthYear[i]
//     ages.push(g)
// }
// console.log(ages)


// // program 2
// let marks = [90,89,44,55,66,78]
// //[90,89,78]
// let above70 = []
// console.log(above70)
// for(let i = 0 ; i < marks.length ; i++){
//     //console.log(i)
//     //console.log(marks[i])
//     if(marks[i] > 70){
//         above70.push(marks[i] )
//     }
// }
// console.log(above70)

// // program 3
// //             0   1  2
// let numbers = [11,22,33]
// let total = 0
// for(let i = 0 ; i < numbers.length ; i++){
//     //console.log(i)
//     //console.log(numbers[i])
//     total = total + numbers[i]
//    //        0   +  11
//    //       11   +  22
//    //       33   +  33
// }
// console.log(total)

// // program 4
// let cities = ["pune","mumbai","jaipur"]
// for(let i = 0 ; i < cities.length ; i++){
//    // console.log(i)
//     console.log("welcome "+cities[i])
// }



// old way
let birthYear = [1989,1990,1991,1992]
let ages = [] //[36,35,34,35]

for(let i = 0 ; i < birthYear.length ; i++){
    let g = 2025 - birthYear[i]
    ages.push(g)
}
console.log(ages)

// map(fn)---> []
let ages2 = birthYear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2025 - el
})
console.log(ages2)

let numbers = [11,22,33]
// [21,32,43]
let q2 = numbers.map(function(el){
    return el + 10
})
console.log(q2)

// program 2

let marks = [90,89,44,55,66,78]
//[90,89,78]

let above70 = []
for(let i = 0 ; i < marks.length ; i++){
    if(marks[i] > 70){
        above70.push(marks[i] )
    }   
}
console.log(above70)
let q3 = marks.filter(function(el,index,arr){
    return el > 70
})
console.log(q3)


// program 3
let nums = [11,22,33]
let total = 0

for(let i = 0 ; i < nums.length ; i++){
    total = total + nums[i]
}
console.log(total)

let q4 = nums.reduce(function(acc,el,index,arr){
    return acc + el
},0)
console.log(q4)

// program 4
let cities = ["pune","mumbai","jaipur"]
for(let i = 0 ; i < cities.length ; i++){
    console.log("welcome "+cities[i])
}

cities.forEach(function(el,index,arr){
    console.log("welcome "+el)
})






