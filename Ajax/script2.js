
//sync 

//fn  - 1sec
//fn2 - 2 sec
//fn3 - 3 sec

//async
//fn  - 1sec //fn2 - 2 sec //fn3 - 3 sec

// function addA(){
//     console.log("A is called")
// }
// function addB(){
//     console.log("B is called")
// }
// addB()
// addA()

// program 2

// function addC(){
//     setTimeout(function(){
//         console.log("C is called...")
//     },2000)
// }

// function addD(){
//    console.log("D is called")
// }
// addC()
// addD()

// program 3

//  user create  ------> user id is created ------>  user info

// function getInfo() {

//     setTimeout(function () {
//         console.log("user created")
//     }, 2000)

//     setTimeout(function () {
//         console.log("user id")
//     }, 1000)

//     setTimeout(function () {
//         console.log("user info")
//     }, 500)

// }

// program 4
// tighly coupled 

function getInfo() {
    setTimeout(function () {
        console.log("user created")
        setTimeout(function () {
            console.log("user id")
            setTimeout(function () {
                console.log("user info")
            }, 500)
        }, 1000)

    }, 2000)
}
//getInfo()

// program 5 
// promises 
// async code --- sync execute without call back hell
// Promise ---> 2k -----> 1 month 2k , resolve and not given reject // pending

// pending , resolve , reject

// let pro1 = new Promise(function(resolve,reject){
//         let a = 10
//         let b = 3
//         if(a == b){
//             resolve("hello")
//         }
//         else {
//             reject("bye")
//         }

// })

// // promise consume
// pro1
// .then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })


// program 2


// let pro2 = new Promise(function(resolve,reject){
//     let a = 10
//     let b = 10

//     if(a == b){
//         resolve([11,22,33])
//     }
//     else {
//         reject([-11,-22,-33])
//     }

// })
// pro2
// .then(function(arr){
//     console.log(arr[0])
// })
// .catch(function(arr){
//     console.log(arr[1])
// })

// program 3
let pro3 = new Promise(function(resolve,reject){
    let a = 10 
    let b = 3
    if(a == b){
        resolve("resolved promise")
    }
    else {
        reject("rejected promise")
    }
})
pro3
.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})
.finally(function(){
    console.log("finally will always execute..")
})


// program 4



let pro4 = new Promise(function(resolve,reject){
    let a = 10
    let b = 10
    if(a == b){
        resolve("resolved promise")
    }
    else {
        reject("rejected promise")
    }
})

pro4
.then(function(str){
    console.log(str)
    return "hello2"
})
.then(function(str){
    console.log(str)
    return "hello3"
})
.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})
.finally(function(){
    console.log("finally executed")
})

// program 5

function userCreate(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("user created")
        },3000)
    })
}

function userId(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("user id")
        },2000)
    })
}

function userInfo(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("user info")
        },1000)
    })
}


userCreate()
.then(function(str){
    console.log(str)
    return userId()
})
.then(function(str){
    console.log(str)
    return userInfo()
})
.then(function(str){
    console.log(str)
})
