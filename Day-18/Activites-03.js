// Task 6 :  Write a function to count the occurrences of each character in a string. Log the character counts.

function countCharacterOccurrences(str) {
  let charCount = {};

  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  return charCount;
}

// Example usage:
let text = "hello world";
let characterCounts = countCharacterOccurrences(text);
console.log("Character counts:", characterCounts);


// Task 7 : Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.

function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let start = 0;
  let charIndexMap = {};

  for (let end = 0; end < s.length; end++) {
    let char = s[end];
    if (char in charIndexMap) {
      start = Math.max(charIndexMap[char] + 1, start);
    }
    charIndexMap[char] = end;
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

// Example usage:
let inputString = "abcabcbb";
let longestSubstringLength = lengthOfLongestSubstring(inputString);
console.log("Length of the longest substring without repeating characters:", longestSubstringLength);
