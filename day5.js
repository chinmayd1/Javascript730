
//             0       1       2         3       4 
let names = [ "alice","bob","charlie","david","eva"]
// all the to the last of array
let q1 = names.push("frank") // add at the end
console.log(names);
console.log(q1); // 6

// gym 
// action ---to do exercise
// return -- good health


// pop -- remove from the end
let fruits = ["apple","banana","grapes","mango","orange"];
let q4 = fruits.pop(); 
console.log(q4)
console.log(fruits);

// unshift -- add at the beginning
let colors = ["red","green","blue"];
let q5 = colors.unshift("yellow");
console.log(q5);
console.log(colors);

// shift -- remove from the beginning
//[ 'yellow', 'red', 'green', 'blue' ]
let q6 = colors.shift();
console.log(q6);
console.log(colors);

// push(), pop(), unshift(), shift()

//includes()
let animals = ["cat","dog","elephant","tiger"]
let q55 = animals.includes("Dog") 
console.log(q55)

// reverse()
let countries = ["india","usa","brazil","china"] 
let q66 = countries.reverse();
console.log(q66);

//concat()
let arr = [1,2,3]
let arr2 = [4,5,6]

// let arr3 = arr.concat(arr2) // [1,2,3,4,5,6]
// console.log(arr3);
let arr4 = arr2.concat(arr) // [4,5,6,1,2,3]
console.log(arr4);

let info = ["chinmaydeshpande","gmail.com"]
let email = info.join("-") // "
console.log(email);

let numbers = [10,20,30,40,50]
let qw = numbers.join("@") // "10*20*30*40*50"
console.log(qw)



