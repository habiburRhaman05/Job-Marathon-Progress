
// Problem 31: Debounce Function  [Medium]
// Description: Write a debounce(fn, delay) function that delays invoking fn until after delay milliseconds have elapsed since the last time it was called.
// Example:
// const debouncedSearch = debounce(search, 300);// Fires only once after user stops typing for 300ms
// Hint: Use clearTimeout and setTimeout.

function debounce(fn, delay) {

    let timer;

    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }

        let context = this

        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    }

};

function search(num) {
    console.log("searching", num);

}

const debouncedSearch = debounce(search, 300);

// debouncedSearch(5);



// Problem 32: Throttle Function  [Medium]
// Description: Write a throttle(fn, limit) function that ensures fn is called at most once every limit milliseconds.
// Example:
// const throttledScroll = throttle(onScroll, 200);// Fires at most once every 200ms during scroll
// Hint: Track the last call time with Date.now().

function throttle(fn, limit) {
    // let isCall = false;
    // return function(...args){
    //     let context = this
    //     if(isCall) return 

    //      fn.apply(context,args);
    //         isCall = true


    //   setTimeout(() => {
    //         isCall = false
    //     }, limit);

    // };

    let lastCall = 0;

    return function (...agrs) {
        const now = Date.now();
        let context = this
        if ((now - lastCall) >= limit) {
            lastCall = now
            fn.apply(context, agrs);
        }
    }
};


const throttledScroll = throttle(search, 500);

// throttledScroll(8)
// throttledScroll(8)
// throttledScroll(8)
// throttledScroll(8)
// throttledScroll(8)


 
 
// Problem 33: Deep Clone an Object  [Medium]
// Description: Write a function deepClone(obj) that returns a deep copy of a plain object without using JSON.parse/JSON.stringify.
// Example:
// const a = {x: {y: 1}};const b = deepClone(a);b.x.y = 99;// a.x.y is still 1
// Hint: Use recursion and check for object/array types.

  function deepClone(obj){
      
  
    if(obj === null || typeof obj !== "object"){
        return obj
    };

    let   container = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
       
        container[key] = deepClone(obj[key])
        
        
    }

    




return container
       
  };

const original = {
    name: "Habib",
    age: 26,
    address: {
        city: "Dhaka"
    },
    skills: ["React", "Node"]
};

const copied = deepClone(original);

copied.address.city = "Barisal";
copied.skills[0] = "Next.js";

console.log(original.address.city); // Dhaka
console.log(original.skills[0]);    // React
  console.log(copied);
  