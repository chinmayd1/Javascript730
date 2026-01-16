// string 

let firstName = "chinmay"
console.log(firstName)
console.log(typeof firstName)

let lastName = 'deshpande'
console.log(typeof lastName)

// above Tab key
let middleName = `shirish`
console.log(middleName)
console.log(typeof middleName)

// how string works 
// does the string stores the value by index 

let fName = "chinmay"
console.log(fName)
console.log(fName[0])

// string with numbers and string 

// string + string   -----> string 
// number + string   -----> string 
// string + number   -----> string 
// number + number   -----> number 

let a = "hello"
let b = 10
let c = 5
console.log(a +" "+a)

console.log(b + c)
// number + number  --> number
    //10  +  5      --> 15

console.log(b+c+a)
// number + number + "hello"
    //10 + 5 + hello  ---> 15hello

console.log(a+b+c)
// string + number + number
    // 'hello'+ 10  + 5
        //'hello10' + 5
            // hello105


// string concat 
let fn = "chinmay"
let ln = "deshpande"

// My firstName is chinmay and my lastName is deshpande
console.log("My firstName is "+fn+" and my lastName is "+ln)
console.log(`My firstName is ${fn} and my lastNamr is ${ln}`)


let fnA = "chinmay"
console.log(fnA.length)

// Methods 

// toUpperCase()
let nameM = "manish"
let q1 = nameM.toUpperCase()
console.log(q1)
console.log(nameM[0].toUpperCase()+nameM.slice(1))

let ninadM = "Ninad"
let q3 = ninadM.toLowerCase()
console.log(q3)

// includes()
let fruitslist = "apple mango banana chikoo"
let exist  =  fruitslist.includes("apple ")
console.log(exist)
let existB  =  fruitslist.includes("k")
console.log(existB)
let existC  =  fruitslist.includes(" ")
console.log(existC)

// startswithwith
let fruitB = "apple"
let stw = fruitB.startsWith("a")
console.log(stw)
let stw2 = fruitB.startsWith("ap")
console.log(stw2)
let stw3 = fruitB.startsWith("C")
console.log(stw3)

// endswith

let fruitC = "chikoo"
console.log(fruitC.endsWith("o"))
console.log(fruitC.endsWith("oo"))
console.log(fruitC.endsWith("OO"))








