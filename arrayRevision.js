
let numbers = [11,22,33]
let names = ["chinmay","shirish","sham"]
let info = ["chinmay","deshpande",34]
let flags = [true,false,true,false]

//              0  1  2  3  4  5  6   7  8
let numbersA = [11,22,33,44,55,55,66,77,55]
// does array stores the value by index
console.log(numbersA[0])
// human -- type  --- poonam
// properties --> name , gender , height weight
// methods - talk(),walk()
console.log(numbersA.length)

// program 2
//              0        1        2        3
let fruits = ["apple","mango","banana","grapes"]
console.log(fruits.length)// 4

for(let i = 0 ; i < fruits.length ; i++){
    //console.log(i)
    //console.log(fruits[i])
    if(fruits[i] == "banana"){
        console.log(i)
    }
}
//             0         1        2          3
let cities = ["pune","mumbai","banglore","kolkata"]
for(let i = 0 ; i < cities.length ; i++){
    console.log(cities[i])
}
// length -1 is always last index
for(let i = cities.length - 1 ; i >= 0 ; i--){
    console.log(cities[i])
}

let cities2 = ["pune","mumbai","banglore","kolkata","pune","pune"]
let count = 0
for(let i = 0 ; i < cities2.length ; i++){
   if(cities2[i] == "pune"){
        count = count + 1
   }
}
console.log(count)