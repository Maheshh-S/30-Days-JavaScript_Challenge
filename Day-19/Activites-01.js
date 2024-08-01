// Task 1: Match all occurrences of the word "JavaScript" in a string

let text = "JavaScript is great. I love JavaScript!";
let regex = /JavaScript/g;
let matches = text.match(regex);
console.log(matches);
console.log(matches.length);

// Task 2: Match all digits in a string

let text = "There are 123 apples and 456 oranges.";
let regex = /\d+/g;
let matches = text.match(regex);
console.log(matches);




