// Problem 6: Reverse a String  [Easy]
// Description: Write a function reverseString(str) that returns the reverse of a given string.
// Example:
// Input: 'hello'   → Output: 'olleh'Input: 'world'   → Output: 'dlrow'
// Hint: Use split(''), reverse(), and join('').

function reverseString(str){
    // return str.split("").reverse().join("");
    let output = "";

    for (let i = str.length - 1; i >= 0; i--) {
        output += str[i]
        
    }
    return output
};

console.log(reverseString("developer"));
