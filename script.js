// /**
//  * Master Javascript - by Med Reda Kamal
//  * Script File
//  */

// /* #1 : Iterate with for...of loop using Symbol.iterator - (Users Example) */
// const usersArr = [
//   { name: "Kamal", email: "kamal@gmail.com", status: "Active" },
//   { name: "Ilham", email: "ilham@gmail.com", status: "Not active" },
//   { name: "Youssef", email: "youssef@gmail.com", status: "Active" },
// ];
// const usersArrIterator = usersArr[Symbol.iterator]();
// const usersListDOM = document.getElementById("usersList");

// for (let user of usersArrIterator) {
//   const userRow = document.createElement("tr");
//   const userNameDOM = document.createElement("td");
//   const userEmailDOM = document.createElement("td");
//   const userStatusDOM = document.createElement("td");
//   userNameDOM.textContent = user.name;
//   userEmailDOM.textContent = user.email;
//   userStatusDOM.textContent = user.status;
//   userRow.appendChild(userNameDOM);
//   userRow.appendChild(userEmailDOM);
//   userRow.appendChild(userStatusDOM);
//   usersListDOM.appendChild(userRow);
// }

// /* #2 : Case sensitivity */
// let hello = "Hello";
// let Hello = "Hello Again";
// let HELLO = "Hello Again !";
// // console.log(hello);
// // console.log(Hello);
// // console.log(HELLO);

// /**
//  * #3 : Variables Declaration
//  * Difference between var, let, const
//  */

// // let
// console.log(mylet1); // Uncaught Reference Error
// let mylet1;

// let mylet2;
// console.log(mylet2); // undefined

// let mylet3 = "Hello from let";
// console.log(mylet3) // Hello from let

// // var
// var myvar1;
// console.log(myvar1); // undefined

// console.log(myvar2)
// var myvar2;

// var myvar3 = "Hello from var";
// console.log(myvar3);

// // const
// const myconst1;
// console.log(myconst1); // Missing initializer in const

// console.log(myconst2); // Missing initializer in const
// const myconst2;

// const myconst3 = "Hello from const";
// console.log(myconst3); // Hello from const

/**
 * #4 : The "+" operator
 * How "+" operator works
 */

let justANumber = 10;
console.log(justANumber); // Output is "10" (Number)
justANumber += "1";
console.log(justANumber); // Output is "101" (String)
justANumber -= "1";
console.log(justANumber); // Output is "100" (Number)
