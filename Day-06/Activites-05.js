// Task 10: 

const myArr = ['Mahesh', 300, ['Reading', 'coding'], 'CSE', true, 3.70, ];

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(`${index + 1} Element of Array is: ${element} `);
}


// Task 11:  

const myArr2 = ['CSE', 'ICSE', 'CBSE'];

myArr2.forEach((department, index)=>{
    console.log(`${index + 1} Element of Array is: ${department} `);
});
