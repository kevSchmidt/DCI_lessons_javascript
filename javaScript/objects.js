// Objects
// keys, properties : value

const object = {
  name: `Nancy`,
  lastName: `Smith`,
  age: 44,
  address: `Berliner str. 3`,
  kids: ["Lena", "Tom"]
};

const save = new Object();

// Accessing properties with bracket notation

const car = {};
car["name"] = "Ford";
car["year"] = 220;

// Accessing properties with dot notation

car.age = 22; // careful: change last value of age
car.color = "Blue";
console.log(car.color); // access a value in object

// With for

for (let property in car) {
  console.log(`car.${property} : ${car[property]}`);
}

// Object.entries()

const person = {
  name: `Kevin`,
  age: 27,
  birthday: 1993,
  print: function() {
    // print is a method (function with property)
    console.log(
      `This user is called ${person.name}, he has his birthday in ${person.birthday} and have now ${person.age} years old.`
    );
  }
};

for (let [key, values] of Object.entries(person)) {
  console.log(`${key} : ${values} `);
}

// Methods
person.print();
person.print2 = function() {
  console.log(`hello new function here`);
};
person.print2();

function userData(userName, userAge, userAddress) {
  const obj = {
    name: userName,
    age: userAge,
    address: userAddress
  };
  obj.output = function() {
    console.log(`Hi ${this.name} you are ${this.age} years old`);
  };
  obj.output();
  return obj;
}
userData("Kevin", 47, "Berlin");

// Object.keys()
console.log(Object.keys(person));

// Object.values()
console.log(Object.values(person));

// Object.assign()

const obj1 = { 1: 2, 2: 300 };
const obj2 = { 1: 4, 3: 3224 };
const totalObj = Object.assign(obj1, obj2); // (obj1 = target, obj2 = source)
console.log(totalObj);
console.table(person); // print table

// Object.defineProperty()

Object.defineProperty(person, `birthDay`, {
  // object, property name, {values}
  value: 20,
  writable: false // false = user can not write
});
console.log(person.birthDay);

// Object.defineProperties()

Object.defineProperties(person, {
  part1: {
    value: [],
    writable: true
  },
  part2: {
    value: 255,
    writable: false
  }
});

// Object.prototype.hasOwnProperty

const newPerson = {
  hight: 177,
  age: 34,
  city: `Berlin`
};
console.log(newPerson.hasOwnProperty("color"));
console.log(newPerson.hasOwnProperty("age"));
