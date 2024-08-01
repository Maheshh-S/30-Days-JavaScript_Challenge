// Task 7: Match a word only if it is at the beginning of a string

let text = "Hello, this is a test.";
let regex = /^\b\w+\b/;
let matches = text.match(regex);
console.log(matches);

// Task 8: Match a word only if it is at the end of a string

let text = "This is a test. Goodbye.";
let regex = /\b\w+\b$/;
let matches = text.match(regex);
console.log(matches);