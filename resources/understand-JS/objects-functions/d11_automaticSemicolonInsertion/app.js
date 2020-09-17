function getPerson() {
  return; // javascript add a semicolon automatically, we exist the function before accessing the value.
  {
    firstname: "Steve";
  }
}
console.log(getPerson());

// don't let javascript use automatic semicolon, do it yourself, it can be dangerous and very hard to track down.

function getPersonFixe() {
  return {
    firstname: "Steve",
  };
}
console.log(getPersonFixe());
