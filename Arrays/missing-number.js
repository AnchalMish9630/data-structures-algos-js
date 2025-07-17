/**
 * 🔢 Missing Number (LeetCode #268)
 *
 * Given an array containing n distinct numbers in the range [0, n],
 * return the only number in the range that is missing from the array.
 *
 * Approach: Use the formula for the sum of first n natural numbers.
 * Subtract the sum of actual array elements to find the missing number.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums - An array of n distinct integers in range [0, n]
 * @return {number} - The missing number
 */

// nums =[4,0,2,1,5]

var missingNumber = function(nums) {

   let n = nums.length;
   let sumOfAllNumber = (n*(n+1)) / 2; // find sum of n number as n number of elements are there in array,
                                       // (n*(n+1)/2)/10 => 15
    let sumOfArray=0; // find sum of aaray 

   for (let i=0; i<n;i++){
     sumOfArray  = sumOfArray+nums[i]; // 12
   }
   return (sumOfAllNumber - sumOfArray);  // this will give missing number  // 15-12 == 3
}


// Brute force

let nums = [ 4, 0, 1, 2]
function missingNumber(nums) {
    nums.sort((a, b) => a - b);
    if (nums[0] !== 0) return 0;
    for (let i = 1; i < nums.length; i++) { 
    // At i = 0, nums[i - 1] becomes nums[-1], which is undefined. So undefined + 1 = NaN, and comparison fails. 
        if (nums[i] !== nums[i - 1] + 1) {
            return nums[i - 1] + 1
        }

    }
    return nums.length
};
console.log(missingNumber(nums));