

// Task 9: Validate a simple password

let password = "Password123!";
let regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W).{8,}$/;
let isValid = regex.test(password);
console.log(isValid);


// Task 10: Validate a URL

let url = "https://www.example.com";
let regex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
let isValid = regex.test(url);
console.log(isValid);