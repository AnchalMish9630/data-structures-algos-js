/**
 * Linear Search Function
 * @param {number[]} arr - The array to search in
 * @param {number} target - The value to search for
 * @return {number} - Index of the target element or -1 if not found
 */
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Found at index i
        }
    }
    return -1; // Not found
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
