// Problem 1: Swap Two Variables  [Easy]
// Description: Write a function that swaps the values of two variables without using a third variable.
// Example:
// Input: a = 5, b = 10Output: a = 10, b = 5


function swap(a, b) {
    [a, b] = [b, a];
    return { a, b }
    //   a = a+b;
    //   b = a -b;
    //   a = a -b
    //   return {a,b}
};
console.log(swap(5, 10));


// Problem 2: Check Even or Odd  [Easy]
// Description: Write a function isEven(n) that returns true if a number is even, and false if it is odd.
// Example:
// Input: 4  → Output: trueInput: 7  → Output: false
// Hint: Use the modulus (%) operator.


function checkEven(num){
    if((num % 2) == 0){
        return true
    }
    return false
};
console.log(checkEven(27)); // false
console.log(checkEven(28)); // true


// Problem 3: Find the Largest of Three Numbers  [Easy]
// Description: Write a function largest(a, b, c) that returns the largest of three numbers.
// Example:
// Input: 3, 7, 5  → Output: 7
// Hint: Use Math.max() or if-else conditions.

function findMax(a,b,c){
    
//   return Math.max(a,b,c)
    return [a, b, c].sort((x, y) => y - x)[0];

};
console.log(findMax(3,7,5));


// Problem 4: Celsius to Fahrenheit  [Easy]
// Description: Write a function toFahrenheit(celsius) that converts a Celsius temperature to Fahrenheit.
// Example:
// Input: 0   → Output: 32Input: 100 → Output: 212
// Hint: Formula: (C × 9/5) + 32

function toFahrenheit(celsius){
  return (celsius * 9/5) + 32
};
console.log(toFahrenheit(0));
console.log(toFahrenheit(1000));



// Problem 5: Check Positive, Negative or Zero  [Easy]
// Description: Write a function checkSign(n) that returns 'positive', 'negative', or 'zero' based on the value of n.
// Example:
// Input: -5  → Output: 'negative'Input: 0   → Output: 'zero'
// Hint: Use if-else if-else statements.

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
};
console.log(checkSign(-5)); 
console.log(checkSign(5)); 
console.log(checkSign("0")); 
console.log(checkSign(0)); 
