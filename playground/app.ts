// var x = "20";

// var y = 10;

// var z = 20;

// console.log(x == z);        // ?
// console.log(x === z);        // ?

// console.log(x+y);       //?
// console.log(x - y);       //?


// Non Blocking

// function longRunningOperation(){
//     setTimeout(function(){
//         console.log("Running the operation...")
//     }, 3000);
// }

// function webRequest(req){
//     console.log("Starting with ID : " + req.id)
//     longRunningOperation();
//     console.log("Ending with ID : " + req.id)
// }

// webRequest({id : 1});
// webRequest({id : 2});


//ES6+ features

// Destructuring : Objects & Arrays

// var arr = ["foo", "bar", "bam"];

// var [arr1, arr3] = arr;

// arr3 = "baz";

// console.log(arr);       //

// console.log(arr3);      // ?

// var myModule = {
//     drawText  :function(text){ console.log("Drawing ", text)},
//     drawCircle : function(r){console.log(Math.PI * r * r)}
// }

// var {drawCircle : dc, drawText : dt} = myModule;

// dt("Sample Text");
// dc(3);

// var user = {
//     firstName : "Foo",
//     lastName : "Bar",
//     friends : ["Bam", "Baz"],
//     address : {
//         city : "201 Main Road",
//         state : "Karnataka"
//     }
// }

// var {
//     firstName, 
//     lastName, 
//     friends : [friend1, friend2], 
//     address : { 
//         city, 
//         state
//     }
// } = user;
// console.log(state);

//Template String
// - inline variable with string
// - write multi-line string

//  var fname = "Foo";

//  console.log(`Hello ${fname}!!!  

//  How are you?

//  `);



// block scoping : blocking the scope to the nearest curly braces
// - let 
// - const

// function demo(arr){
//     if(arr.length > 2){
//         let flash = "FLASHING"
//         console.log(load);
//     }else{
//         let load = "LOADING";
//     }
// }

// demo([12,3,4,4]);

// const USER_NAME = "Foo";
// console.log(USER_NAME);

// const USER = {
//     firstName : "Foo",
//     lastName : "Bar"
// }

// USER.firstName = "BAM";

// console.log(USER);      //?


// Rest & Spread Operator (...)

// var xyz : string = "String";
// console.log(typeof xyz)
// xyz = true;
// console.log(typeof xyz)

// console.log(xyz);



// function demo(fname, ...args){
//     console.log(args[0]);
// }
// // demo("username");
// // demo("username", 32);
// demo("username", 32, true);


// let numbers = [3,4,5];

// let newNumbers = [1,2, ...numbers, 6,7];

// console.log(newNumbers);     //?


// let user = {
//     firstName: "Foo",
//     lastName: "Bar",
//     getFullName: function () {
//         // let self = this;
//         let nestedFunc = () => {
//             return this.firstName + " " + this.lastName;
//         }
//         return nestedFunc();
//     }
// }

// console.log(user.getFullName());

//Classes

// import { Student } from '../student';
// import { Person } from './person';

// let obj : Person = {
//     firstName : "Foo",
//     lastName : "Bar",
//     age : 32
// }

// let foo = new Student(obj);
// console.log(foo.sayHello());




//Decorators :  additional info for the item
// 1. Class level
    // @Component({})
    // @Directive({})
    // @Pipe({})
    // @NgModule({})
    // @Injectable()
// 2. Property level
    // @Input()
    // @Ouput()
    // @HostBinding()
// 3. Method level
    // @HostListener()
// 4. Parameter level
    // @Inject()



