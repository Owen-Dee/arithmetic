// https://mp.weixin.qq.com/s?__biz=MzUxNjY5NTYxNA==&mid=2247497061&idx=1&sn=4e752bc80c3fcbd05f88cfa35e45431a&chksm=f9a1c634ced64f225b1e753921c782c30f77076916f782867534e71840973a213421bb3def16&mpshare=1&scene=1&srcid=0105KXhXQiQNA8FFw0tckspK&sharer_sharetime=1641381621097&sharer_shareid=a4fcd33e84f5c7829e91c22c616619d8&version=3.1.23.90391&platform=mac#rd
/**
给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

示例 1：
输入：[7,1,5,3,6,4]
输出：5
解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。

示例 2：
输入：prices = [7,6,4,3,1]
输出：0
解释：在这种情况下, 没有交易完成, 所以最大利润为 0。
 */

function getStockMaxValue(prices: number[]) {
    if (!prices || prices.length === 0) {
        return 0;
    }

    const length = prices.length;
    // dp[i][0]:第i天进入持有股票的状态，所持有的现金最大值
    // dp[i][1]:第i天进入不持有股票的状态，所持有的现金最大值
    const dp = Array.from(Array(length), () => Array(2).fill(0));
    dp[0][0] = -prices[0];
    dp[0][1] = 0;
    for (let i = 1; i < length; i++) {
        dp[i][0] = Math.max(dp[i -1][0], -prices[i]); // 只能有一次交易
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
    }

    return dp[length - 1][1];
}

export {
    getStockMaxValue
}







// // 动态规划
// function getMaxValueFromStock(prices: number[]) {
//     if (!prices || prices.length === 0) {
//         return 0;
//     }

//     const length = 0;
//     const dp = [];
//     dp[0][0] = -prices[0];
//     dp[0][1] = 0;
//     for (let i = 1; i < length; i++) {
//         dp[i][0] = Math.max(dp[i -1][0], - prices[i]);
//         dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
//     }

//     return dp[length -1][1];
// }

// //贪心算法
// function getMaxValueFromStock2(prices) {
//     if (!prices || prices.length === 0) {
//         return 0;
//     }

//     let result =0;
//     let low = Infinity;
//     const length = prices.length;
//     for (let i = 0; i < length; i++) {
//         low = Math.min(low, prices[i]);
//         result = Math.max(result, prices[i] - low);
//     }

//     return result;
// }