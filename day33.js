
// set 
// Properties and method

let mySet = new Set();
console.log(mySet)

let setWithValues = new Set([2,3,44,555,66,77,44])
console.log(setWithValues)

let mySetA = new Set();
mySetA.add(11)
mySetA.add(22)
mySetA.add(33)
mySetA.add(44)
mySetA.add(55)
mySetA.add(55)
console.log(mySetA)

let nameA= "chinmay"
let names  = ["chinmay","sarika"]
let info = {
    fn:"chinmay",
    ln:"deshpande"
}
let mapA = new Map([
    [1,"admin"],
    [2,"customer"]
])


mySetA = new Set();
console.log(mySetA)

mySetA.add(1)
mySetA.add(2)
mySetA.add(3)
mySetA.add(4)
console.log(mySetA)


let q1 = mySetA.has(4)
let q2 = mySetA.has(5)
console.log(q1)
console.log(q2)

// mySetA.clear()
// console.log(mySetA)

mySetA.delete(2)
console.log(mySetA)

console.log(mySetA.size)
mySetA.forEach(function(el){
    console.log(el)
})
for(let val of mySetA){
    console.log(val)
}
let arr = [1,2,3,4,5,2,3,6,7,8]
let uq = new Set(arr)
console.log(uq)
let r2  = [...uq]
console.log(r2)