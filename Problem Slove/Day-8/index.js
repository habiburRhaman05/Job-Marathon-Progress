// Problem 40: Group Array by Property  [Medium]
// Description: Write a function groupBy(arr, key) that groups an array of objects by a given property key.
// Example:
// groupBy([{type:'fruit',name:'apple'},{type:'veg',name:'carrot'},{type:'fruit',name:'mango'}], 'type')// {fruit: [...], veg: [...]}
// Hint: Use reduce() and build an object where each key maps to an array.

function groupBy(arr,key){
      let result = {};
      for (const index in arr) {
        let currentType = arr[index][key];
          if(!result[currentType]){
            result[currentType] = [];
          }
          result[currentType].push(arr[index]);
      }
      return result
};
console.log(groupBy([{type:'fruit',name:'apple'},{type:'veg',name:'carrot'},{type:'fruit',name:'mango'}], 'type'));


// Problem 36: Safe JSON Parse  [Easy]
// Description: Write a function safeJsonParse(str) that tries to parse a JSON string and returns the parsed value, or null if parsing fails — without throwing an error.
// Example:
// safeJsonParse('{"a":1}');  // {a: 1}safeJsonParse('bad json'); // null
// Hint: Use try/catch inside the function.

function safeJsonParse(str){
    try {
        return JSON.parse(str);
    } catch (error) {
        return null
    }
};

console.log(safeJsonParse('{"a":1}'));
console.log(safeJsonParse('bad json'));


// Problem 37: Retry a Promise  [Medium]
// Description: Write a function retry(fn, times) that calls an async function fn up to times times, retrying if it throws an error. Resolves on first success, rejects after all attempts fail.
// Example:
// await retry(unstableFetch, 3);// Tries up to 3 times before failing

 async function retry(fn,times){

    let lastError
    for (let index = 0; index < times; index++) {
       try {
       return await fn();
       } catch (error) {
        lastError = error
       }
        
    };

    throw lastError
}