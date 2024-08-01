
// Task 3: Match all words starting with a capital letter

let text = "This is a Test. Hello World!";
let regex = /\b[A-Z][a-z]*\b/g;
let matches = text.match(regex);
console.log(matches);



// Task 4: Match all sequences of one or more digits

let text = "123 apples, 456 oranges , and 789 bananas.";
let regex = /\d+/g;
let matches = text.match(regex);
console.log(matches);