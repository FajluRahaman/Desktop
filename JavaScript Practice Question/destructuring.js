//Object destructuring

//create an object
const person = {
    firstName: "Kamil",
    lastName: "Mishra",
    age: 50
};
//Destructuring
// const {firstName, lastName} = person;
// console.log(firstName);
const{age, ...rest} = person;
console.log(rest);

//String Destructuring
let name = "kuldeep";
let[a1,a2,a3,a4,a5] = name;
console.log(a4);

//array destructuring

// const arr = [1,2,3,4,45,5,6];
// let[a,b] = arr;
// console.log(b);

//const number = [1,2,3,4,45,5,6];

// Array.toArray(number);
// console.log(number);

// Array.isArray(number);
// console.log(number);

// const fruits =  ["Mango", "Banana", "Apple", "Orange"];
// const myList = fruits.toString();
// console.log(myList);

// console.log(typeof(myList));

// const number = [1,2,3,4,45,5,6];
// let text = number.toString();
// console.log(text);

// console.log(typeof(text));
// console.log(typeof(number));


// let person1 = {
//   firstname: "John",
//   lastname: "Doe",
//   age: 24
// }
// let text = person1.toString();

// console.log(text);
// console.log(typeof(text));
// console.log(typeof(person1));

// const num1 = [5, 6, 7];
// const num2 = num1.toString();
// console.log(num2);
// console.log(typeof(num2));
// console.log(typeof(num1));

let num = 123;
const newNum = num.toString();
console.log(newNum);
console.log(typeof(newNum));





