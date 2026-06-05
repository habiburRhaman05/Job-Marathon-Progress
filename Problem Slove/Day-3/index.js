// Problem 11: Find the Sum of an Array  [Easy]
// Description: Write a function sumArray(arr) that returns the sum of all numbers in an array.
// Example:
// Input: [1, 2, 3, 4, 5]  → Output: 15


 function sumArray(nums){
   return  nums.reduce((acc,curr) =>{
    return acc + curr
   },0)
 };

//  console.log(sumArray([1,2,3,4]));
 

//  Problem 12: Find Maximum Value in Array  [Easy]
// Description: Write a function findMax(arr) that returns the largest number in an array without using Math.max().
// Example:
// Input: [3, 1, 7, 2, 9]  → Output: 9


function findMax(nums){
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if(max < nums[i]){
      max = nums[i];
    }
  }
  return max

}
// console.log(findMax([1,4,8,6,19,4]));


// Problem 13: Remove Duplicates from Array  [Easy]
// Description: Write a function removeDuplicates(arr) that returns a new array with duplicate values removed.
// Example:
// Input: [1, 2, 2, 3, 3, 4]  → Output: [1, 2, 3, 4]


function removeDuplicates(arr){

   
  let uniqueValues = [];

   for (const item of arr) {
      if(!uniqueValues.includes(item)){
       uniqueValues.push(item)
      }
   }
   return uniqueValues

}

// console.log(removeDuplicates([1, 2, 2, 3, 3, 4]));


// Problem 14: Flatten a Nested Array  [Medium]
// Description: Write a function flattenArray(arr) that flattens one level of a nested array.
// Example:
// Input: [1, [2, 3], [4, 5]]  → Output: [1, 2, 3, 4, 5]

function flattenArray(arr){
  
  // return arr.reduce((acc,curr)=>{
  //    let r =  Array.isArray(curr) ? curr.flat(Infinity) : curr;
  //    return acc.concat(r)
  // },[])

  // // return arr.flat(Infinity);


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
  
};
// console.log(flattenArray([1, [2, 3], [4, [[[[5]]]]]]));


// Problem 15: Chunk an Array  [Medium]
// Description: Write a function chunkArray(arr, size) that splits an array into chunks of a given size.
// Example:
// Input: [1,2,3,4,5], 2  → Output: [[1,2],[3,4],[5]]
// Hint: Use a while loop with slice().


function chunkArray(arr,size){
  let output = [];
  let pointer = 0


  while (pointer < arr.length) {
    let end  = pointer+size
      let newChunk = arr.slice(pointer,end);
      output.push(newChunk)
      pointer = end
  }
return output
};
console.log(chunkArray([1,2,3,4,5], 2));
