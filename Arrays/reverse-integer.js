/**
 * 🔁 Reverse Integer (LeetCode #7)
 *
 * Reverses the digits of a 32-bit signed integer.
 * If the reversed number overflows 32-bit signed integer range, return 0.
 * Handles negative numbers and returns result with the correct sign.
 *
 * @param {number} x - The input integer
 * @return {number} - The reversed integer, or 0 if overflow occurs
 */

var reverse = function(x) {
    let xCopy = x;              // Preserve original number for sign handling
    let rev = 0;                // Store the reversed number
    let num = Math.abs(x);      // Work with positive version of x

    // Reverse digits using modulo and division
    while (num > 0) {
        let rem = 0;
        rem = num % 10;         // Get the last digit
        rev = rev * 10 + rem;   // Append digit to reversed number
        num = Math.floor(num / 10); // Remove last digit
    }

    // Check for 32-bit signed integer overflow
    if (rev < -(2 ** 31) || rev > 2 ** 31 - 1) return 0;

    // Return reversed number with correct sign
    return xCopy < 0 ? -rev : rev;
};
