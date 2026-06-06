// Problem 20: Find Duplicate Values in Array of Objects  [Medium]
// Description: Given an array of objects, write a function findDuplicateNames(arr) that returns names that appear more than once.
// Example:
// Input: [{name:'Ali'},{name:'Sara'},{name:'Ali'}]Output: ['Ali']
// Hint: Use a frequency map (object) to count occurrences

function findDuplicateNames(arr){

     let dublicates = [];
     let count = {}

     for (const user of arr) {
        
        count[user.name] = (count[user.name] || 0) + 1;

        if(count[user.name] === 2){
            dublicates.push(user.name)
        }
        
     }
   
return dublicates

};
// console.log(findDuplicateNames([{name:'Ali'},{name:"Habib"},{name:'Sara'},{name:'Ali'},{name:"Habib"}]));



// Problem 19: Invert an Object  [Easy]
// Description: Write a function invertObject(obj) that swaps the keys and values of an object.
// Example:
// Input: {a: 1, b: 2}  → Output: {1: 'a', 2: 'b'}
// Hint: Use Object.entries() and reduce().


function invertObject(obj){
   
//    let arr =Object.entries(obj)

//    let res = arr.reduce((acc,curr)=>{

//     let prev = acc;
//     const [key,value] = curr;
    
//     prev[value] = key;
    
//     return prev

//    },{})
// return res

  const result = {};

  for (const key in obj) {
    result[obj[key]] = key;
  }

  return result;

    
};
console.log(invertObject({a: 1, b: 2}));


// Problem 16: Count Object Properties  [Easy]
// Description: Write a function countProperties(obj) that returns the number of properties in an object.
// Example:
// Input: {a: 1, b: 2, c: 3}  → Output: 3
// Hint: Use Object.keys().length.

function countProperties(obj){
    return Object.keys(obj).length
};
console.log(countProperties({a: 1, b: 2, c: 3}));


// Problem 17: Merge Two Objects  [Easy]
// Description: Write a function mergeObjects(obj1, obj2) that merges two objects into one. If keys conflict, the second object's values win.
// Example:
// Input: {a:1}, {b:2}  → Output: {a:1, b:2}
// Hint: Use the spread operator or Object.assign().

function mergeObjects(obj1,obj2){
    return Object.assign(obj1,obj2)
}
console.log(mergeObjects({a:1}, {b:2}));


// Problem 18: FizzBuzz  [Easy]
// Description: Write a function fizzBuzz(n) that prints numbers from 1 to n. For multiples of 3 print 'Fizz', multiples of 5 print 'Buzz', multiples of both print 'FizzBuzz'.
// Example:
// Input: 15Output: 1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz
// Hint: Check divisibility with the % operator in the right order.