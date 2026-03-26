
// function 

// function declaration 
function addA(x,y){
   return  x + y
}
let q1 = addA(12,3)
console.log(q1)

// function expression 
let addB = function(x,y){
    return x+y
}

let q2 = addB(22,3)
console.log(q2)

// arrow function

let addC = (x,y)=>{
    return x+y
}
let addC2 = (x,y)=> x+y
let addC3 = x=> x+x

let q3 = addC(12,3)
console.log(q3)

let q22 = addC2(12,3)
console.log(q22)

let q23 = addC3(3)
console.log(q23)

// function declaration

// function expression 

// arrow function

// number as a parameter and number as a return type

function addition(x,y){
    return x + y
}
let a1 = addition(12,3)
console.log(a1)
console.log(typeof a1)

// string as a parameter and string as a return type 
function greet(word){
    return "hello "+ word
}
let a2 = greet("chinmay")
console.log(a2)

// boolean as parameter and boolean as a return type 
let age  = 18
let hvVehicle =true
function canDrive(age,hvVehicle) {
    if(age >= 18 && hvVehicle){
        return true
    }
    else {
        return false
    }
}
let a4 = canDrive(age,hvVehicle)
console.log(a4)

// array as parameter and array as return type 
let names = ["sarika","ram","sham"]

function addName(arr){
    arr.push("gauri")
    return arr
}
let a5 = addName(names)
console.log(a5)

// object as a parameter and object as return type 

let obj = {
    fn:"chinmay",
    ln:"deshpande"
}
function info(obj){
    obj.city = "pune"
    obj['city'] = "mumbai"
    return obj
}
let a6 = info(obj)
console.log(a6)


// map as parameter and map as return type 

let mapB = new Map([
    [1,"admin"],
    [2,"customer"]
])

function addPtoMap(mapP){
    mapP.set(3,"manager")
    return mapP
}

let a7 = addPtoMap(mapB)
console.log(a7)

// set as parameter and set as return type 

let numbersS = new Set([11,22,33,44,55])
function addV(ss){
    ss.add(66)
    return ss
}
let a8 = addV(numbersS)
console.log(a8)

// function as a parameter 
let a111 = 10
console.log(a111)

let addAa = function(x,y){
    return x + y
}
console.log(addAa) // printing function definition
//addA(2,3)// calling the function

// function as a parameter to another function
let sub = function(x,y){
    return x - y
}
function subtraction(fn,x,y){
//     let fn = function(x,y){
//     return x - y
// }
// x = 10
// y = 3
let a11 = fn(x,y)
return a11


}
let a22 = subtraction(sub,10,3)
console.log(a22)



// function as a return type 

// default paramter

