// function as a parameter 

let a = 10
console.log(a)
// function expression
let add = function (x, y) {
    return x + y
}

function addition(fn, x, y) {

    // let fn = function (x, y) {
    //     return x + y
    // }
    // x = 20
    // y = 10

    let q11 = fn(x,y)
    return q11

}
let q22 = addition(add, 20, 10)
console.log(q22)







// console.log(add)
// let q1 = add(12,3)
// console.log(q1)

// function as a return type 
function subtraction(x,y){
    return function(){
        return x - y
    }
}
let sub = subtraction(12,3)
let q23 = sub()
console.log(q23)