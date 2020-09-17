// JavaSCript Object Notation (JSON)
var objectLiteral = {
  firstname: "Julian",
  isQProgrammer: true,
};
console.log(JSON.stringify(objectLiteral));

/* ------------------------------------------------
OLD FORMAT:
<object>
  <firstname>Julian</firstname>
  <isQProgrammer>true</isQProgrammer>
</object>;

JSON FORMAT:
{
    "firstname": "Julian",
    "isAProgrammer": true,
}
--------------------------------------  */

var jsonValue = JSON.parse('{"firstname": "Julian","isAProgrammer": true}');
console.log(jsonValue);

// JSON looks similar but isn't an Object Literal.
