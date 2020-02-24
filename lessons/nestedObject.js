// ****NESTED OBJECTS****

const tShirt = {
  color: `red`,
  size: [`XS`, `S`, `M`, `L`, `XL`],
  country: {
    name: [`China`, `Germany`],
    capital: [`Pekin`, `Berlin`],
    population: {
      Pekin: 11000000,
      Beijing: 44000,
      printOut: function() {
        console.log(this.Pekin); // this -> obj{ population }
      }
    },
    display: function() {
      console.log(this.name); // this -> obj{ tShirt }
    }
  },
  fabric: `cotton`,
  method: function() {
    console.log(this.color); // this -> obj{ tShirt }
  }
};

// Calling individual value:
tShirt.country.capital[1];
tShirt.country.population["Beijing"];

// Calling each functions:
console.log("Calling all functions :");
tShirt.country.population.printOut();
tShirt.country.display();
tShirt.method();

// Assign with variables to avoid repetitions
console.log("Use variables to call functions :");
let newShortWay = tShirt.country;
newShortWay.display(); // shorter call if needed

let car = [`Ford`, `pink`, 1998, `old`, `damaged`];
let [carName, carColor, carYear, ...rest] = car;
console.log(carYear); // carName assign to Ford
console.log(rest); // rest of index

const object = {
  firstName: `Ali`,
  old: 22,
  country: `Germany`
};
({ firstName, old, country } = object);
console.log(firstName); // Access firstName without dot notation
