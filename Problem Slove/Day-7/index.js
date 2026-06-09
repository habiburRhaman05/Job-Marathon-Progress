 
// Problem 31: Debounce Function  [Medium]
// Description: Write a debounce(fn, delay) function that delays invoking fn until after delay milliseconds have elapsed since the last time it was called.
// Example:
// const debouncedSearch = debounce(search, 300);// Fires only once after user stops typing for 300ms
// Hint: Use clearTimeout and setTimeout.

function debounce(fn,delay){

    let timer;

   return function(...args){
       if(timer){
        clearTimeout(timer)
       }

       let context = this

       timer = setTimeout(() => {
           fn.apply(context, args); 
       }, delay);
   }

};

function search(num){
    console.log("searching",num);
    
}

const debouncedSearch = debounce(search,300);

debouncedSearch(5);
