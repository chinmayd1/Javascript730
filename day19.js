

let firstName = "chinmay"
console.log(typeof firstName)

let lastName = 'deshpande'
console.log(typeof lastName)

let middleName = `shirsh`
console.log(typeof middleName)


// are string mutable ? - No

let numbers  = [11,22,33,44,55]
console.log(typeof numbers)
numbers[0] = 111
console.log(numbers)

let fn = "chinmay"
console.log(fn[0])
fn[0] = "t"
console.log(fn)

// C R  U  D ---> create , retrive , update , delete
// does string stores the value

let ln = "deshpande"
console.log(ln[0])

// for loop 
for(let i = 0 ; i < ln.length ; i++){
    console.log(ln[i])
}

for(let i = ln.length - 1; i >= 0 ; i--){
    console.log(ln[i])
}

ln = "deshpande"

// while loop
let i1 = 0
while(i1 < ln.length){
    console.log(ln[i1])
    i1 = i1 + 1
}

// program 3
//string  + string ----> string
//number  + string ----> string
//string  + number ----> string 
//number  + number ----> number

let a = "hello"
let b = 10
let c = 5

console.log(a+b+c)

// string + number + number
    //"hello" + 10 + 5
        // "hello10" + 5
            // "hello105" 


a = "hello"
b = 10
c = 5

console.log(c+b+a)
// 10 + 5 + hello
    //15 + hello
        // "15hello"
// number + number + string
    // number + string
        // string


a = "hello"
b = 10
c = 5
console.log(b + a + c)

// program 4
// String concatenation

let firstN = "chinmay"
let lastN  = "deshpande"

// string interpolation 
// My firstName is chinmay and lastName is deshpande
console.log("My firstname is "+firstN+" and my lastName "+lastN)
// string interpolation
console.log(`My firstName is ${firstN} and lastName is ${lastN}`)

// string interpolation ---> output ---> string
// and we can solve expression
console.log(`${2 + 2}`)






