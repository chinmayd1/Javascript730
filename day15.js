// class Person {
//     firstName = undefined
//     lastName = undefined
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// let amol = new Person()
// let miriyam = new Person()
// amol.firstName = "amol"
// amol.lastName = "rao"
// amol.displayName()

// program 2
// class PersonB {
//     constructor(fn,ln){
//         // this --->>
//         this.firstName = fn 
//         this.lastName = ln
//     }
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// let amolB = new PersonB("amolB","raoB")
// let amolC = new PersonB("amolC","raoC")

// amolB.displayName()
// amolC.displayName()


// setting the values using get and set method

class PersonC {
    setFirstName(fn) {
        this.firstName = fn
    }
    setLastName(ln) {
        this.lastName = ln
    }
}
let chinmay  = new PersonC()
console.log(chinmay)
chinmay.setFirstName("chinmay")
chinmay.setLastName("deshpande")
console.log(chinmay)

let miriyamC  = new PersonC()
console.log(miriyamC)
miriyamC.setFirstName("miriyam2")
miriyamC.setLastName("S")
console.log(miriyamC)

//1 week