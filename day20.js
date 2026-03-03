
let firstName = "chinmay"
console.log(firstName)
console.log(typeof firstName)

let lastName = 'deshpande'
console.log(lastName)
console.log(typeof lastName)

let middleName =  `shirish`
console.log(middleName)
console.log(typeof middleName)

// string concat
let fn = "chinmay"
let ln = "deshpande"
console.log("My firstname is "+fn+ "and my lastName "+ln)
// string interpolation 
console.log(`My firstName is ${fn} and my lastName ${ln}`)
console.log(`${2+2}`)


let city = "pune"
console.log(city)

// Gym 
// Action - excercise
// Return - health

city = "pune"
console.log(city.length)


// methods --> 

// toUpperCase()
// Action - convert every character to capital
// Return - string

let city2 = "Nagpur"
let q1 = city2.toUpperCase()
console.log(q1)

let city3 = "PUNE"
let q2 = city3.toLowerCase()
console.log(q2)

let city4 = "mumbai"
let q3 = city4.toUpperCase().toLowerCase().length
console.log(q3)

// checked methods
let city5 = "nagpur"
let q4 = city5.startsWith("nag")
let q5 = city5.startsWith("Nag")
let q6 = city5.startsWith("n")
console.log(q4)
console.log(q5)
console.log(q6)

let city6 = "kolkata"
let q7 = city6.endsWith("a")
let q8 = city6.endsWith("A")
console.log(q7)
console.log(q8)
let q9 = city6.endsWith("ta")
console.log(q9)

let city7 = "indore"
let q10 = city7.includes("d")
let q11 = city7.includes("do")
console.log(q10)
console.log(q11)

// 7:30 pm  ---> sql 
// 8.00 pm  ---> prompt enginnering 
// 8:30 pm  ---> js
// 9:10 pm  ---> playwright
// 10 days - excel - 8.00am