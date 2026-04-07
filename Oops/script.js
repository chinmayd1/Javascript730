// object literal 
// let amol = {
//     firstName:"amol",
//     lastName:"rao",
//     age:34,
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// console.log(amol)

// let chinmay = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:36,
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// console.log(amol)



// class 
class Person {
    firstName = undefined
    lastName = undefined
    age = undefined
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
let amol2 = new Person()
let chinmay2 = new Person()

console.log(amol2)
console.log(chinmay2)
chinmay2.displayName()

// setting the value outside the class
amol2.firstName = "amol2"
amol2.lastName = "rao2"
amol2.age = 23

console.log(amol2)
amol2.displayName()
console.log(chinmay2)

chinmay2.firstName = "chinmay2"
chinmay2.lastName = "deshpande2"
chinmay2.age = 23


// class with constructor

class Person2 {
    constructor(fn, ln, age ){
        this.firstName = fn 
        this.lastName = ln
        this.age = age
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
let amol3 = new Person2("amol3","rao3",34)
console.log(amol3)
let chinmay3 = new Person2("chinmay3","deshpande3",35)
console.log(chinmay3)

chinmay3.displayName()
amol3.displayName()
amol3.city = "pune"
console.log(amol3)
console.log(chinmay3)




// class with get and set method


// class with get and set keyword