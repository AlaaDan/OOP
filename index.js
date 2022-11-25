'use strict';

const Person = function(firstName, birthYear){
    //1. console.log(this);
    // Instance properties
    this.firstName = firstName
    this.birthYear = birthYear

    // Never create a method in an instructor function, this is bad practice
    // this. calcAge = function(){
    //     console.log(2022 - this.birthYear)
    // };
}


const name = new Person("Alaa", 1985);
console.log(name)

// Those are the steps explaning how the constructor function works 
//1. New {) is created 
//2. function is called, this = {}
//3. {} ins linked to prototype
//4. function automatically retrun {}

const matlida = new Person("Matlida", 1970);
const jack = new Person("Jack", 2001);
console.log(matlida, jack)

// Check if a property is an instance of the instructor function 
console.log(matlida instanceof Person)

// Prototypes 
console.log(Person.prototype)

// This is the right way to add a method to the instructor function 

Person.prototype.calcAge= function(){
    console.log(2022 - this.birthYear)
    };

jack.calcAge()

console.log(matlida.__proto__)
console.log(jack.__proto__ === Person.prototype)
console.log(Person.prototype.isPrototypeOf(jack))

// Set property on a prototype
Person.prototype.species = 'Homo Sapiens';
console.log(jack, matlida)
console.log(jack.species, matlida.species)

// Check if a property is for the object or not

console.log(jack.hasOwnProperty('firstName'))
console.log(jack.hasOwnProperty('species'))

console.log(jack.__proto__)
// Object.prototype (top of prototype chain)
console.log(jack.__proto__.__proto__)
console.log(jack.__proto__.__proto__.__proto__)


console.dir(Person.prototype.constructor)


const arr = [3, 9, 8, 10, 20, 8, 9] // the same as new Array === []
console.log(arr.__proto__)
console.log(arr.__proto__ === Array.prototype)
console.log(arr.__proto__.__proto__)

// extending the prototype and adding a new one from my own, 
// but it's not a good practice to add to a built in 
Array.prototype.unique = function(){
    return [...new Set(this)]
}

console.log(arr.unique())


const h1 = document.querySelector('h1');

console.dir(x=> x+1);