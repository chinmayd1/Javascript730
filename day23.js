
// js 
//            0           1          2       3  4
let info = ["chinmay","deshpande",7709192441,36,45]
console.log(info[0])
info[0] = "satish"
console.log(info)

let info2 = {
    // prop   -- value
    // key    -- value
    firstName:"chinmay",
    lastName:"deshpande",
    mobile:7709192441,
    age:36,
    rollNo:46

}

//console.log(info2[0])
// object stores the value by index - NO

info2 = {
    // prop   -- value
    // key    -- value
    firstName:"chinmay",
    lastName:"deshpande",
    mobile:7709192441,
    age:36,
    rollNo:46
}
// retrive
// dot notation and bracket notation
console.log(info2.firstName)
console.log(info2['firstName'])
console.log(info2.mobile)
console.log(info2['age'])

// update  dot notation and bracket notation
info2 = {
    firstName:"chinmay",
    lastName:"deshpande",
    mobile:7709192441,
    age:36,
    rollNo:46,
    firstName:"shirish"
}
info2.firstName = "tanmay"
info2['age'] = 45
console.log(info2)

// add dot notation and bracket notation
info2.city = "pune"
info2['language'] = "marathi"
console.log(info2)

// delete dot notation and bracket notation
delete info2.city 
delete info2['age']
console.log(info2)


// program 2

let vehicle = {

    color:"red",
    type:"sedane"

}

//retrive 
console.log(vehicle.color)
console.log(vehicle['color'])

// update
vehicle.color = "blue"
vehicle['color'] = "yellow"
// add
vehicle.logo = "circle"
vehicle['company']= "BMW"
// delete
delete vehicle.color
delete vehicle['logo']

vehicle = {
    color:"red",
    type:"sedane"

}
// dot notation does not work inside loop
for(let prop in vehicle){
    console.log(prop,vehicle[prop])
}