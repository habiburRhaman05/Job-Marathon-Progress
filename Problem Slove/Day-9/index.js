//LRU CACHE;

// functional requrements

// put(key) - delete current key if has => add cache.set(current key) => check size - frist item get and delete
/// get (key) - check cache if has tehn return -1 => delete prev exiting item = > set deleted itemd again in cache 

class LRU {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    put(key) {

        // existing key 
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }

        this.cache.set(key, true);

        // remove oldest
        if (this.cache.size > this.capacity) {
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
    }

    get(key) {

        if (!this.cache.has(key)) {
            return -1;
        }

        // move to recent
        this.cache.delete(key);
        this.cache.set(key, true);

        return key;
    }
};


// Problem 48: Rotate an Array  [Medium]
// Description: Write a function rotateArray(arr, k) that rotates an array to the right by k steps.
// Example:
//Input: [1,2,3,4,5], k=2 Output: [4,5,1,2,3


function rotateArray(arr,k){
      if( arr.length === 0) return []
      let arrLength = arr.length
      k = k % arrLength
      console.log(k);
      
      
      let lastPart = arr.slice(arrLength - k);
    let firstPart = arr.slice(0,arrLength-k);
      
    return [...lastPart,...firstPart]
      
}

// console.log(rotateArray([1,2,3,4,5],12));


// Problem 49: Roman to Integer  [Medium]
// Description: Write a function romanToInt(s) that converts a Roman numeral string to an integer.
// Example:
// Input: 'III'   → Output: 3Input: 'IX'    → Output: 9Input: 'LVIII' → Output: 58
function romanToInt(s) {
  const romanMap = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ]);

  let output = 0;

  for (let i = 0; i < s.length; i++) {
    let current = romanMap.get(s[i]);
    let next = romanMap.get(s[i + 1]);

    if (next && current < next) {
      output += (next - current);
      i++; // skip next
    } else {
      output += current;
    }
  }

  return output;
}

console.log(romanToInt("IV")); // 4