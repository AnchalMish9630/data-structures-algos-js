/**
 * 🔁 Move Zeroes (LeetCode #283)
 *
 * Given an array `nums`, move all 0's to the end while maintaining the relative order of non-zero elements.
 * The operation must be done in-place without making a copy of the array.
 *
 * @param {number[]} nums - The input array of integers
 * @return {void} - Modifies `nums` in-place
 */

var moveZeroes = function(nums) {
    let x = 0; // Pointer to place the next non-zero element

    // First pass: Move all non-zero elements to the front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[x] = nums[i]; // Place non-zero at the current x position
            x++;               // Move pointer forward
        }
    }

    // Second pass: Fill the rest of the array with 0s
    for (let i = x; i < nums.length; i++) {
        nums[i] = 0;
    }
};
