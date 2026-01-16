

// concat
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let arr3 = array1.concat(array2);
console.log(arr3); // [1, 2, 3, 4, 5, 6]
let array4 = array2.concat(array1);
console.log(array4); 

// 24 27 29 08

// slice
//              0          1        2        3          4
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
//              -5       -4        -3        -2        -1
//slice(startIndex, endIndex (not included))
let r1 = fruits.slice(1); 
console.log(r1); // ["banana", "cherry", "date", "elderberry"]

let r2 = fruits.slice(1,4)
console.log(r2); // ["banana", "cherry", "date"]

let r3 = fruits.slice(-4,-1)
console.log(r3); // ["banana", "cherry", "date"]

let r4 = fruits.slice(-5) // creates a shallow copy of the array
console.log(r4)

let r5 = fruits.slice(0,-1)
console.log(r5)

// splice(index,numberofElementsTObeDeleted)
//              0         1      2      3      4
let names = ["chinmay","samay","sham","ram","satish"]
// names.pop()
// names.shift()
// names.splice(2,2)
names.splice(1,3)

// reverse()
let numbersA = [11,22,33]
numbersA.reverse() // [33,22,11]

// sort()
country  = ['india','srilanka','bangladesh','canada']
country.sort() // ["bangladesh","canada","india","srilanka"]
console.log(country)

// indexOf()
//             0   1  2  3 4
let numbers = [11,22,33,44,55]
let w2 = numbers.indexOf(22)
console.log(w2)
let w3 = numbers.indexOf(222)
console.log(w3) // -1

let w4 = numbers.at(3)
console.log(w4)

// 1 hr
// objects