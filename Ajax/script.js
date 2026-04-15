
// synchro
// fn - A  ---> 2 seconds
// fn - B  ---> 3 seconds
// fn - C  ---> 4 seconds
// sync - code

// async code
// fn - A  ---> 2 seconds// fn - B  ---> 3 seconds // fn - C  ---> 4 seconds

// function additionA(){
//     console.log("addtion A")
// }

// function additionB(){
//     console.log("addtion B")
// }

// additionA()
// additionB()

// program 2

// function additionC(){
//     setTimeout(function(){
//         console.log("C")
//     },2000)
// }

// function additionD(){
//   console.log("D")
// }

// additionC()
// additionD()


// program 3

function getInfo() {
    setTimeout(function () {
        console.log("user created")
    }, 3000)

    setTimeout(function () {
        console.log("get id")
    }, 2000)

    setTimeout(function () {
        console.log("get info")
    }, 1000)

}
//getInfo()

// program 4
// call back hell



function getInfo() {

    setTimeout(function () {
        console.log("user created")
        setTimeout(function () {
            console.log("get id")
            setTimeout(function () {
                console.log("get info")
            }, 1000)
        }, 2000)
    }, 3000)

}
getInfo()




















