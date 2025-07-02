 import { HashMap } from './HashMap.js'
 
 
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
