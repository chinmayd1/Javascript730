
// let and const are blocked scope
// var is function scoped
// let and var are same in terms of assignement
// const is different

// let a = 10
// console.log(a)
// a = 1000
// console.log(a)

// var h = 90
// console.log(h)
// h = 900
// console.log(h)

// const q = 100
// console.log(q)
// //q = 900



//let and const are blocked scope

let a = 100

{
    let a = 900
    console.log(a) // 900
}
console.log(a) // 100

// program 2
let b = 90
{
    b = 900
    console.log(b)// 900
}
console.log(b) // 900

// program 3
{
    const f = 88
    console.log(f)
}
//console.log(f)


const j = 900
{
    const j = 999
    console.log(j) // 999
}
console.log(j) //900

// program 3

// const ja = 900
// {
//     ja = 999
//     console.log(ja) 
// }
// console.log(ja) 


// program 4
// var is function scope
var l = 80
function checkValue(){
    console.log(l)
}
checkValue()

// var l2 = 80
// function checkValue(){
//     var l2 = 90
//     console.log(l2) // 90
//     {
//         l2 = 900
//     }
//     console.log(l2) //900
// }
// console.log(l2)//80
// checkValue()
// l2 = 82
// console.log(l2)  //82




var l2 = 80
function checkValue(){
    l2 = 90
    console.log(l2)  // 90
    {
        l2 = 900
    }
    console.log(l2)  // 900
}
console.log(l2)// 80
checkValue()
l2 = 82
console.log(l2)  // 82