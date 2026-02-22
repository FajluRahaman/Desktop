//reverse string using for loop
// function reverseString(str){
//     let reversed = "";
//     for(let i = str.length - 1; i >= 0; i--){
//         reversed += str[i];
//     }
//     return reversed;
// }
// console.log(reverseString("javascript"));

// using while loop

// function revString(str){
//     let i = str.length - 1;
//     let reversed = "";
//     while(i >= 0){
//         reversed += str[i];
//         i --;
//     }
//     return reversed;
// }
// console.log(revString("Rajan"));

// using Recursion

function revString(str){
    if(str === "") return "";
    return revString(str.substr(1)) + str[0];
}
console.log(revString("khalid"));