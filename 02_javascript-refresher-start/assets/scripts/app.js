// # Base Syntax & Rules

// import { apiKey } from "./util.js";

// This is for default, you can name it as you want
// import apiKey from "./util.js";

// import * as util from "./util.js"

// console.log(util.apiKey)
// console.log(util.stuff)
// console.log(util.default)
// console.log(apiKey)

// # Variables, Values & Operators

// let userMessage = "Hello World!!!"
// const noChange = "sasdasd"

// userMessage = "Another value";

// console.log(userMessage);
// console.log(userMessage);
// console.log(userMessage);

// console.log(10 / 5);
// console.log("Hello" + "World");

// console.log(10 === "10");

// if (10 === 10) {
//     console.log("works")
// }

// # Functions

// function createGreeting(userName, message = "Hello") {
//     // console.log(message + " " + userName);

//     return "Hi, I am " + userName + " " + message
// }

// let greeting1 = createGreeting("Chris");
// // console.log(greeting1);
// // console.log(createGreeting("Manuel", "Hello men"));

// // Exercise
// function combine(value1, value2, value3) {
//     return value1 * value2 / value3
// }

// console.log(combine(2, 5, 5))

// // # Arrow Functions
// export default (userName, message) => {
//     console.log("Hello");
//     return userName + message;
// }

// # Objects and Classes
// const userName = "Max";
// const userAge = 32

// const user = {
//     name: "Max",
//     age: 34,
//     greet() {
//         console.log("Hello")
//         console.log(this.age)
//     }
// }
// // console.log(user.name);
// user.greet()

// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log("Hi!!");
//     }
// }

// const user2 = new User("manuekl", 34)
// console.log(user2)
// user2.greet();

// # Arrays
// const hobbies = ["Sports", "Cooking", "Reading"];
// console.log(hobbies[0]);

// hobbies.push("Working")
// console.log(hobbies)

// const index = hobbies.findIndex((item) => item === "Sports")
// console.log(index)

// const editedHobbies = hobbies.map((item) => ({text: item}))
// console.log(editedHobbies)

// function transformToObjects(numberArray) {
//     return numberArray.map((item) => ({val: item}))
// }
// const objects = transformToObjects([1, 2, 3])
// console.log(objects)

// # Destructuring
// const userNameData = ["Chris", "Perez"];

// const firstName = userNameData[0];
// const lastName = userNameData[1];

// const [firstName, lastName] = ["Chris", "Perez"];
// console.log(firstName)

// const user = {
//     name: "Max",
//     age: 34
// }

// const { name: userName, age } = {
//     name: "Max",
//     age: 34
// }
// console.log(userName)
// console.log(age)

// # The Spread Operator
const hobbies = ["Sports", "Cooking"];
const user = {
  name: "Max",
  age: 34,
};

const newHobbies = ["Reading"];

// Adding the three dots pull out the contents of the array
const mergedHobbies = [...hobbies, ...newHobbies];
console.log(mergedHobbies);

// the three dots pulls the key: value from the object
const extendedUser = {
  isAdmin: true,
  ...user,
};
console.log(extendedUser);

// # Control structures
// const password = prompt();
const password = "";

if (password === "Hello") {
  console.log("Access granted");
} else if (password === "hello") {
  console.log("hello");
} else {
  console.log("Access denied");
}

for (const hobby of hobbies) {
  console.log(hobby);
}

// # Manipulating the dom

const list = document.querySelector("ul");
list.remove();

// # Using Functions as Values

function handleTimeout() {
  console.log("Timed out!");
}

const handleTimeout2 = () => {
  console.log("Timed out... again!");
};

setTimeout(handleTimeout, 2000);
setTimeout(handleTimeout2, 3000);
setTimeout(() => {
  console.log("More timing out");
}, 4000);

function greeter(greetFn) {
  greetFn();
}

greeter(() => console.log("Hi"));

// # Defining Functions Inside of Functions
function init() {
  function greet() {
    console.log("Hi greet");
  }

  greet();
}

init();

// # Reference vs Primitives Values

// string, number, booleans are primitive Values
// we can edit them but can be overwritten
// if you change the value it will produce another string
let userMessage = "Hello";
userMessage = userMessage.concat("!!!");

// objects are reference Values
// in the variable you don't store the value but the address of the value in memory
// the array in the address changes but not the address
const hobbies3 = ["Sports", "Cooking"];
// hobbies3 = []
hobbies3.push("Working");
console.log(hobbies3);
