// ACTIVITY:5-

//->TASK-9
let greet = () => {
  console.log("Hieee");
}

function multiplegreet(func, number) {
  for (let i = 1; i <= number; i++) { 
      func(); 
  }
}

multiplegreet(greet, 5); 


// TASK-10
let func1 = num => (num + 1);
let func2 = num => (num * num);

function abc(func1, func2, num) {
  const result1 = func1(num);
  const result2 = func2(result1);
  return result2;
}

const finalResult = abc(func1, func2, 5);
console.log(finalResult); 