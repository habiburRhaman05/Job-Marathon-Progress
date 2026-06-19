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
}