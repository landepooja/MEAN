// var myString: string;
// // I can assign myString like this:
// myString = "Bee stinger";
// // Why is there a problem with this? What can I do to fix this?
// myString = 9;
// //***********ANS*************
// var myString: string;
// myString = "Bee stinger";
// myString = "9";// since its declare var is string , so evrything should go in ""

//***************************************************************************************

// function sayHello(name: string){
//    return `Hello, ${name}!`;
// }
// // This is working great:
// console.log(sayHello("Kermit"));
// // Why isn't this working? I want it to return "Hello, 9!"
// console.log(sayHello("9"));//since its declare var is string , so evrything should go in ""

//***************************************************************************************
// function fullName(firstName: string, lastName: string, middleName: string){
//    let fullName = `${firstName} ${middleName} ${lastName}`;
//    return fullName;
// }
// // This works:
// console.log(fullName("Mary", "Moore", "Tyler"));
// // What do I do if someone doesn't have a middle name?
// console.log(fullName("Jimbo", "Jones"));/// three arguments required but provideed with only 2
//
// // //***********ANS*************
// function fullName(firstName: string, lastName: string, middleName: string){
//    let fullName = `${firstName} ${middleName} ${lastName}`;
//    return fullName;
// }
// // This works:
// console.log(fullName("Mary", "Moore", "Tyler"));
// // What do I do if someone doesn't have a middle name?
// console.log(fullName("Jimbo","xyz", "Jones"));

//***************************************************************************************

// interface Student {
//    firstName: string;
//    lastName: string;
//    belts: number;
// }
// function graduate(ninja: Student){
//    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
// }
// const christine = {
//    firstName: "Christine",
//    lastName: "Yang",
//    belts: 2
// }
// const jay = {
//    firstName: "Jay",
//    lastName: "Patel",
//    belt: 4
// }
// // This seems to work fine:
// console.log(graduate(christine));
// // This one has problems:
// console.log(graduate(jay));

// // //***********ANS*************

// interface Student {
//    firstName: string;
//    lastName: string;
//    belts: number;
// }
// function graduate(ninja: Student){
//    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
// }
// const christine = {
//    firstName: "Christine",
//    lastName: "Yang",
//    belts: 2
// }
// const jay = {
//    firstName: "Jay",
//    lastName: "Patel",
//    belt: 4
// }
// // This seems to work fine:
// console.log(graduate(christine));
// // This one has problems:
// console.log(graduate(jay));


//Argument of type '{ firstName: string; lastName: string; belt: number; }' is not assignable to parameter of type 'Student'.
  //Property 'belts' is missing in type '{ firstName: string; lastName: string; belt: number; }'.
//***************************************************************************************


class Ninja {
   fullName: string;
   constructor(
      public firstName: string,
      public lastName: string){
         this.fullName = `${firstName} ${lastName}`;
      }
   debug(){
      console.log("Console.log() is my friend.")
   }
}
// This is not making an instance of Ninja, for some reason:
const shane = new Ninja();//Value of type 'typeof Ninja' is not callable. Did you mean to include 'new'?
const shane = new Ninja("firstName", "lastName");
// Expected 2 arguments, but got 0.
// constructor Ninja(firstName: string, lastName: string): Ninja



// Since I'm having trouble making an instance of Ninja, I decided to do this:
const turing = {
   fullName: "Alan Turing",
   firstName: "Alan",
   lastName: "Turing"
}
// Now I'll make a study function, which is a lot like our graduate function from above:
function study(programmer: Ninja){
   return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
// Now this has problems:
console.log(study(turing));

//***************************************************************************************
// var increment = x => x + 1;
// // This works great:
// console.log(increment(3));
// var square = x => x * x;
// // This is not showing me what I want:
// console.log(square(4));
// // This is not working:
// var multiply = x,y => x * y;
// // Nor is this working:
// var math = (x, y) => let sum = x + y;
//    let product = x * y;
//    let difference = Math.abs(x-y);
//    return [sum, product, difference];
// ANS
//    var increment = x => x + 1;
//    // This works great:
//    console.log(increment(3));
//    var square = x => x * x; NO NEED TO USE {} TO RETURN ANYTHING
//    // This is not showing me what I want:
//    console.log(square(4));
//    // This is not working:
//    var multiply = (x,y) => x * y;
//    // Nor is this working:
//    var math = (x, y) => { ADD {}
//        let sum = x + y;
//        let product = x * y;
//        let difference = Math.abs(x - y);
//        return [sum, product, difference];
//    }

   //https://codeburst.io/javascript-arrow-functions-for-beginners-926947fc0cdc
