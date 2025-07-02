 import { HashMap } from './HashMap.js'
 
 
 const test = HashMap() // test

 // full capacity
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

 // testing if loadfactor doubles the capacity
 test.set('moon', 'silver')

 // test if overwriting works
 test.set('carrot', 'orange');

 // overview:
 console.log(test.getLength()); // returns length
 console.log(test.getBuckets()); // returns buckets
 console.log(test.keys()); // returns all keys
 console.log(test.values()); // returns all values
 console.log(test.entries()); // returns every key-value pair

 function testingText() { // just for aesthetic reasons
    return console.log('=-'.repeat(30));
 }

 testingText();
 console.log('           Method testing:')
 testingText();
 
 // testing methods
 console.log('has method:');
 test.has('elephant');
 test.has('quite');

 testingText();

 console.log('get method:');
 test.get('frog');
 test.get('pink');

 testingText();

 console.log('remove method:');
 test.remove('ice cream');
 test.remove('pancake');

 testingText();

 // clear testing:
 console.log('');
 console.log('CLEAR TESTING:');
 console.log('');
 test.clear();

 console.log(test.getLength()); // returns length
 console.log(test.getBuckets()); // returns buckets
 console.log(test.keys()); // returns all keys
 console.log(test.values()); // returns all values
 console.log(test.entries()); // returns every key-value pair