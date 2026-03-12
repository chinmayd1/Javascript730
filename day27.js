

let numbers = [11,22,33]
let q1 = numbers[0]
let q2 = numbers[1]
let q3 = numbers[2]
console.log(q1)
console.log(q2)
console.log(q3)

let [x1,x2,x3] = numbers
console.log(x1)
console.log(x2)
console.log(x3)

// program 2

let names = ["chinmay","sarika",'ram']
let [s1,,s3] = names
console.log(s1)
console.log(s3)

// program 3

//                   0                    1                     2
//               0       1        0           1        0          1
let states  =[["Wardha","Pune"],["Jaipur","Udaipur"],["Kanpur","Lucknow"]]
console.log(states)
let [[c11,c22],[c33,c44],[c55,c66]] = states
console.log(c33)
console.log(c44)

// program 4


let info = {
    firstName:"chinmay",
    lastName:"deshpande",
}

let {firstName,lastName} = info
console.log(firstName)
console.log(lastName)

let vehicle = {
    color:"red",
    type:"sedane",
    model:"q1"
}
let {color,model} = vehicle
console.log(color)
console.log(model)

// program 5

let students = {
    stuOne:{
        fn:"chinmay",
        ln:"deshpande"
    },
    stuTwo:{
        fn:"tanmay",
        ln:"dani"
    }

}
let {stuOne:{fn:ff1,ln:ll1},stuTwo:{fn:ff2,ln:ll2}} = students
console.log(ll1)
console.log(ll2)


// program 5


let studentS = [
    {
        firstName:"chinmay",
        lastName:"deshpande"
    },
    {
        firstName:"sarika",
        lastName:"pansare"
    }
]

let [{firstName:f1,lastName:f2},{firstName:f3,lastName:f4}] = studentS
let [q11,q23]=studentS
console.log(f1)
console.log(f2)
console.log(f3)
console.log(f4)

// program 5

let info4 = {

    fullName:"chinmay deshpande",
    skills:["python","java"],
    parent:{
        father:"shirish",
        mother:"kanchan"
    }

}
let {fullName,skills:[q111,q222],parent:{mother,father}} = info4
console.log(fullName)
console.log(mother)