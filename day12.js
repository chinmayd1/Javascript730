// string 

let firstName = "chinmay"
console.log(firstName)


// let q1 = firstName.toUpperCase()
// console.log(q1)
// let q2 = firstName.toLowerCase()
// console.log(q2)
// let q3 = firstName.includes("chi")
// console.log(q3)
// let q4 = firstName.startswith("chi")
// console.log(q4)
// let q5 = firstName.endswith("ay")
// console.log(q5)

// Method chaining 
let a = 10
console.log(a)
console.log(typeof a)

let city = "pune"
let q7 = city.length
console.log(q7)

let city2 = "Nagpur"
let q8 = city2.toLowerCase()
console.log(q8)

let q11 = city2.toUpperCase().toLowerCase()
console.log(q11)

// trim()

let fn = " chinmay "
console.log(fn.length)
let q9 = fn.trim()
console.log(q9.length)

// trimStart()
fn = " chinmay "
let q10 = fn.trimStart()
console.log(q10.length)

// trimEnd()
fn = "chinmay "
let q12 = fn.trimEnd()
console.log(q12.length)

let info = ["chinmay", "gmail.com"]
let q13 = info.join("@")
console.log(q13)
// q13 ---> chinmay@gmail.com

let q14 = q13.split('@')
console.log(q14)

let fnN = "miriam"
let q15 = fnN.split("i")
console.log(q15)

// slice -->
let city22 = "chandrapur"
// 0    1   2   3   4   5   6   7   8   9
// c    h   a   n   d   r   a   p   u   r
//-10  -9  -8  -7  -6  -5  -4  -3   -2  -1

//city22.slice(startIndex,endIndex(not included))
let qw1  = city22.slice(1)
console.log(qw1)
let qw2  = city22.slice(1,8)
console.log(qw2)
let qw3  = city22.slice(-3)
console.log(qw3)
let qw4  = city22.slice(-9,-3)
console.log(qw4)
let qw5  = city22.slice(-9,5)
console.log(qw5)
let qw6  = city22.slice(-1,-5)
console.log(qw6)

let qw7 = "amol"

let q111 = qw7.indexOf("A")
console.log(q111)