// let printPlayerName =  function (jerseyColor) {
//          console.log(`${this.player1} and ${this.player2} are ${this.teamName} players color-${jerseyColor}`);
//     }

// const csk = {
//     player1: 'dhoni',
//     player2: 'jaddu',
//     teamName: 'csk',
// }
// const mi = {
//     player1: 'rohit',
//     player2: 'surya',
//     teamName: 'mi',
// }

// printPlayerName.call(mi, 'blue');
// printPlayerName.apply(csk, ['yellow']);

// const players = printPlayerName.bind(csk)

// players('yellow')

class Person {
    constructor(name, age) {
      this.name = name;  // `this` refers to the instance of the Person class
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  const person1 = new Person('John', 25);
  person1.greet();  // Output: Hello, my name is John and I am 25 years old.
  