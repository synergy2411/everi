import { Person } from './person';

export class Student {
    // private firstName: string;
    // private lastName : string;
    // private age : number;

    constructor(private user : Person){
        // this.firstName = user.firstName;
        // this.lastName = user.lastName;
        // this.age = user.age;
    }
    // constructor(firstName: string, lastName: string) {
    //     this.firstName = firstName;
    // }

    sayHello() {
        return "Hello " + this.user.firstName + " " + this.user.lastName;
    }
}