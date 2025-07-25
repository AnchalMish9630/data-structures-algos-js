/**
 * Linear Search Function
 */
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Found at index i
        }
    }
    return -1; // Not found // 
    // wll put this after loop otherwise first time condition false hone pr hi -1 aa jayega , 
    // that's why return -1 in the last.so that when loops end and no value maths then only retun -1
}

// Example usage:
const numbers = [10, 20, 30, 40, 50];
const target = 30;

const result = linearSearch(numbers, target);

if (result !== -1) {
    console.log(`Element found at index ${result}`);
} else {
    console.log("Element not found");
}
