var _ = require('lodash/array');

/*
CHUNK
=====
Creates an array of elements split into groups the length of size.
If array can't be split evenly, the final chunk will be the remaining elements.
*/

var firstArr = _.chunk(['a', 'b', 'c', 'd'], 2);
console.log(firstArr); // => [['a', 'b'], ['c', 'd']]

var secondArr = _.chunk(['a', 'b', 'c', 'd'], 3);
console.log(secondArr); // => [['a', 'b', 'c'], ['d']]

/*
COMPACT
=======
Creates an array with all falsey values removed.
The values false, null, 0, "", undefined, and NaN are falsey.
*/

var compactedArr = _.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
console.log(compactedArr);

/*
CONCAT
======
Creates a new array concatenating array with any
additional arrays and/or values.
*/

var arrayToBeConcat = [1];
var otherForConcat = _.concat(array, 2, [3], [[4]]);

console.log(otherForConcat);
// => [1, 2, 3, [4]]

console.log(arrayToBeConcat);
// => [1]
