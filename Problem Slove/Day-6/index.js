// roblem 26: Destructure and Rename  [Easy]
// Description: Given a user object, use destructuring to extract firstName, lastName, and age, renaming firstName to name.
// Example:
// const user = {firstName:'Sara', lastName:'Khan', age:25};// Extract: name='Sara', lastName='Khan', age=25
// Hint: Use: const { firstName: name, lastName, age } = user;

 
 function destructuring({ firstName: name, lastName, age }){
  return { name, lastName, age };
 };
 console.log(destructuring({firstName:'Sara', lastName:'Khan', age:25}));
 
 
 
 
// Problem 27: Merge Arrays with Spread  [Easy]
// Description: Write a function mergeArrays(...arrays) that accepts any number of arrays and merges them into one using the spread operator.
// Example:
// Input: [1,2], [3,4], [5]Output: [1,2,3,4,5]
// Hint: Use rest parameters and spread inside reduce or flat.

 function mergeArrays(...arrays) {
  return [].concat(...arrays);
 };
 console.log(mergeArrays([1,2], [3,4], [5]));
 
 
 
 
 
// Problem 28: Promise Chain  [Medium]
// Description: Write a function delay(ms) that returns a Promise that resolves after ms milliseconds. Then chain two delays: first 1 second, then 2 seconds, logging a message after each.
// Example:
// delay(1000).then(() => { console.log('1 sec'); return delay(2000); }).then(() => console.log('3 sec total'));
// Hint: Use new Promise with setTimeout inside.

 function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
 };

 // Chain two delays: first 1 second, then 2 seconds
 delay(1000)
   .then(() => { console.log('1 sec'); return delay(2000); })
   .then(() => console.log('3 sec total'));
 
 
 
 
// Problem 29: Async/Await Fetch Simulation  [Medium]
// Description: Write an async function getUserData(id) that simulates fetching user data by awaiting a Promise that resolves after 500ms with a mock user object.
// Example:
// await getUserData(1);// returns {id:1, name:'Test User'}
// Hint: Use async/await with a Promise that wraps setTimeout.

 async function getUserData(id) {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id, name: 'Test User' }), 500);
  });
 };

 
 // Example usage (uncomment to test):
 // getUserData(1).then(user => console.log(user));// Problem 30: Optional Chaining & Nullish Coalescing  [Easy]
// Description: Given a nested object that may have missing properties, safely access a deeply nested value using optional chaining (?.) and provide a default using nullish coalescing (??).
// Example:
// const user = {profile: null};const city = user?.profile?.address?.city ?? 'Unknown';// Output: 'Unknown'
// Hint: Chain ?. for each level; use ?? for the fallback.

 function getCity(user) {
  return user?.profile?.address?.city ?? 'Unknown';
 };

 console.log(getCity({profile: null})); 
 console.log(getCity({profile: {address: {city: 'New York'}}})); 


 
 
 
