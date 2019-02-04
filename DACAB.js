/*function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person = new Person('Ucha', '65'); 
*/
function Person() {
    this.age = 0;

    setTimeout(() => {
        this.age++;
    }, 3000);
}
function hello(adverb) {
    return `Hello ${adverb} ${this.age >= 65 ? "old " : ""}${this.name}!`;
}

const me = { name: "Ucha", age: 65 };
const you = { name: "Student" };
console.log(hello.call(me, "mighty"));
console.log(hello.call(you, "powerful"));