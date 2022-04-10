/**
 给定一个整数数组 prices ，它的第 i 个元素 prices[i] 是一支给定的股票在第 i 天的价格。

设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。

注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

示例 1：
输入：k = 2, prices = [2,4,1]
输出：2
解释：在第 1 天 (股票价格 = 2) 的时候买入，在第 2 天 (股票价格 = 4) 的时候卖出，这笔交易所能获得利润 = 4-2 = 2。

示例 2：
输入：k = 2, prices = [3,2,6,5,0,3]
输出：7
解释：在第 2 天 (股票价格 = 2) 的时候买入，在第 3 天 (股票价格 = 6) 的时候卖出, 这笔交易所能获得利润 = 6-2 = 4。随后，在第 5 天 (股票价格 = 0) 的时候买入，在第 6 天 (股票价格 = 3) 的时候卖出, 这笔交易所能获得利润 = 3-0 = 3 。
 */

function getStockMaxValue(prices: number[], k: number) {
    if (!k || !prices || prices.length === 0) {
        return 0;
    }

    const length = prices.length;
    // dp[i][x]第i天进入(处于)x状态（0.持股，1.不持股）
    // dp[i][0]: 第i天第一次进入持有股票的状态，所持有的最多现金   (偶数)
    // dp[i][1]: 第i天第一次进入非持有股票的状态，所持有的最多现金 (奇数)
    // dp[i][2]: 第i天第二次进入持有股票的状态，所持有的最多现金 (偶数)
    // dp[i][3]: 第i天第二次进入非持有股票的状态，所持有的最多现金 (奇数)
    // ...
    const dp = Array.from(Array(length), () => Array(2*k).fill(0));
    for (let i = 0; i < 2*k; i++) {
        if (i % 2 === 0) {
            dp[0][i] = -prices[0];
        } else {
            dp[0][i] = 0;
        }
    }

    for (let i = 1; i < length; i++) {
        // 第i天第一次进入持有股票的状态，所持有的最多现金
        dp[i][0] = Math.max(dp[i - 1][0], -prices[i]);
        // 第i天第一次进入非持有股票的状态，所持有的最多现金
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
        // 第i天第二次之后的股票交易状态，所持有的最多现金
        for (let j = 2; j < 2*k -1; j+=2) {
            dp[i][j + 0] = Math.max(dp[i - 1][j + 0], dp[i - 1][j - 1] - prices[i]);
            dp[i][j + 1] = Math.max(dp[i - 1][j + 1], dp[i - 1][j + 0] + prices[i]);
        }
    }

    return dp[length - 1][2*k - 1];
}

export {
    getStockMaxValue
}