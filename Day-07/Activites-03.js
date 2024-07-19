// ACTIVITY: 3

//-- > TASK-5
const library = {
    name: "City Library",
    books: [
        {
            title: "Keep it concise",
            author: "William Shakespeare",
            year: 1962
        },
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960
        },
        {
            title: "BE happy",
            author: "George Orwell",
            year: 1949
        }
    ]
};
console.log(library);


// TASK-6
console.log(library.name);
library.books.forEach(el => {
    console.log(el.title);
});