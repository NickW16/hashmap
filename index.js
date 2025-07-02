function HashMap (loadFactor = 0.75, capacity = 16) {
    // private variables
    let length = 0;
    let buckets = new Array(capacity).fill().map(() => []);

    //public methods
    return { // made into a factory, not a constructor
        hash(key) { // hash method
            let hashCode = 0;

            const primeNumber = 31;
            for (let i = 0; i < key.length; i++) {
                hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity; // this generates a key and it modulos it to this.capacity
            }

            return hashCode;
        },

         // this function looks for a value in the buckets. If it finds one identical, it overwrites, it it does not find any value similar, it adds
        set(key, value) {
            let index = this.hash(key);
            let bucket = buckets[index];

            for (let entry of bucket) {
                if (entry.key === key) {
                    entry.value = value; // overwrite value if it finds another with same value
                    return;
                }
            }

            bucket.push({ key, value });
            length++;
        },

        // searches for a value in the buckets
        get(key) {
            let index = this.hash(key);
            let bucket = buckets[index];

            for (let entry of bucket) { // traverses through all of buckets
                if (entry.key === key) {
                    return entry.value; // returns value if it is found
                }
            }
            return null; // null if it doesnt finds the assigned value
        },

        // searches for a key in the buckets
        has(key) {
            let index = this.hash(key);
            let bucket = buckets[index];

            for (let entry of bucket) { // traverses through all of buckets
                if (entry.key === key) {
                    return true; // returns true if found
                }
            }
            return false; // null if not found
        },

        // remove a key
        remove(key) {
            let index = this.hash(key);
            let bucket = buckets[index];

            for (let i = 0; i < bucket.length; i++) { // searches for key
                if (bucket[i].key === key) { // if the key is found, delete it
                    bucket.splice(i, 1);
                    length--; // reduce length variable
                    return true;
                }
            }
            return false;
        },

        // reset hashmap
        clear() {
            length = 0;
            buckets = new Array(capacity).fill().map(() => []);
        },

        keys() { // returns an array with only the keys
            let array = [];
            for (let bucket of buckets) {
                for (let entry of bucket) {
                    array.push(entry.key);
                }
            }
            console.log('All keys:')
            return array;
        },

        values() { // returns all the values
            let array = [];
            for (let bucket of buckets) {
                for (let entry of bucket) {
                    array.push(entry.value);
                }
            }
            console.log('All Values:')
            return array;
        },

        entries() { // exhibits all the pairs of keys and values
            let array = [];
            for (let bucket of buckets) {
                for (let entry of bucket) { // creates arrays and appends to the main array
                    array.push([entry.key, entry.value])
                }
            }
            console.log('Key and value pairs:')
            return array;
        },

        // more methods for usage
        getLength() { return `Buckets used: ${length} out of ${capacity}` }, // returns size
        getBuckets() { return buckets }, // returns buckets' content
    };
}

 const test = HashMap() // test

 test.set('apple', 'red')
 test.set('banana', 'yellow')
 test.set('carrot', 'orange')
 test.set('dog', 'brown')
 test.set('elephant', 'gray')
 test.set('frog', 'green')
 test.set('grape', 'purple')
 test.set('hat', 'black')
 test.set('ice cream', 'white')
 test.set('jacket', 'blue')
 test.set('kite', 'pink')
 test.set('lion', 'golden')

 console.log(test.getLength()); // returns length
 console.log(test.getBuckets()); // returns buckets
 console.log(test.keys());
 console.log(test.values());
console.log(test.entries());
