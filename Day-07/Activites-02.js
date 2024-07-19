// ACTIVITY:2

//-->TASK-3
const book1 = {
    title: " keep it concise",
    author: "William Shakespeare ",
    year: 1962,
    getInfo: function () {
        return `${this.title} by  ${this.author}`;
    }
}
console.log(book1.getInfo());


//  TASK-4
const book2 = {
    title: " keep it concise",
    author: "William Shakespeare ",
    year: 1962,
    getInfo: function (year) {
        return this.year = 1968;
    }
}
console.log(book2.getInfo());
console.log(book2);