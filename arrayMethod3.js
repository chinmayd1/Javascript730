
let info = ["chinmay","deshpande",7709192441]
let q1 = info.join("-")
console.log(q1)

let info2 = ["chinmaydeshpande","gmail.com"]
let q2 = info2.join("@")
console.log(q2)


// let cities = ["pune","mumbai","banglore","kolkata"]
// cities.reverse()
// console.log(cities)

//             0        1         2         3
cities3 = ["jaipur","udaipur","kolkata","chennai"]
let q22 = cities3.toReversed()
console.log(q22)
console.log(cities3)


// let names = ["abhisha","shraddha","mira","bimal","chinmay"]
// names.sort()
// console.log(names)


names = ["abhisha","shraddha","mira","bimal","chinmay"]
let q223 = names.toSorted()
console.log(q223)
console.log(names)

// slice
//              0      1      2     3        4       5
let namesB  = ["sai","ram","sham","amol","chinmay","sarika"] 
//              -6    -5    -4     -3        -2         -1
//namesB(startIndex,endIndex(not included))
console.log(namesB.slice(4))
console.log(namesB.slice(1,4))
console.log(namesB.slice(1,-1))
console.log(namesB.slice(-4,4))
console.log(namesB.slice(-1,-4))

// splice
let numbers = [11,22,33,44,55]
// numbers.pop()
// numbers.shift()
// numbers.splice(startIndex,numberOfDelete)
// numbers.splice(startIndex,numberOfDelete,rp1,rp2)
console.log(numbers.splice(1,2,444,555))

// fill
numbers = [11,22,33,44,55]
let q33 = numbers.fill('@',1)
let q23 = numbers.fill('@',1,4)
console.log(q23)

// Array.from()
// Array.of()
// Array.asArray()