
class Dog {
    sound(){
        console.log("Bow Bow")
    }
}
class Cat {
    sound(){
        console.log("Meow Meow")
    }
}
class Human {
    sound(){
        console.log("Hi Hello")
    }
}

function callSound(obj){
    obj.sound()
}
let a = new Dog()
let b = new Cat()
let c = new Human()


callSound(a)
callSound(b)
callSound(c)