let  fn = "chinmay"
let f1 = fn.startsWith("c")
console.log(f1)

let f2 = fn.startsWith("chi")
console.log(f2)

// program 2
3
let ln = "deshpande"
let f3 = ln.endsWith('e')
console.log(f3)

let f4 = ln.endsWith("De")
console.log(f4)

// program 3
let city = "pune"
let f5 = city.repeat(3)
console.log(f5)

// program 4

//0   1   2    3  4
//t   i   g    e   r

let animal = "tiger"
let h = animal.charAt(2)
console.log(h)

let r2 = animal.charCodeAt(3)
console.log(r2)

// program 5

let info = "I am learning python"
let q1 = info.replace("python","javascript")
console.log(q1)

let info2 = "I am learning javascript and javascript is easy"
let q2 = info2.replace("javascript","python")
console.log(q2)

let q3 = info2.replaceAll("javascript","python")
console.log(q3)

let phoneC = "7709192441" // "007709192441"
let q4 = phoneC.padStart(15,0)
console.log(q4)