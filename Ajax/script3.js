

// let pro = new Promise(function (resolve, reject) {

//     let a = 10
//     let b = 10

//     if (a == b) {
//         resolve("hello")
//     }
//     else {
//         reject("bye")
//     }

// })

// consuming the promise 

// pro
// .then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })


// pro
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })


// pro
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("i will always run")
// })

// pro
// .then(function(str){
//     console.log(str)
//     return "hello"
// })
// .then(function(str){
//     console.log("str")
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("i will always run")
// })


//-------------------------------------> 

// function userCreate(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve("user created")
//         },3000)
//     })
// }

// function userId(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve("user id")
//         },2000)
//     })
// }

// function userInfo(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve("user info")
//         },1000)
//     })
// }

// userCreate()
// .then(function(str){
//     console.log(str)
//     return userId()
// })
// .then(function(str){
//     console.log(str)
//     return userInfo()
// })
// .then(function(str){
//     console.log(str)
// })
///////////////////////////////////////////////////////////
// function userCreate() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("user created")
//         }, 3000)
//     })
// }
// function userId() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("user id")
//         }, 2000)
//     })
// }
// function userInfo() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("user info")
//         }, 1000)
//     })
// }

// async await 
// async function getUserInfo() {
//     try {
//         let pro = await userCreate()
//         console.log(pro)
//         let pro2 = await userId()
//         console.log(pro)
//         let pro3 = await userInfo()
//         console.log(pro)
//     }
//     catch {
//         console.log('rejected ')
//     }

// }
// getUserInfo()


//function - A ----> function B ---> function C


// Promise combinators 

// Promise.all()
// Promise.race()
// Promise.any()
// Promise.allSettled()
// all fours methods , we will see with , .then() , async await

function PromiseA() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Promise A solution")
        }, 2000)
    })
}

function PromiseB() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Promise B solution")
        }, 1000)
    })
}

function PromiseC() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject("Promise C solution")
        }, 20)
    })
}

// Promise.any() --- reject ignored ---> 

//async await 


async function promiseAny() {
    let pro = await Promise.any([
        PromiseA(),
        PromiseB(),
        PromiseC()
    ])
    console.log(pro)
}
promiseAny()

// Promise.any([
//     PromiseA(),
//     PromiseB(),
//     PromiseC()
// ])
// .then(function(str){
//     console.log(str)
// })



// Promise.race()
// async function allRace() {
//     try {
//         let pro = await Promise.race([
//             PromiseA(),
//             PromiseB(),
//             PromiseC()
//         ])
//         console.log(pro)
//     }
//     catch(str){
//         console.log(str)
//     }
// }
// allRace()


// Promise.race([
//     PromiseA(),
//     PromiseB(),
//     PromiseC()
// ])
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })


// Promise.allSettled()
// Promise.allSettled([
//     PromiseA(),
//     PromiseB(),
//     PromiseC()
// ])
// .then(function(arr){
//     console.log(arr)
// })

// async function allSettled() {
//     let pro = await Promise.allSettled([
//             PromiseA(),
//             PromiseB(),
//             PromiseC()
//     ])
//     console.log(pro)
// }
// allSettled()
//////////////////////////////////////////////////////////////
// Promise.all([
//     PromiseA(),
//     PromiseB(),
//     PromiseC()
// ])
// .then(function(arr){
//     console.log(arr)
// })
// .catch(function(str){
//     console.log(str)
// })


// async function PromiseAll() {
//     try {
//         let proR = await Promise.all([
//             PromiseA(),
//             PromiseB(),
//             PromiseC()
//         ])
//         console.log(proR)
//     }
//     catch(str) {
//         console.log(str)

//     }
// }
// PromiseAll()