
let flag = true
let mark = 10
let name = "chinmay"
let numbers = [11,22,33,4]
let info = {
    fn:"chinmay",
    ln:"deshpande"
}
// set()
// map()

// class Person {
//     fn = undefined
//     ln = undefined

//     displayName(){
//         console.log(this.fn + this.lastName)
//     }
// }


// object literals 

let amol = {
    fn:"amol",
    ln:"rao",
    age:23,
    displayName:function(){
        console.log(this.fn + this.ln)
    }
}

let chinmay = {
    fn:"chinmay",
    ln:"deshpande",
    age:23,
    displayName:function(){
        console.log(this.fn + this.ln)
    }
}


console.log(amol)
console.log(chinmay)

class Person {
    fn= undefined
    ln = undefined
    age= undefined

    // this --> amolK
    displayName(){
        console.log(this.fn + this.ln)
    }
}
let amolK = new Person()
console.log(amolK)
amolK.fn = "amolK"
amolK['ln'] = "raoK"
amolK['age']= 24
console.log(amolK)
amolK.displayName()

class PersonB {
    constructor(fn,ln,age){
        this.firstName = fn 
        this.lastName = ln 
        this.age = age
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

let ninad = new PersonB("ninad","dani",45)
let vijeet = new PersonB("vijeet","danie",54)

console.log(ninad)
console.log(vijeet)

vijeet.city ="pune"
console.log(vijeet)