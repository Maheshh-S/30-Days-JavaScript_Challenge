// ACTIVITY:4

//-->TASK-7
const book3 = {
    title: " keep it concise",
    author: "William Shakespeare ",
    year: 1962,
    getInfo: function () {
        return `${this.title} and ${this.year}`;
    }
}
console.log(book3.getInfo());
