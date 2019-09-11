/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function hello (x) {
    console.log(this);
    return `I am going to say ${x}`;
}
console.log(hello('Whats up?!'));

// Principle 2
// code example for Implicit Binding
const baseballPlayer = {
    name: 'Babe Ruth',
    age: 99,
    tool: 'bat',
    swing: function(){
        return `${this.name} just swung his ${this.tool}`;
    }
}
console.log(baseballPlayer.swing());

// Principle 3
// code example for New Binding
function Car(gas){
    this.gas = gas;
    this.pump = function() {
        console.log(`This car takes ${this.gas} gas.`);
    }
}

const dodge = new Car('93');
console.log(dodge);
dodge.pump();

// Principle 4
// code example for Explicit Binding
const person = {
    name: 'Carlos'
}

const friend = {
    name: 'Gaby'
}

const random = {
    name: 'Dude'
}

const skills = ["HTML", "CSS", "JS"];
function introduceMyself (skill1, skill2, skill3) {
    return `Hi my name is ${this.name} and I know ho to do ${skill1}, ${skill2}, and ${skill3}.`
}

console.log(introduceMyself.apply(person, skills));
console.log(introduceMyself.call(friend,skills[0]));

const introduceDude = introduceMyself.bind(random, ...skills);
console.log(introduceDude());
