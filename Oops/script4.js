
class Mother {
    constructor(fn, ln) {
        this.firstName = fn
        this.lastName = ln
    }
    displayMName() {
        console.log(this.firstName + this.lastName)
    }
}
class Son extends Mother {
    constructor(fn, ln, sname) {
        super(fn, ln)
        this.sname = sname
    }

    displaySName() {
        console.log(this.sname + this.lastName)
    }
}
class Daughter extends Mother {
    constructor(fn, ln, dname) {
        super(fn, ln)
        this.dname = dname
    }
    displayDName() {
        console.log(this.dname + this.lastName)
    }
}

let chinmay = new Son("kanchan","deshpande","chinmay")
let gauri = new Daughter("kanchan","deshpande","gauri")
