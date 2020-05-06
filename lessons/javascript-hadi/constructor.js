// ****GETTER & SETTER****

const userData = {
  firstName: `Hadi`,
  lastName: `Nsreeny`,
  get fullName() {
    // this is getter method
    console.log(`${this.firstName} ${this.lastName}`);
  },
  set fullName(str) {
    // this is setter method
    let arr = str.split(" ");
    this.firstName = arr[0];
    this.lastName = arr[1];
  }
};
userData.fullName;
// userData.firstName = `Ali`;
// userData.lastName = `Schmidt`;
userData.fullName = "New Name";
userData.fullName; // getting new Data

// ****CONSTRUCTOR****

function Person(name, age, activities) {
  this.name = name;
  this.age = age;
  this.activities = activities;
}
let ali = new Person(`Ali`, 22, [`Party`, `Dance`]);
console.log(ali);

// Create a constructor that print name and lastName as a method
function Name(name, lastName) {
  this.name = name;
  this.lastName = lastName;
  this.printOut = function() {
    console.log(`${name} ${lastName}`);
  };
}
let kev = new Name(`Kevin`, `Schmidt`);
kev.printOut();

// ****CLASSES****

// Parameters inside declaration
class Animals {
  constructor(_kind, _hometown) {
    // setting
    this.kind = _kind;
    this._hometown = _hometown;
  }
  // method
  display() {
    console.log(
      `It is a very cute ${this.kind}, is he happy in ${this.hometown}?`
    );
  }
}
let casper = new Animals(`dog`, `Porto`);
casper.display();
let sophie = new Animals(`fish`, `Berlin`);
const dyson = new Animals(`cat`, `Berlin`);
console.log(casper);

// Parameters after declaration
class Color {
  constructor() {
    this.name = "";
    this.age = 0;
    this.birthDay = 0;
  }
}
const red = new Color();
red.name = `red`;
red.age = 156;
console.log(red);

// ****EXTENDS****

class Character {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  display() {
    console.log(`Hey ${this.name}`);
  }
}

class Kid extends Character {
  // inheriting the method from the original class which being called
  constructor(_name, _age, _hight) {
    super(_name, _age); // take values from original class Character
    this.hight = _hight; // new value only this class
  }
  show() {
    return `${this.name} is ${this.age} years old, I am child class`;
  }
}
let julian = new Kid("Julian", 18);
julian.display(); // from Character class
console.log(julian.show()); // from Kid class
julian.increment = function() {
  // adding a method just for Julian
  console.log("New method just for Julian");
};
julian.increment();
