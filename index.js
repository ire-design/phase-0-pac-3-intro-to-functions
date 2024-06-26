// Follow along with the examples here

function sayHello(){
    console.log("Hello!");
}
sayHello();

/*my example*/
function sayHelloTo(firstName){
    console.log(`\nHello ${firstName}, how has your day been?`);
}
sayHelloTo("Toto");

// another test
function say(greeting, firstName) {
  console.log(`${greeting}, ${firstName}!`);
}
say("How do you do", "Klassen?")

//return values
function add(a, b){
    return a + b;
}
console.log(add(1, 2));

 //next example for a calculator
let num1 = 5;
let num2 = 40;

const sum = add(num1, num2);
const message = `The sum of your numbers is: ${sum}`;

console.log(message);

//another function example
function call(greeting, firstName){
    return`${greeting} ${firstName}`
    //console.log("I was called"); --refused to call
}
console.log(call("Hello", "Irene"));