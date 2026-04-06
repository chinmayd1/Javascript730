var fn = "vijeet"
var ln = "dani"

// let info = {
//     fn:"chinmay",
//     ln:"deshpande",
//     display:function(){
//         // this ----> info
//         console.log(this.fn + this.ln)

//         function display2(){
//             // this ---> info ---  X
//             // this ---> window
//             console.log(this.fn + this.ln)
//         }
//         display2()
//     }
// }
// info.display()

// console.log(info)
// console.log(info.fn)
// console.log(info.ln)
// info.display()



// let info = {
//     fn:"chinmay",
//     ln:"deshpande",
//     display:function(){
//         // this ===> info
//         console.log(this.fn + this.ln)
//         let display2 =()=>{
//             // this ===> info
//             console.log(this.fn + this.ln)
//         }
//         display2()
//     }
// }
// info.display()



let info = {
    fn:"chinmay",
    ln:"deshpande",
    display:()=>{
        // this ===> 
        console.log(this.fn + this.ln)
        let display2 =()=>{
            // this ===> 
            console.log(this.fn + this.ln)
        }
        display2()
    }
}
info.display()
