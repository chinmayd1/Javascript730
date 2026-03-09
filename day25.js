
// Object ===> object ==> properties and methods 

let students = {
    //prop:value
    //key:value
    name: "Rahul",
    age: 22,
    course: "javascript"
}
console.log(students)


let student2 = {
    //prop:value
    //key:value
    name: "Rahul",
    age: 22,
    course: "javascript"
}
// retrive  dot notation  bracket notation

console.log(student2.name)
console.log(student2.age)
console.log(student2.course)
console.log(student2['name'])
console.log(student2['age'])
console.log(student2['course'])

// program 3

student3 = {
    //prop:value
    //key:value
    name: "Rahul",
    age: 22,
    course: "javascript",
    age: 32
}
// update dot notation and bracket
student3.name = "rahul kumar"
student3['age'] = 35
console.log(student3)
// add - dot notation and bracket notation

student3['language'] = "marathi"
student3.city = "pune"
console.log(student3)

// delete - dot notation and bracket notation
delete student3['name']
delete student3.city
console.log(student3)

// Objects with methods

let info = {
    firstName: "chinmay",
    lastName: "deshpande",
    display: function () {
        console.log(this.firstName + this.lastName)
    }

}
// this refers to current calling reference
info.display()

let info2 = {
    fn: "chinmay",
    ln: "deshpande"
}
let info3 = {
    fn: "samay",
    ln: "dani"
}

let display = function (obj) {
    console.log(obj.fn + obj.ln)
}
display(info2)
display(info3)

// loops 
//  .dot notation does not work inside loop

let vehicle = {
    color:"red",
    type:"sedane",
    logo:"circle"
}
console.log(vehicle)
//console.log(vehicle[0])
for(let key in vehicle){
    console.log(key,vehicle[key])
}

vehicle = {
    color:"red", //['color','red']
    type:"sedane",//['type','sedane']
    logo:"circle" // ['logo','circle']
}
console.log(Object.keys(vehicle))
console.log(Object.values(vehicle))
console.log(Object.entries(vehicle))

for(let key of Object.keys(vehicle)){
    console.log(key)
}

for(let val of Object.values(vehicle)){
    console.log(val)
}

for(let [k,v] of Object.entries(vehicle)){
    console.log(k,v)
}

let student4 = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    skills:["python","javascript","html"], // agentic AI,
    parent:{
        mother:"kanchan"
    }
}
student4.parent.mother = "kanchan s"
student4.parent['father']= "shirish"

student4.skills.push("agentic AI")
// mother:"kanchan s"
// father:"shirish"

console.log(student4)
