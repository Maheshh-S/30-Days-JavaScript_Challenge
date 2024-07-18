// Task 10: 

const myArr = ['Muhammad Mohsin Siddique', 300, ['Reading', 'coding'], 'BSCS', true, 3.70, ];

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(`${index + 1} Element of Array is: ${element} `);
}

// Task 11:  

const myArr2 = ['BSCS', 'BSIT', 'BSSE'];

myArr2.forEach((department, index)=>{
    console.log(`${index + 1} Element of Array is: ${department} `);
});
