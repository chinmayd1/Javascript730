
let students = [
    {
        fn: "chinmay",
        ln: "deshpande",
        age: 27,
        skills: ["javascript", "html", "css"],
        city: "pune"
    },
    {
        fn: "amol",
        ln: "rao",
        age: 25,
        skills: ["python", "javascript", "html", "css", "sql"],
        city: "pune"
    },
    {
        fn: "sarika",
        ln: "pansare",
        age: 24,
        skills: ["python", "javascript", "cypress", "playwright"],
        city: "mumbai"

    },
    {
        fn: "mahesh",
        ln: "aher",
        age: 24,
        skills: ["python", "javascript", "cypress", "playwright", "excel"],
        city: "bangalore"

    }

]

// program 6
// add language:"english" to every object and return obj


let q5 = students.map(function(el){
    el['language'] = "english"
    return el
})
console.log(q5)

// program 5
// for Each  - add prompt engineering to every element

// students.forEach(function(el){
//     el.skills.push("prompt engineering")
// })
// console.log(students)


// program 4
// person in pune and skill python

// let q3 = students.filter(function(el){
//     return el.city == "pune" && el.skills.includes("python")
// })
// console.log(q3)

// program 3 
// complete object of people living in pune
// let q2 = students.filter(function(el){
//     return el.city == "pune"
// })
// console.log(q2)


// program 2
// for(let i = 0 ; i < students.length ; i++){
//     //console.log(i)
//     //console.log(students[i])
//     if(students[i].city == "pune"){
//         console.log(students[i].fn)
//     }
// }

// students.forEach(function(el){
//     if(el.city == "pune"){
//         console.log(el.fn)
//     }
// })



// students.forEach(function(el){
//     console.log(el.fn)
// })

// print all firstName
// for(let i = 0 ; i < students.length ; i++ ){
//     //console.log(i)
//     console.log(students[i].fn)
// }


