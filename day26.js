
//               0         1      2      3      
let names = ["chinmay","sarika","ram","rajat"]
let n1 = names[0]
let n2 = names[1]
let n3 = names[2]
let n4 = names[3]
console.log(n1)
console.log(n2)
console.log(n3)
console.log(n4)

let [a1,a2,a3,a4] = names
console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4)

// program 2

let numbers = [1,22,333,4444,55555]
let [x1,,x2] = numbers
console.log(x1)
console.log(x2)

// program 3
//                   0                      1                      2
//               0         1         0         1          0          1
let states = [["wardha","nagpur"],["jaipur","udaipur"],["lucknow","kanpur"]]
console.log(states[0][1])
console.log(states[2][1])
let [[c1,c2],[c3,c4],[c5,c6]]= states
console.log(c4)
console.log(c6)
console.log(c2)

// program 4
let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:23
}
let {firstName,lastName,age} = info
console.log(firstName)
console.log(lastName)
console.log(age)


let student = {
    stuOne:{
        fn:"ram",
        ln:"dani"
    },
    stuTwo:{
        fn:"vijeet",
        ln:"dani"
    }
}

let {stuOne:{fn:ff1,ln:ll1},stuTwo:{fn:ff2,ln:ll2}} = student
console.log(ff1)
console.log(ll1)

// program 5
let students = [
   {
        fn:"ram",
        ln:"dani"
    },
    {
        fn:"vijeet",
        ln:"dani"
    },
    {
        fn:"chinmay",
        ln:"dani"
    }
]
let [{fn:s1,ln:s2},{fn:s3,ln:s4},{fn:s5,ln:s6}] = students
console.log(s1)
console.log(s6)

// program 6
let info2 = {
    fullName:"chinmay deshpande",
    skills:["python","java"]

}

let {fullName,skills:[w1,w2]} = info2
console.log(fullName)
console.log(w1)
console.log(w2)