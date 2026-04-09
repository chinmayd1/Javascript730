// program 1

let amol = {
    fn:"chinmay",
    ln:"deshpande",
    displayName:function(){
        console.log(this.fn + this.ln)
    }
}

// program 2

// class Person {
//     fn = undefined
//     ln = undefined
//     displayName(){
//         console.log(this.fn + this.ln)
//     }
// }
// let amol2 = new Person()
// console.log(amol2)
// amol2.fn = "amol2"
// amol2.ln = "rao2"
// console.log(amol2)

// program 3
// class Person2{
//     constructor(fn,ln){
//         this.firstName = fn 
//         this.lastName = ln
//     }

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// let amol3 = new Person2("amol3","rao3")

// get and set function


// class Person4 {
//     setFirstName(fn){
//         this.firstName = fn 
//     }
//     setLastName(ln){
//         this.lastName = ln 
//     }
// }
// let amol4 = new Person4()
// console.log(amol4)
// amol4.setFirstName("ram")
// amol4.setLastName("rao")
// console.log(amol4)


// set and get keyword 

let info = {
    fn:"chinmay",
    ln:"deshpande"
}
info.fn = "chinmay D"
info['ln']= "deshpande D"
info.city = "pune"

class Person {

    set first_name(fn){
        this.firstName = fn
    }
    get first_name(){
        return this.firstName
    }

    set last_name(ln){
        this.lastname = ln
    }
    get last_name(){
        return this.lastname
    }

}
let amol5 = new Person()
amol5.first_name = "ramesh"
amol5.last_name = "rao"
console.log(amol5)