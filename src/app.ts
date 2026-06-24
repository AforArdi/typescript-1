console.log('Hello From Typescript');
console.log('Hello From Ardi');

// primitive data types
let name: string = 'Ardi';
let age: number = 25;
let isStudent: boolean = true;

console.log(`Name: ${name}, Age: ${age}, Is Students: ${isStudent}`);

// non premitive data types
let fruits: string[] = ['Apple', 'Banana', 'Mango'];
// fruits.push(5); - array is string type, can't take number type value
fruits.push('Orange');
console.log(`Fruits: ${fruits.join(', ')}`);

// isBusy is optional here
let person: {name:string, age:number, isBusy?:boolean, } = {
    name: 'Ardi',
    age: 23,
    // isBusy: false
}
console.log(`person: ${person.name}, age: ${person.age}, isBusy: ${person.isBusy}`);

function greet(name: string){
    console.log(`Hello ${name}`);
}
greet('John');

let student: {name: string, readonly id: number, isPresent: boolean} = {
    name: 'David',
    id: 1212,
    isPresent: true
}
student.name = 'David Smith';
console.log(student.name);

// student.id = 1213; -- can not assign to readonly property, error

// Type & Interface
// ; - when describing the shape of an object
// type can describe anything, interface can only describe the shape of an object
type User = {
  name: string;
  age: number;
};

interface User2 {
  name: string;
  age: number;
}
// both is extendable:
type student = User & {
    fatherName: string;
}
interface student2 extends User2 {
    isActive: boolean;
}

// next() - continue to the next middleware or route