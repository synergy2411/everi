"use strict";
exports.__esModule = true;
var Student = /** @class */ (function () {
    // private firstName: string;
    // private lastName : string;
    // private age : number;
    function Student(user) {
        this.user = user;
        // this.firstName = user.firstName;
        // this.lastName = user.lastName;
        // this.age = user.age;
    }
    // constructor(firstName: string, lastName: string) {
    //     this.firstName = firstName;
    // }
    Student.prototype.sayHello = function () {
        return "Hello " + this.user.firstName + " " + this.user.lastName;
    };
    return Student;
}());
exports.Student = Student;
