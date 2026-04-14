// // Online Java Compiler
// // Use this editor to write, compile and run your Java code online

// class Main {
//     // overloading
//     // same class , same method name and different signature
//     public static void main(String[] args) {
//         System.out.println("Try programiz.pro");
//         addition(12,2);
//         addition(12,2,2);
//         addition(12,2,2,2);
//     }

//     public static void addition(int x, int y){
//           System.out.println(x+y);
//     }
//     public static void addition(int x, int y ,int z){
//           System.out.println(x+y+z);
//     }
//     public static void addition(int x, int y ,int z ,int a){
//           System.out.println(x+y+z+a);
//     }


// }

class Calculator {
    // addition(x, y) {
    //     console.log(x + y)
    // }
    // addition(x, y, z) {
    //     console.log(x + y + z)
    // }
    // addition(x, y, z, a) {
    //     console.log(x + y + z + a)
    // }


    addition(x = undefined, y = undefined, z = undefined, a = undefined) {
        if (x != undefined && y != undefined && z != undefined, a != undefined) {
            console.log(x + y + z + a)
        }
        else if (x != undefined && y != undefined && z != undefined) {
            console.log(x + y + z)
        }
        else if (x != undefined && y != undefined) {
            console.log(x + y)
        }
    }
}

let cal = new Calculator()
cal.addition(12, 3)
cal.addition(12, 3, 3)
cal.addition(12, 3, 3, 3)

// same class same method name but different signature



// different class has a relationship , same methodName , same signature
class WorldBank {

    loan() {
        console.log("loan method - WB")
    }
    save() {
        console.log("save method - WB")
    }
}

class SBI extends WorldBank {
     loan() {
        console.log("loan method - SBI")
        super.loan()
    }
    save() {
        console.log("save method - SBI")
        super.loan()
    }
}

class PNB extends WorldBank {

}

let sbiA = new SBI()
sbiA.loan()
sbiA.save()


