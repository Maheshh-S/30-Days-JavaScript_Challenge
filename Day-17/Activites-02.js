// Task 3 : Implement a stack class with methods push,pop , and peek .

class Stack {
    constructor() {
      this.items = [];
    }
  
    // Push a new element onto the stack
    push(element) {
      this.items.push(element);
    }
  
    // Pop the top element off the stack and return it
    pop() {
      if (this.isEmpty()) {
        console.log('Stack is empty');
        return null;
      }
      return this.items.pop();
    }
  
    // Peek at the top element of the stack without removing it
    peek() {
      if (this.isEmpty()) {
        console.log('Stack is empty');
        return null;
      }
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the size of the stack
    size() {
      return this.items.length;
    }
  
    // Display all elements in the stack
    display() {
      console.log(this.items);
    }
  }
  
  // Example usage:
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  stack.display(); // Output: [10, 20, 30]
  
  console.log(stack.peek()); // Output: 30
  
  console.log(stack.pop()); // Output: 30
  stack.display(); // Output: [10, 20]
  
  console.log(stack.pop()); // Output: 20
  console.log(stack.pop()); // Output: 10
  console.log(stack.pop()); // Output: Stack is empty, null
  

  // Task 4 : Use the Stack class to reverse a string by pushing all characters onto the stack and then popping off them .

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

// Function to reverse a string using the Stack class
function reverseString(str) {
    const stack = new Stack();

    // Push all characters of the string onto the stack
    for (let char of str) {
        stack.push(char);
    }

    // Pop all characters off the stack and build the reversed string
    let reversedStr = '';
    while (!stack.isEmpty()) {
        reversedStr += stack.pop();
    }

    return reversedStr;
}

// Example usage:
const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: "!dlroW ,olleH"