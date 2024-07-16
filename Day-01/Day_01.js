//Day 1: Variable and data type

// Activity 1:Variable declaration

// Task 1:

var num = 10;
console.log(num);

// Task 2:

let str = "Mahesh";
console.log(str);

// Activity 2: Constant declaration

// Task 3:

const bool_val = true;
console.log(bool_val);

// Activity 3: Data Types

// Task 4:

let number = 10;
let string = "Mahesh";
let bool_value = false;
const obj = { name: "Mahesh", age: 18, gender: "male" };
const arr = [1, 2, 3, 4, 5];

console.log(typeof number);
console.log(typeof string);
console.log(typeof bool_value);
console.log(typeof obj);
console.log(typeof arr);

// Activity 4: Reassigning Variable

// Task 5:

let some_var = 100;
console.log(some_var);
some_var = 200;
console.log(some_var);

// Activity 5: Understanding const

// Task 6:

const const_var = 400;
console.log(const_var);
const_var = 500;
console.log(const_var);

//yes we can see this error 
/* ->const_var = 500;
 TypeError: Assignment to constant variable.*/

                    //Reason
// constants declared with the const keyword cannot be reassigned 