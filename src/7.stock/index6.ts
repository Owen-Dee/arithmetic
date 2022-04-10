/**
 给定一个整数数组 prices，其中第 i 个元素代表了第 i 天的股票价格 ；非负整数 fee 代表了交易股票的手续费用。

你可以无限次地完成交易，但是你每笔交易都需要付手续费。如果你已经购买了一个股票，在卖出它之前你就不能再继续购买股票了。

返回获得利润的最大值。

注意：这里的一笔交易指买入持有并卖出股票的整个过程，每笔交易你只需要为支付一次手续费。

示例 1: 输入: prices = [1, 3, 2, 8, 4, 9], fee = 2 输出: 8

解释: 能够达到的最大利润:
在此处买入 prices[0] = 1
在此处卖出 prices[3] = 8
在此处买入 prices[4] = 4
在此处卖出 prices[5] = 9
总利润: ((8 - 1) - 2) + ((9 - 4) - 2) = 8.
 */

function getStockMaxValue(prices: number[], fee: number) {
    if (!prices || prices.length === 0 || !fee) {
        return 0;
    }

    const length = prices.length;
    // dp[i][x]第i天进入(处于)x状态（0.持股，1.不持股）
    // dp[i][0]: 第i天进入持有股票的状态，所持有的最多现金 
    // dp[i][1]: 第i天进入非持有股票的状态，所持有的最多现金 
    const dp = Array.from(Array(length), () => Array(2).fill(0));
    dp[0][0] = -prices[0];
    dp[0][1] = 0;
    for (let i = 1; i < length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i -1][1] - prices[i]);
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i] - fee);
    }

    return dp[length - 1][1];
}

export {
    getStockMaxValue
}