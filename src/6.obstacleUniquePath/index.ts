/**
 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？

网格中的障碍物用 1 表示。
网格中的空位置用 0 表示。

1.事例1
输入：obstacleGrid = [
        [0,0,0],
        [0,1,0],
        [0,0,0]
    ]
输出：2

2.事例2
输入：obstacleGrid = [
        [0,1],
        [0,0]
    ]
输出：1
 */

function obstacleUniquePath(obstacleGrid: Array<Array<number>>) {
    if (!obstacleGrid || obstacleGrid.length === 0) {
        return 0;
    }

    const dp: Array<Array<number>> = [];
    const m = obstacleGrid.length; // 行数
    const n = obstacleGrid[0].length; // 列数
    for (let i = 0; i < m; i++) {
        dp[i] = [];
        for (let j = 0; j < n; j++) {
            dp[i][j] = 0;
        }
    }
    for (let i = 0; i < m && obstacleGrid[i][0] === 0; i++) {
        dp[i][0] = 1;
    }
    for (let j = 0; j < n && obstacleGrid[0][j] === 0; j++) {
        dp[0][j] = 1;
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 1) { // 如果遇到障碍物,就跳过去
                continue;
            }

            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    console.log('**************dp**************');
    console.log(dp);
    console.log('**************dp**************');

    return dp[m - 1][n - 1];
}

export {
    obstacleUniquePath
};