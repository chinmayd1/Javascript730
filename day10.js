//              0       1      2     3
let names  = ["ninad","ram","sham","sachin"]
console.log(names[2])

// for - loop
// for(let i = 0 ; i < names.length ; i++){
//     //console.log(i)
//     console.log(names[i])
// }

// Object does not stores the value by index
let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:34,
    rollNo:56
}
// console.log(info.firstName)
// console.log(info.age)
// console.log(info['age'])
// dot notation does not work inside the loop

for(let prop in info){
    console.log(prop)
    console.log(info[prop])
}


let vehicle = {
    color:"red",
    type:"sedane",
    regNo:123
}
//console.log(vehicle['type'])
// for(let prop in vehicle){
//     //console.log(prop)
//     console.log(vehicle[prop])
// }


let vehicle2 = {
    color:"red",
    type:"sedane",
    regNo:123
}

for(let key of Object.keys(vehicle2)){
    console.log(key)
}
for(let key of Object.values(vehicle2)){
    console.log(key)
}
for(let [key,value] of Object.entries(vehicle2)){
    console.log(key,value)
}



let student = {
    firstName:"chinmay",
    lastName:"deshpande",
    skills:["python","javascript","html"],
    parent:{
        mother:"kanchan",
        father:"shirish"
    }
}

console.log(student['skills'][1])
console.log(student.parent['mother'])