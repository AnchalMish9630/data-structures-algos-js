/*
💡 Problem: Find the Second Largest Element in an Array

📝 Description:
Given an array of integers, find the second largest element in the array without sorting it.
The array may contain unique elements.

📥 Input:
arr = [4, 9, 0, 2, 8, 7, 1]

📤 Output:
8

🔁 Approach:
- Initialize two variables: largest and secondLargest with -Infinity.
- Traverse the array:
    - If current element > largest → update secondLargest = largest, and largest = current element.
    - Else if current element is not equal to largest and > secondLargest → update secondLargest.

✅ Time Complexity: O(n)
✅ Space Complexity: O(1)
*/

let arr = [4, 9, 0, 2, 8, 7, 1];
let largest = -Infinity;
let secondLargest = -Infinity;

function findSecondLargest(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] !== largest && arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

let result = findSecondLargest(arr);
console.log("Second Largest Element:", result); // Output: 8
