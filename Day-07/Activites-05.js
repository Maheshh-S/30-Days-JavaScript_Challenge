//  ACTIVITY:5

//-->TASK-8
for (const key in book3) {
    const element = book3[key];
    console.log(key + ":" + element);
}


// TASK-9
const book4 = {
    title: "Keep it Concise",
    author: "William Shakespeare",
    year: 1962
};
const keys = Object.keys(book4);
console.log("Keys:", keys);
const values = Object.values(book4);
console.log("Values:", values);