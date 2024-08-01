// // Task 1 : Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

// function bubbleSort(arr) {
//     let n = arr.length;
//     let swapped;
//     do {
//       swapped = false;
//       for (let i = 0; i < n - 1; i++) {
//         if (arr[i] > arr[i + 1]) {
//           // Swap arr[i] and arr[i + 1]
//           let temp = arr[i];
//           arr[i] = arr[i + 1];
//           arr[i + 1] = temp;
//           swapped = true;
//         }
//       }
//       n--; // Reduce the range to be sorted as the largest element is at the end
//     } while (swapped);
//     return arr;
//   }
  
//   // Example usage:
//   let numbers = [64, 34, 25, 12, 22, 11, 90];
//   let sortedNumbers = bubbleSort(numbers);
//   console.log("Sorted array:", sortedNumbers);
  

  
// // Task 2 : Implement the selection sort algorithm to sort an array numbers in ascending order . Log the sorted array.

// function selectionSort(arr) {
//   let n = arr.length;

//   for (let i = 0; i < n - 1; i++) {
//     // Assume the minimum element is the first element in the unsorted portion
//     let minIndex = i;

//     // Iterate through the unsorted portion of the array
//     for (let j = i + 1; j < n; j++) {
//       // Update minIndex if a smaller element is found
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }

//     // Swap the found minimum element with the first element of the unsorted portion
//     if (minIndex !== i) {
//       let temp = arr[i];
//       arr[i] = arr[minIndex];
//       arr[minIndex] = temp;
//     }
//   }

//   return arr;
// }

// // Example usage:
// let numbers = [64, 34, 25, 12, 22, 11, 90];
// let sortedNumbers = selectionSort(numbers);
// console.log("Sorted array:", sortedNumbers);





// Task 3 : Implement the quicksort algorithm to sort an array of numbers in ascending order . Log the sorted array .

function quickSort(arr) {
  // Base case: arrays with 0 or 1 element are already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Select a pivot element from the array (here we choose the last element)
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  // Partition the array into two halves
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Recursively sort the left and right subarrays, and concatenate with the pivot
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage:
let numbers = [64, 34, 25, 12, 22, 11, 90];
let sortedNumbers = quickSort(numbers);
console.log("Sorted array:", sortedNumbers);
