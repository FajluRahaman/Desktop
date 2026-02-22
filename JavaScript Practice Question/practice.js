// map
const arr = [2, 4, 6,8];

const newArr = arr.map(num => num * 2);
// console.log(newArr);

// filter method

const fruits = ["Mango", "Banana"," Apple", "Graphs"];
//  const newFruits = fruits.filter(fruit => fruit.startsWith("G"));
 const newFruits = fruits.filter(function (fruit){
    return fruit.startsWith("B");
 });
// console.log(newFruits);

// reduce method

 const number = [12,23,25,36,27,29,20];
//  const newNum = number.reduce((acc , currVal) => acc + currVal, 0);
  const newNum = number.reduce((acc, curr) => {
        return curr > acc ? curr : acc;
  }, 0);
// console.log(newNum);

const num1 = [2,19,4,8,17,14,13,11, 171,16, 190];
const newNum1 = num1.reduce((acc, curr) => {
    if(curr % 2 !== 0) {
        acc ++;
    }
         return acc;

   
}, 0);
console.log(newNum1);


 
