// map()

// number
// string 
// boolean 
// array
// object 
// user - defined

// map()
// map is similar to object


let info = {
//    key    : value
//    property :value
    firstName:"chinmay",
    lastName:"deshpande",
    1:"manage"

}
console.log(info)

// map key can be of any data type
let a = 10
let b = "chinmay"
let c = true
let names = ["chinmay","sarika"]
let info2 = {fullName:"chinmay"}

let mapA = new Map()
console.log(mapA)
mapA.set(1,"admin")
mapA.set(2,"customer")
mapA.set(3,"manager")
mapA.set(true,"learning")
mapA.set([11,22,33],"marks")
mapA.set({f:"shirsh",m:"kanchan"},"parents")
console.log(mapA)

// program 2

let mapB = new Map([
    [1,"admin"],
    [2,"customer"],
    [3,"manager"],
    [4,"student"]
])

console.log(mapB.size)
mapB.set(5,"supervisor")
console.log(mapB)

// program 2
 mapB = new Map([
    [1,"admin"],
    [2,"customer"],
    [3,"manager"],
    [4,"student"]
])
// get()
console.log(mapB.get(2))

// has()
let q1 = mapB.has(5)
console.log(q1)

mapB.clear()
console.log(mapB)


mapB = new Map([
    [1,"admin"],
    [2,"customer"],
    [3,"manager"],
    [4,"student"]
])
mapB.forEach(function(val,key){
    console.log(val,key)
})

for(let key of mapB.keys()){
    console.log(key)
}

for(let val of mapB.values()){
    console.log(val)
}

for(let [k,v] of mapB.entries()){
    console.log(k,v)
}

console.log(mapB.keys())
console.log(mapB.values())
console.log(mapB.entries())

mapB.delete(2)
console.log(mapB)

