// **Person**
// - Create a class called Person which accepts the name of a person as a string, and his/her age as a number.
// The Person class should have a method called describe which returns a string with the following syntax:
// “name, age years old”.
// **Example**
// If John is 19 years old, then the function describe of his object will return:
// “John, 19 years old”.
console.log("------Person class------");
class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  display() {
    console.log(`${this.name} ${this.age} years old`);
  }
}
const kevin = new Person(`Kevin`, 27);
kevin.display();

// **TV**
// - Create a TV class with properties like brand, channel and volume.
// Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
// Add methods to increase and decrease volume. Volume can’t never be below 0 or above 100.
// Add a method to set the channel randomly. Let’s say the TV has only 50 channels.
// Add a method to reset TV so it goes back to channel 1 and volume 50.
// It’s useful to write a status, that returns info about the TV status like: “Panasonic at channel 8, volume 75”.
console.log("------Tv class------");
class TV {
  constructor(_brand, _channel = 1, _volume = 50) {
    this.brand = _brand;
    this.channel = _channel;
    this.volume = _volume;
  }
  volumeUp() {
    if (this.volume < 100) {
      this.volume++;
    } else {
      console.log("Max level");
    }
  }
  volumeDown() {
    if (this.volume > 0) {
      this.volume--;
    } else {
      console.log("Min level");
    }
  }
  randomly() {
    this.channel = Math.floor(Math.random() * Math.floor(51));
  }
  resetTv() {
    this.channel = 1;
    this.volume = 50;
  }
  status() {
    console.log(
      `${this.brand} at channel ${this.channel}, volume ${this.volume}`
    );
  }
}
const france2 = new TV(`France 2`);
console.log(france2);
france2.volumeDown();
console.log(france2.volume); // -1
france2.volumeUp();
console.log(france2.volume); // +1
france2.randomly();
console.log(france2); // get random
france2.resetTv();
console.log(france2); // reset
france2.status(); // works
