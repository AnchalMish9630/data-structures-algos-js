// 🔄 Function to reverse a character array in-place
// Input: s (array of characters)
// Output: The same array, reversed in-place

var reverseString = function(s) {
    // Iterate only through the first half of the array
    for (let i = 0; i < s.length / 2; i++) {
        // Swap the i-th element with the (length - 1 - i)-th element
        let temp = s[i];
        s[i] = s[s.length - 1 - i];
        s[s.length - 1 - i] = temp;
    }
};
