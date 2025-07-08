// ✅ Leetcode #121: Best Time to Buy and Sell Stock
// 📌 Approach: Track min price and max profit using single pass (O(n) time)
// 🧠 Idea: For each day, track the lowest price so far (buy) and check if selling today gives a better profit.
// 🚀 Time Complexity: O(n) | 🗃️ Space Complexity: O(1)
// 🔗 Submitted by Anchal Mishra

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minValue = prices[0];   // Store the minimum price so far (best day to buy)
    let maxProfit = 0;          // Initialize max profit

    for (let i = 1; i < prices.length; i++) {
        // Check if selling today gives a better profit
        if (prices[i] - minValue > maxProfit) {
            maxProfit = prices[i] - minValue;
        }

        // Update minValue if today's price is lower
        if (prices[i] < minValue) {
            minValue = prices[i];
        }
    }

    return maxProfit;
};
