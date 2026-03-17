
// Object destrucing
const user = {
    name:"Ali",
    age:25
} 
const newUser = {...user}
console.log(newUser)
newUser['age'] = 33
console.log(newUser)

// program 2 
// merging 2 objects 

let obj1 = {a:1}
let obj2 = {b:2}
let obj3 = {...obj1,...obj2}
console.log(obj3)

// program 3

const info = {
    firstName:"chinmay",
    lastName:"deshpande"
}

let info3 = {
    ...info,
    firstName:"tanmay",
    age:34
}

// rest operator
let numbersC  = [11,22,33,44]
const [a,b,...c]= numbersC
console.log(a)
console.log(b)
console.log(c)

//rest operator with objects 

let info4 = {
    fn:"chinmay",
    ln:"deshpande",
    age:34
}
let {fn,...abc} = info4
console.log(abc)


// program 5 functions 

function sum(...nr){
    console.log(nr)
    return nr.reduce(function(acc,el){
        return acc + el
    },0)
}
let q1 = sum(12,3,4,5,6,7,8,4,5,6)
console.log(q1)

// 1,2,3,4 --> [1,2,3,4]

// spread operation with function

let names = ["chinmay","shirish","ram","sham"]

// ["chinmay","shirish","ram","sham"] ---> chinmay,shirish
function printTwoValues(a,b){
    console.log(a,b)
}
printTwoValues(...names)





