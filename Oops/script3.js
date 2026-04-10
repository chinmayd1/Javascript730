
// class Student {
//     constructor(fn,ln){
//         this.firstName = fn 
//         this.lastName = ln
//     }
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }

// }

// class Teacher {
//     constructor(fn,ln,salary){
//         this.firstName = fn 
//         this.lastName = ln
//         this.salary = salary
//     }
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
//     displaySalary(){
//         console.log(this.salary)
//     }
// }


// program 1
// //  1st example without constructor in child

// class Student {
//     constructor(fn,ln){
//         this.firstName = fn 
//         this.lastName = ln
//     }
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// //let amolS = new Student("amolS","raoS")


// class Teacher extends Student{
//     salary = 1000
//     displaySalary(){
//         console.log(this.salary)
//     }
// }

// let amolT = new Teacher("amolT","raoT")
// console.log(amolT.firstName)
// console.log(amolT.lastName)
// console.log(amolT.salary)
// amolT.displayName()
// amolT.displaySalary()

// program 2

// single 

// class StudentB {
//     constructor(fn,ln){
//         this.firstName = fn 
//         this.lastName = ln
//     }
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// class TeacherB extends StudentB {
//     constructor(fn,ln,salary){
//         super(fn,ln)
//         this.salary = salary
//     }
//     displaySalary(){
//         console.log(this.salary)
//     }
// }

// let amolTB = new TeacherB("amolT","raoT",1000)
// console.log(amolTB.firstName)
// console.log(amolTB.lastName)
// console.log(amolTB.salary)
// amolTB.displaySalary()
// amolTB.displayName()

// program 3
// Multi -level



class GrandFather {
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName  =ln
    }
    displayGName(){
        console.log(this.firstName + this.lastName)
    }
}
class Father extends GrandFather {
    constructor(fn,ln,ffn){
        super(fn,ln)
        this.fname = ffn
    }
    displayFName(){
        console.log(this.fname + this.lastName)
    }
}

class Son extends Father {
    constructor(fn,ln,ffn,ssn){
        super(fn,ln,ffn)
        this.sname = ssn
    }
    displaySName(){
        console.log(this.sname + this.lastName)
    }
}
let chinmay  = new Son("manohar","deshpande","shirish","chinmay")
console.log(chinmay.firstName)
console.log(chinmay.lastName)
console.log(chinmay.sname)
console.log(chinmay.fname)

chinmay.displayFName()
chinmay.displayGName()
chinmay.displaySName()









