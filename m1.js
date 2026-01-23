// object     01/13/2026 Monday

// Array
let names13 = ["meryem", "srinivasulu", 35, 25]

// Object
let bilgi = {
    adi: "meryem",
    soyadi: "srinivasulu",
    yasi: 35,
    numarasi : 25 // error here?
}

// ARRAY
names13 = ["meryem", "srinivasulu", 35, 25]


// CRUD IN aaray

// retrive      // we can retrive by index number
// print meryem
console.log(names13[0])

// update
names13[0] = "Mary"
console.log(names13)

//add
names13.push("Milas") // add Milas end of the array
console.log(names13)

names13.unshift("Ms")
console.log(names13)

// delete

names13.pop()
console.log(names13)

names13.shift()
console.log(names13)

names13.splice(1, 3) //first paremeter where to start, second paremeter
// how many paremeter to delete starting from first parameter
console.log(names13)


// C R U D in object

// does it stores the value by index? NO !!!

let ogrenci = { // property : value
    // key value
    adi: "Meryem",
    soyadi : "Srinivasulu", 
    yas : 23,           
    rollNo:47          
}

//Program 2

let arac = {
    renk: "kirmizi",
    modeli: "toyota" 
}

//retrive   // object.property

console.log(arac.renk)
console.log(arac['renk'])
console.log(arac)

// update  object.property

arac.renk = "mavi"
console.log(arac)
arac['renk'] = "mor"
console.log(arac)

// delete
delete arac.renk
console.log(arac)
delete arac.model
console.log(arac)


// total  values inside object

let numara12 = [11, 22, 33]
console.log(numara12.length)

let bankahesab = {
    kalan: 14000,
    owner : "Meryem Srinivasulu",
    rollno :21

}
console.log(Object.keys(bankahesab).length)
console.log(Object.values(bankahesab).length)