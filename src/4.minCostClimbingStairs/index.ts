/**
 数组的每个下标作为一个阶梯，第 i 个阶梯对应着一个非负数的体力花费值 cost[i]（下标从 0 开始）。
 每当你爬上一个阶梯你都要花费对应的体力值，一旦支付了相应的体力值，你就可以选择向上爬一个阶梯或者爬两个阶梯。
 请你找出达到楼层顶部的最低花费。在开始时，你可以选择从下标为 0 或 1 的元素作为初始阶梯。

 输入：cost = [10, 15, 20] 输出：15 
 解释：最低花费是从 cost[1] 开始，然后走两步即可到阶梯顶，一共花费 15

 输入：cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1] 输出：6
 解释：最低花费方式是从 cost[0] 开始，逐个经过那些 1 ，跳过 cost[3] ，一共花费 6 
 */

/**
1.确定dp数组以及下标的含义: dp[i]的定义：第i个台阶所花费的最少体力为dp[i]
2.确定递推公式: 可以有两个途径得到dp[i]，一个是dp[i-1] 一个是dp[i-2],dp[i] = min(dp[i - 1], dp[i - 2]) + cost[i]
3.dp数组如何初始化: dp[0] = costs[0], dp[1] = costs[1]
4.确定遍历顺序
5.举例推导dp数组
   cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1] => dp = [1, 100, 2, 3, 3, 103, 4, 5, 104, 6]
 */

function getMinCostClimbingStairs(costs: Array<number>) {
    debugger
    if (!costs || costs.length <= 2) {
        return null;
    }

    const dp = [];
    dp[0] = costs[0];
    dp[1] = costs[1];
    const length = costs.length;
    for (let i = 2; i < length; i++) {
        dp[i] = Math.min(dp[i -1], dp[i - 2]) + costs[i];
    }

    console.log(dp);
    return Math.min(dp[length - 1], dp[length - 2]);
}

export {
    getMinCostClimbingStairs
}