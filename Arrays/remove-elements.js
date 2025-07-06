// Function to remove all instances of 'val' from the array 'nums'
// and return the new length of the array after removal
var removeElement = function(nums, val) {
    let x = 0; // x is the position to overwrite with valid (non-val) elements

    for (let i = 0; i < nums.length; i++) {
        // If the current element is NOT equal to val
        if (nums[i] !== val) {
            nums[x] = nums[i]; // Place it at index x
            x++; // Move x forward
        }
    }

    return x; // x is the count of elements not equal to val
};

// ----------------------------
// Example usage:
let nums = [3, 2, 2, 3, 4, 3, 5];
let val = 3;

let newLength = removeElement(nums, val);

console.log("New Length:", newLength);
console.log("Modified Array:", nums.slice(0, newLength)); // Only print valid elements
