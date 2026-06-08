// Problem 21: Factorial (Recursive)  [Easy]
// Description: Write a recursive function factorial(n) that returns the factorial of a non-negative integer n.
// Example:
// Input: 5  → Output: 120 (5×4×3×2×1)Input: 0  → Output: 1
// Hint: Base case: factorial(0) = 1. Recursive case: n * factorial(n-1).

function factorial(n){
  if(n === 0) return 1
  return  n * factorial(n -1)
};

console.log(factorial(5));




// Problem 22: Fibonacci Sequence  [Easy]
// Description: Write a function fibonacci(n) that returns the nth number in the Fibonacci sequence.
// Example:
// Input: 6  → Output: 8 (0,1,1,2,3,5,8...)
// Hint: Try both iterative and recursive approaches.

function fibonacci(n){

  if(n < 0 ) return "Input must be a non-negative integer"

if(n === 0) return 0;
if(n === 1) return 1;

let prev = 0,current = 1;
for (let i = 2; i <= n; i++) {
 let next = prev + current;
 prev = current
 current = next
  
}
return current

};
console.log(fibonacci(6));



// Problem 23: Create a Counter with Closure  [Medium]
// Description: Write a function makeCounter() that returns an object with increment, decrement, and getCount methods using closure.
// Example:
// const c = makeCounter();c.increment(); c.increment();c.getCount(); // 2
// Hint: Use a variable inside the outer function that inner functions can access.


function counterFn(){
 
  let count = 0

   function increment(){
     count += 1
  }
   function decrement(){
     count += 1
  };
   function getCount(){
    return  count
  };

  return {increment,decrement,getCount}
  

};


const counter = counterFn() // instance of counter

console.log(counter.getCount());
 counter.increment()
 counter.increment()
 counter.increment()
console.log(counter.getCount());


// Problem 25: Memoize a Function  [Medium]
// Description: Write a function memoize(fn) that caches the results of a function so repeated calls with the same input return the cached result.
// Example:
// const memoAdd = memoize(n => n + 10);memoAdd(5); // 15 (computed)memoAdd(5); // 15 (from cache)
// Hint: Use an object as a cache inside the outer function.


async function expensive(n) {

  console.log("expensive function working");
  
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  return n * 10;
};



function memoize(fn){
  
  let cache = {};

   return   async function(n){

      if(cache[n]){
        return cache[n];
      }

      let res = await fn(n);
      cache[n] = res
      return res

   }

};


(async function(){
   const memoizedExpensive = memoize(expensive);

  console.log("calculating expensive");
  console.log("row :", await memoizedExpensive(5));


  console.log("cached result :", await memoizedExpensive(5));
})()



// Problem 24: Curry a Function  [Medium]
// Description: Write a function curry(fn) that converts a function of two arguments into a curried version.
// Example:
// const add = curry((a,b) => a+b);add(2)(3); // 5
// Hint: Return a function from inside a function.

function curry(fn) {
  return function(a) {

    return function(b) {
      return fn(a, b);
    };
  };
}


const add = curry((a, b) => a + b);
console.log(add(5)(10)); 