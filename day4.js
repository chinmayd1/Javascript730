
// for(let i = 1 ; i <= 10; i++){
//     console.log(i * 2);
// }

// C    R   U   D 
// Create  Read/Retrieve / Update / Delete - looping through array

//Array 
//             0   1 2  3  4
let numbers = [10,20,30,40,50];
// print the value by index
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);

// array of strings
//             0         1       2        3      4
let fruits = ["apple","banana","grapes","mango","orange"];
console.log(fruits[0]);

// update the value at zero index
fruits[0] = "kiwi";
fruits[1] = "chikoo";
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits);

// mixed array
let mixedArray = [10,"hello",true,20,"world",false];


// looping through array
//              0      1      2          3    4      
let names = ["alice","bob","charlie","david","eva"];
console.log(names[0])
console.log(names.length) // 5

for(let i = 0; i < names.length ; i++){//1 // 2 // 3 // 4 // 5
    //console.log(i) // 0 // 1 // 2 // 3 // 4
    console.log(names[i]); // names[0] // names[1] // names[2] // names[3] // names[4]
}





