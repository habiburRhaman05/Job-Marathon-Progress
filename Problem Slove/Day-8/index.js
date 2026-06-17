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
