// 🔁 Remove Duplicates from an Array in JavaScript
// ✅ Using Set (Simple & Efficient)

// const numbers = [1, 2, 2, 3, 4, 4, 5];
// const uniqueNumbers = [...new Set(numbers)];
// console.log(uniqueNumbers); // [1, 2, 3, 4, 5]
// 🧠 Explanation:

// Set is a built-in object that stores unique values only.

// [...new Set()] uses the spread operator to convert the set back to an array.

// ✅ Using filter() + indexOf() (More Customizable)

// const numbers = [1, 2, 2, 3, 4, 4, 5];
// const uniqueNumbers = numbers.filter((item, index) => {
//   return numbers.indexOf(item) === index;
// });
// console.log(uniqueNumbers); // [1, 2, 3, 4, 5]
// 🧠 Explanation:

// filter() keeps only the first occurrence of each item.

// indexOf(item) returns the first index — matches only once.