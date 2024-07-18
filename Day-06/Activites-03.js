// Task 7: 
const myArr = [1,2,3,4,5,6,7,8,9,10];

const myDoubleNumsArray = myArr.map((num)=> (num * 2)); 

console.log(myDoubleNumsArray); 

// Task 8: 
const myArr2 = [1,2,3,4,5,6,7,8,9,10];

const myEvenNumsArray = myArr2.filter((num)=> (num % 2 === 0));

console.log(myEvenNumsArray);

// Task 9: 
const myArr3 = [100,50,10,20,30,150];

const total = myArr3.reduce((accumulator , num)=> (accumulator + num));

console.log(total);

// OR

const myArr4 = [100,50,10,20,30,150];

const initialValue = 0;

const total4 = myArr4.reduce((accumulator , num)=> accumulator + num, initialValue);

console.log(total);