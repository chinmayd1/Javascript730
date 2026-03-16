x = 10
console.log(x)
y = x

y = 300
console.log(y) // 300
console.log(x) // 10

// program 2

let numbers = [11,22,33]
console.log(numbers)
numbersB = numbers
numbersB[0] = 111
console.log(numbers)
console.log(numbersB)

// program 3


let info = {
    firstName:"chinmay",
    lastName:"deshpande"
}

let info2 = info

info['firstName'] = "tanmay"
console.log(info)
console.log(info2)

// program 3

// spread
let arr1 = [11,22,33]
let arr2 = [...arr1]
arr2[0] = 111
console.log(arr2)
console.log(arr1)


// program 4

let arr4 = [11,22,33]
let arr5 = [44,55,66]
let arr6 = [...arr4,...arr5]
console.log(arr6)
//arr4.concat(arr5)
// spread operation - [11,22,33] ---> 11,22,33

// program 5
// spread operator with destruturing

let numbersBA = [10,20,30,40]
let [a,b,...rest] = numbersBA
console.log(a)
console.log(rest)


// program 6

let user = {
    name:"ali",
    age:25
}
//console.log(user)
let user2 = {...user}
user['name']= "ram"
console.log(user)
console.log(user2)
user = {
    name:"ali",
    age:25
}

info = {
    subject:"english",
    langauge:"marathi"
}
let info22 = {...user,...info}
console.log(info22)