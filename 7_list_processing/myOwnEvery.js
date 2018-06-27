/*
Build It to Understand It

Write a function named myOwnEvery that's similar to the Array.prototype.every method. It should take an array and a function as arguments, and return true if every element passed to the function evaluates as truthy.
*/

function myOwnEvery(array, func) {
  var i;
  for (i = 0; i < array.length; i += 1) {
     if (!func(array[i], i, array)) return false;
  }

  return true;
}

var isAString = function (value) {
  return typeof value === 'string';
};

console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));       // true
console.log(myOwnEvery([0, 1, 2], function (elm, idx) { return elm === idx; }));  // true
console.log(myOwnEvery([0, 1, 3], function (elm, idx) { return elm === idx; }));  // false
