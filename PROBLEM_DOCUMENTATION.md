# Job Marathon Progress - Problem Documentation

## Overview
This document contains all 15 problems from the "Problem Slove" directory with descriptions, implementations, inputs, and outputs.

---

## Day 1 Problems

### Problem 1: Swap Two Variables [Easy]
**Description:** Swap the values of two variables without using a third variable.
**Input:** a = 5, b = 10
**Output:** { a: 10, b: 5 }
**Code:**
```javascript
function swap(a, b) {
    [a, b] = [b, a];
    return { a, b }
}
console.log(swap(5, 10)); // { a: 10, b: 5 }
```

---

### Problem 2: Check Even or Odd [Easy]
**Description:** Returns true if a number is even, false if odd.
**Input:** 4 (even), 7 (odd)
**Output:** true, false
**Code:**
```javascript
function checkEven(num){
    if((num % 2) == 0){
        return true
    }
    return false
}
console.log(checkEven(27)); // false
console.log(checkEven(28)); // true
```

---

### Problem 3: Find the Largest of Three Numbers [Easy]
**Description:** Returns the largest of three numbers.
**Input:** 3, 7, 5
**Output:** 7
**Code:**
```javascript
function findMax(a,b,c){
    return [a, b, c].sort((x, y) => y - x)[0];
}
console.log(findMax(3,7,5)); // 7
```

---

### Problem 4: Celsius to Fahrenheit [Easy]
**Description:** Converts Celsius to Fahrenheit using formula: (C × 9/5) + 32
**Input:** 0, 100
**Output:** 32, 212
**Code:**
```javascript
function toFahrenheit(celsius){
    return (celsius * 9/5) + 32
}
console.log(toFahrenheit(0));    // 32
console.log(toFahrenheit(1000)); // 1832
```

---

### Problem 5: Check Positive, Negative or Zero [Easy]
**Description:** Returns 'positive', 'negative', or 'zero' based on value.
**Input:** -5, 0, 5
**Output:** 'negative', 'zero', 'positive'
**Code:**
```javascript
function checkSign(n){
    if(typeof n !== "number"){
        return "Invalid Input"
    }
    if(n > 0){
        return "positive"
    }else if(n === 0){
        return "zero"
    }
    else{ 
        return "negative"
    }
}
console.log(checkSign(-5));  // 'negative'
console.log(checkSign(5));   // 'positive'
console.log(checkSign("0")); // 'Invalid Input'
console.log(checkSign(0));   // 'zero'
```

---

## Day 2 Problems

### Problem 6: Reverse a String [Easy]
**Description:** Returns the reverse of a given string.
**Input:** 'hello', 'developer'
**Output:** 'olleh', 'repoleved'
**Code:**
```javascript
function reverseString(str){
    let output = "";
    for (let i = str.length - 1; i >= 0; i--) {
        output += str[i]
    }
    return output
}
console.log(reverseString("developer")); // 'repoleved'
```

---

### Problem 7: Count Vowels in a String [Easy]
**Description:** Counts vowels (a, e, i, o, u) in a string.
**Input:** 'hello', 'javascript'
**Output:** 2, 3
**Code:**
```javascript
function countVowels(str){
    let vowels = ["a","e","i","o","u"];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if(vowels.includes(str[i])){
            count++
        }
    }
    return count
}
console.log(countVowels("javascript")); // 3
```

---

### Problem 8: Check Palindrome [Easy]
**Description:** Returns true if string reads same forwards and backwards.
**Input:** 'racecar', 'hello'
**Output:** true, false
**Code:**
```javascript
function isPalindrome(str){
    let clean = str.toLowerCase().replace(/[^a-z0-9]/g,"");
    let reversed = clean.split("").reverse().join("");
    return clean === reversed;
}
console.log(isPalindrome("racecar")); // true
```

---

### Problem 9: Capitalize First Letter of Each Word [Easy]
**Description:** Capitalizes first letter of every word in string.
**Input:** 'hello world'
**Output:** 'Hello World'
**Code:**
```javascript
function titleCase(n){
    let names = n.split(" ");
    let output = []
    for (let i = 0; i < names.length; i++) {
        let r = names[i].charAt(0).toUpperCase() + names[i].slice(1);
        output.push(r)
    }
    return output.join(" ");
}
console.log(titleCase("hello world how are you have you good"));
// 'Hello World How Are You Have You Good'
```

---

