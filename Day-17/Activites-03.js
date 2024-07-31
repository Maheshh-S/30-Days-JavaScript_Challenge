// Task 5 : Implement a Queue class with methods enqueue , dequeue , and front .

class Queue {
    constructor() {
        this.items = [];
    }

    // Add an element to the rear of the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Remove and return the front element of the queue
    dequeue() {
        if (this.isEmpty()) {
            console.log('Queue is empty');
            return null;
        }
        return this.items.shift(); // shift() removes the first element from the array
    }

    // Get the front element of the queue without removing it
    front() {
        if (this.isEmpty()) {
            console.log('Queue is empty');
            return null;
        }
        return this.items[0]; // Access the first element in the array
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the size of the queue
    size() {
        return this.items.length;
    }

    // Display all elements in the queue
    display() {
        console.log(this.items);
    }
}

// Example usage:
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.display(); // Output: [1, 2, 3]

console.log(queue.front()); // Output: 1

console.log(queue.dequeue()); // Output: 1
queue.display(); // Output: [2, 3]

console.log(queue.dequeue()); // Output: 2
console.log(queue.dequeue()); // Output: 3
console.log(queue.dequeue()); // Output: Queue is empty, null


// Task 6 : Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.

class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        console.log('Queue is empty');
        return null;
      }
      return this.items.shift(); // shift() removes the first element from the array
    }
  
    front() {
      if (this.isEmpty()) {
        console.log('Queue is empty');
        return null;
      }
      return this.items[0]; // Access the first element in the array
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    display() {
      console.log(this.items);
    }
  }
  
  // Simulate a simple printer queue
  class PrinterQueue {
    constructor() {
      this.queue = new Queue();
    }
  
    addPrintJob(job) {
      console.log(`Adding print job: ${job}`);
      this.queue.enqueue(job);
    }
  
    processPrintJobs() {
      console.log('Processing print jobs...');
      while (!this.queue.isEmpty()) {
        const job = this.queue.dequeue();
        console.log(`Printing job: ${job}`);
      }
      console.log('All print jobs have been processed.');
    }
  
    displayQueue() {
      console.log('Current print queue:');
      this.queue.display();
    }
  }
  
  // Example usage:
  const printerQueue = new PrinterQueue();
  
  printerQueue.addPrintJob('Document1.pdf');
  printerQueue.addPrintJob('Image2.png');
  printerQueue.addPrintJob('Report3.docx');
  
  printerQueue.displayQueue(); 
  printerQueue.processPrintJobs();
  
  
  printerQueue.displayQueue(); 
  