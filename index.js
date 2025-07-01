function HashMap (loadFactor = 0.75, capacity = 16) {
    // private variables
    let size = 0;
    let buckets = new Array(capacity).fill().map(() => []);

    //public methods
    return { //made into a factory, not a constructor
        hash(key) { // hash method
            let hashCode = 0;

            const primeNumber = 31;
            for (let i = 0; i < key.length; i++) {
                hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity; // this generates a key and it modulos it to this.capacity
            }

            return hashCode;
        },

        set(key, value) { // this function looks for a value in the buckets. If it finds one identical, it overwrites, it it does not find any value similar, it adds
            let index = this.hash(key);
            let bucket = buckets[index];

            for (let entry of bucket) {
                if (entry.key === key) {
                    entry.value = value; // overwrite value if it finds another with same value
                    return;
                }
            }

            bucket.push({ key, value });
            size++;
        },
        // methods for usage
        getSize() { return `Buckets used: ${size}` }, // returns size
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

 console.log(test.getSize()); // returns size
 console.log(test.getBuckets()); // returns buckets