### Problem 10: Count Occurrences of a Character [Easy]
**Description:** Returns count of how many times character appears in string.
**Input:** 'banana', 'a' | 'habaiab', 'a'
**Output:** 3, 3
**Code:**
```javascript
function countChar(str,char){
    let count = 0;
    for (const s of str) {
        if(s === char){
            count++
        }
    }
    return count
}
console.log(countChar("habaiab","a")); // 3
```

---

## Day 3 Problems

### Problem 11: Find the Sum of an Array [Easy]
**Description:** Returns sum of all numbers in array.
**Input:** [1, 2, 3, 4, 5]
**Output:** 15
**Code:**
```javascript
function sumArray(nums){
    return nums.reduce((acc,curr) =>{
        return acc + curr
    },0)
}
console.log(sumArray([1,2,3,4])); // 10
```

---

### Problem 12: Find Maximum Value in Array [Easy]
**Description:** Returns largest number in array without Math.max().
**Input:** [3, 1, 7, 2, 9]
**Output:** 9
**Code:**
```javascript
function findMax(nums){
    let max = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if(max < nums[i]){
            max = nums[i];
        }
    }
    return max
}
console.log(findMax([1,4,8,6,19,4])); // 19
```

---

### Problem 13: Remove Duplicates from Array [Easy]
**Description:** Returns new array with duplicate values removed.
**Input:** [1, 2, 2, 3, 3, 4]
**Output:** [1, 2, 3, 4]
**Code:**
```javascript
function removeDuplicates(arr){
    let uniqueValues = [];
    for (const item of arr) {
        if(!uniqueValues.includes(item)){
            uniqueValues.push(item)
        }
    }
    return uniqueValues
}
console.log(removeDuplicates([1, 2, 2, 3, 3, 4])); // [1, 2, 3, 4]
```

---

### Problem 14: Flatten a Nested Array [Medium]
**Description:** Flattens nested array into single level.
**Input:** [1, [2, 3], [4, [[[[5]]]]]]
**Output:** [1, 2, 3, 4, 5]
**Code:**
```javascript
function flattenArray(arr){
    let output = []
    for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])){
            output = output.concat(flattenArray(arr[i]))
        }
        else{
            output.push(arr[i])
        }
    }
    return output
}
console.log(flattenArray([1, [2, 3], [4, [[[[5]]]]]]])); // [1, 2, 3, 4, 5]
```

---

### Problem 15: Chunk an Array [Medium]
**Description:** Splits array into chunks of given size.
**Input:** [1, 2, 3, 4, 5], size = 2
**Output:** [[1, 2], [3, 4], [5]]
**Code:**
```javascript
function chunkArray(arr,size){
    let output = [];
    let pointer = 0
    while (pointer < arr.length) {
        let end = pointer + size
        let newChunk = arr.slice(pointer,end);
        output.push(newChunk)
        pointer = end
    }
    return output
}
console.log(chunkArray([1,2,3,4,5], 2)); // [[1, 2], [3, 4], [5]]
```

---

## Summary Table

| Problem # | Title | Difficulty | Input | Output |
|-----------|-------|-----------|-------|--------|
| 1 | Swap Two Variables | Easy | a=5, b=10 | {a:10, b:5} |
| 2 | Check Even or Odd | Easy | 27, 28 | false, true |
| 3 | Find Largest of Three | Easy | 3,7,5 | 7 |
| 4 | Celsius to Fahrenheit | Easy | 0, 100 | 32, 212 |
| 5 | Check Sign | Easy | -5, 0, 5 | negative, zero, positive |
| 6 | Reverse String | Easy | 'developer' | 'repoleved' |
| 7 | Count Vowels | Easy | 'javascript' | 3 |
| 8 | Check Palindrome | Easy | 'racecar' | true |
| 9 | Title Case | Easy | 'hello world' | 'Hello World' |
| 10 | Count Character | Easy | 'habaiab','a' | 3 |
| 11 | Sum Array | Easy | [1,2,3,4,5] | 15 |
| 12 | Max in Array | Easy | [3,1,7,2,9] | 9 |
| 13 | Remove Duplicates | Easy | [1,2,2,3,3,4] | [1,2,3,4] |
| 14 | Flatten Array | Medium | [1,[2,3],[4,[[[5]]]]] | [1,2,3,4,5] |
| 15 | Chunk Array | Medium | [1,2,3,4,5],2 | [[1,2],[3,4],[5]] |

---

## Statistics
- **Total Problems:** 15
- **Easy:** 13
- **Medium:** 2
- **Language:** JavaScript (100%)
- **Topics:** Variables, Numbers, Strings, Arrays

Generated: June 5, 2025
Repository: [habiburRhaman05/Job-Marathon-Progress](https://github.com/habiburRhaman05/Job-Marathon-Progress)
