function Person(name, age) {
    this.name = name;
    this.age = age;
    this.locstion = "CodeAC";
  
}
Person.prototype.sayHello = function() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
}
p1 = new Person('Dejan', 20);
p1.sayHello();


var a = ["a", "b", "c"] 
   
Array.prototype.size = function() {
    console.log(`This array has ${this.length} elements`);
}
a.size();


function Person(name, age) {
    this.name = name;
    this.age = age;

}
function Student(name, age, studentId) {
    Person.call(this, name, age);
    this.is = studentId;
} 
Student.prototype = object.create(Person.prototype)
Student.prototype.constructor = Student; 