// Creating  a class
class Person {
    constructor (name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`Hello my name is ${this.name} and I just turned ${this.age} years this year.`)
    }
 }
 const person1= new Person("Shaline Davida",20);
 const person2= new Person("Immaculate Lelei",18);
 person1.greet();
 person2.greet();

//   Creating a class using object literals
 const male = {
    name :"Jack",
    age:18,
    greet:function(){
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
 };
 male.greet();
// Class Inheritance
 class Human{
    constructor(name,age){
    this.name=name;
    this.age= age;
    }
greet(){
    console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
}
}
// Inheriting from Person
class Student extends Human{
}
let student = new Student("Jana",17);
student.greet();

// Added a prototype
class Human2{
    constructor(name,age,){
    this.name=name;
    this.age= age;
    }
    // Added a prototype to it myself
}
 Human2.prototype.greet=function(){
    console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
}
// Inheriting from Person
class Pupil extends Human2{
}
let pupil1 = new Pupil("Jana",17);
let pupil2 = new Pupil("Paul",15);
pupil1.greet();
pupil2.greet();

