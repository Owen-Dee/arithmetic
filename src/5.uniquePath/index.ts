/**
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
问总共有多少条不同的路径？

输入：m = 3, n = 7
输出：28

输入：m = 3, n = 3
输出：6
 */

function uniquePath(x: number, y: number) {
    if (x <2 || y < 2) {
        return 1;
    }

    const dp = [];
    for (let i = 0; i < x; i ++) {
        dp[i] = [];
        for (let j = 0; j < y; j++) {
            if (i === 0) {
                dp[i][j] = 1;
            } else if (j === 0) {
                dp[i][j] = 1;
            } else {
                dp[i][j] = 0;
            }
        }
    }

    for (let i = 1; i < x; i++) {
        for (let j = 1; j < y; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j-1];
        }
    }

    console.log('**************dp**************');
    console.log(dp);
    console.log('**************dp**************');

    return dp[x -1][y - 1];
}

export {
    uniquePath
}