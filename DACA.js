/*function countMe (number) {
    console.log('Number:', number);
    this.count++;

}
countMe.count = 0;
for (let i =0; i<3; i++) countMe(i);

console.log(countMe.count)
*/
/* function bindingTest () {
    console.log(this.value);
}
const implicitContext = {
    value: 'implicit',
    bindingTest: bindingTest
}
implicitContext.bindingTest()
*/

//function bindingTest () {
  //  console.log(this.value);}

/*  function hello(adverb) {
    return `Hello ${adverb} ${this.age >=65 ? "old" : ""} ${this.name}`;

}
const me = {name:"Ucha", age: 65};
const you = {name: "Student"};
console.log(hello.call(me, `mighty`));
console.log(hello.call(you, `powerful`));
*/
/*function hello (greet, adverb) {
    return `${greet} ${adverb} ${this.name}!`;
}
const me = {name: "Ucha"};
const you = {name: "Student"};
console.log(hello.apply(me, ['Hi', 'mighty']));
console.log(hello.apply(you, ['Hello', 'powerful']));
*/
function hello (greet, adverb) {
    //return `Hello ${this.name}`; ovo dole je spoj proslog i novog primera
    return `${greet} ${adverb} ${this.name}!`;
}
const me = {name: "Ucha"}; const helloMe = hello.bind(me);
const you = {name: "Student"}; const helloYou = hello.bind(you);
console.log(helloMe('Hi', 'mighty'));
console.log(helloYou('Hello', 'powerful'));








