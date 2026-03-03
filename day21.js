
console.log("hello".toUpperCase())
console.log("Hello".toUpperCase())
console.log("Hello".includes("H"))
console.log("Hello".startsWith("H"))
console.log("Hello".endsWith("o"))

// program 1

let city2 = "punpep"

//  0    1    2     3  4
//  p    u    n     e  p

let q1  = city2.indexOf("p")
console.log(q1)
let q2 = city2.indexOf("P")
console.log(q2)
let q3 = city2.lastIndexOf("p")
console.log(q3)
let q4 = city2.indexOf("p",2)
console.log(q4)


// trim()

let s1 = " goa "
console.log(s1.length)
let s1a = s1.trim()
console.log(s1a.length)

// trimStart()
s1 = " goa"
console.log(s1.length)
s1b = s1.trimStart()
console.log(s1b.length)
// trimEnd
s1 = " goa "
s1c = s1.trimEnd()
console.log(s1c)
console.log(s1c.length)

// program 2
let info = "i am learning python and python is easy"
s2 = info.replace("python","javascript")
console.log(s2)
s3 = info.replaceAll("python","javascript")
console.log(s3)

// program 3
// repeat

let s4 = "hello"
s4b = s4.repeat(3)
console.log(s4b)

// ***hello***
// *****83456
let s45 = "*".repeat(3)+s4+"*".repeat(3)
console.log(s45)


let accNo = "7878776789"
console.log("*".repeat(6)+ accNo.slice(-4))

//slice
//   0      1      2     3    4     5     6    7     8   9
//   c      h      a     n    d     r     a    p     u    r
//  -10    -9     -8     -7  -6    -5    -4   -3    -2    -1

let city4 ="chandrapur"
//city4.slice(startIndex,endIndex(not included))
console.log(city4.slice(2))
console.log(city4.slice(1,5))
console.log(city4.slice(1,-1))
console.log(city4.slice(-8,5))
console.log(city4.slice(-5,-1))
console.log(city4.slice(-1,-5))
console.log(city4.slice(-3))


// function Calculate(x,y){
//     console.log("hello")
//     return x + y
//     console.log("bye")
// }
// let q31 = Calculate(12,3)
// console.log(q31)

function addA(){
    let x = 10
    let y = 5
    return function(){
        return x + y
    }
}
let f1 = addA()

// let f1 = function(){
//         return x + y
//     }
console.log(f1())