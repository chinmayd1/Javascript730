
// object
//              fn         ln      age rollno
let names = ["chinmay", "deshpande", 34, 56]
//
// object
let info = {
    firstName: "chinmay",
    lastName: "deshpande",
    age: 34,
    rollNo: 56
}
names = ["chinmay", "deshpande", 34, 56]
//(CRUD)
// retrive
console.log(names[0])
// update 
names[0] = "tanmay"
console.log(names)
// add
names.push("pune")
names.unshift("Mr")
// delete 
names.pop()
names.shift()
names.splice(1, 2)

// object 
// stores stores element in form of property - value or key value
let student = {
    // property:value
    // key:value
    firstName: "chinmay",
    lastName: "deshpande",
    age: 23,
    rollNo: 45
}
// does it stores the value by index - NO
console.log(student[0])
// retrive  (dot notation and bracket)
console.log(student.firstName)
console.log(student['lastName'])
// update (dot notation and bracket)
student.firstName = "tanmay"
student['lastName'] = "kulkarni"
console.log(student)
// add (dot notation and bracket)
student.firstName = "samay"
student.city = "pune" 
student['language'] = "marathi"
console.log(student)
// delete (dot notation and bracket)
delete student['firstName']
delete student.lastName



// program 2

let vehicle = {
    color:"red",
    type:"sedane"
}

// retrive
// object.property
console.log(vehicle.color)
console.log(vehicle['color'])
// update
vehicle.color = "blue"
vehicle['color'] = "red"
console.log(vehicle)
// add
vehicle.style = "luxury"
vehicle['model'] = "electric"
console.log(vehicle)

// delete
delete vehicle.color
delete vehicle['type']
console.log(vehicle)

// total values inside object 
let numbers = [11,22,33]
console.log(numbers.length)

let bankAcc = {
    balance:10000,
    accName:"chinmay deshpande",
    rollNo:23,
}

console.log(Object.keys(bankAcc).length)
console.log(Object.values(bankAcc).length)


