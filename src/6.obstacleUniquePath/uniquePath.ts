function uniquePath(paths: Array<Array<number>>) {
    if (!paths || paths.length === 0) {
        return 0;
    }

    const dp = [];
    const rows = paths.length;
    const columns = paths[0].length;
    for (let i = 0; i < rows; i++) {
        dp[i] = [];
        for (let j = 0; j < columns; j++) {
            dp[i][j] = 0;
        }
    }

    for (let i = 0; i < rows && paths[i][0] !== 1; i++) {
        dp[i][0] = 1;
    }

    for (let j = 0; j < columns && paths[0][j] !== 1; j++) {
        dp[0][j] = 1;
    }

    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < columns; j++) {
            if (paths[i][j] === 1) {
                continue;
            }

            dp[i][j] = dp[i - 1][j] + dp[i][j -1];
        }
    }

    return dp[rows - 1][columns - 1];
}

export {
    uniquePath
}