// function greet(word='morning'){
//     console.log(`Good ${word}`)
// }
// greet()
// greet("evening")

// lexical scope
function additionA() {
    let a = 10
    let b = 20
    console.log(a + b) // 30
    function additionB() {
        let c = 90
        let d = 45
        console.log(a + b + c + d) //30
        function additionC() {
            let g = 9
            let h = 6
            console.log(a + b + c + d + g + h)
        }
        additionC()
    }
    additionB()
}
additionA()

// program 3

function additionC(x, y) {
    console.log(x + y)// 15
    return x + y
    console.log("hello")
}
let q2 = additionC(12, 3)
console.log(q2) //15

// closures

function additionH() {
    let a = 10
    let b = 5
    return function () {
        console.log(a + b)
    }
}
let q1 = additionH()

// let q1 = function () {
//     console.log(a + b)
// }
q1()