
// class Person {
//     // property 
//     firstName = undefined
//     lastName = undefined

//     // method
//     displayName(){
//         console.log(this.firstName+ this.lastName)
//     }
// }


// let mariyam = new Person()
// let chinmay = new Person()

// //console.log(mariyam)
// mariyam.firstName = "mariyam"
// mariyam.lastName = "srinivasulu"
// console.log(mariyam)

// mariyam.displayName()

// //console.log(chinmay)
// chinmay.firstName = "chinmay"
// chinmay.lastName = "deshpande"
// console.log(chinmay)

// chinmay.displayName()



// let chinmay = {
//     firstName:undefined,
//     lastName:undefined,
//     displayName:function(){
//         console.log(this.firstName+ this.lastName)
//     }
// }

// let mariyam = {
//     firstName:mariyam,
//     lastName:undefined,
//     displayName:function(){
//         console.log(this.firstName+ this.lastName)
//     }
// }



class Student {
    // property
    firstName = undefined
    lastName = undefined
    age = undefined
    city = undefined
    // method
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

let mariyam2 = new Student()
console.log(mariyam2.firstName)
mariyam2.firstName = "new"

// let amol = new Student()
// console.log(amol.firstName)
// console.log(amol.lastName)
// console.log(amol.city)
// console.log(amol.age)

// amol.firstName = "amol"
// amol['lastName'] = "rao"
// amol.city = "pune"
// amol.age = 34
// console.log(amol)

// Set the values at the time of object creation only 



class Person2 {
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

let chinmay2 = new Person2("chinmay2","deshpande2")
let john = new Person2("john","snow")

console.log(john)

john.displayName()
