const findPaths = (rows, cols, moves, x, y) => {
  const M = 1000000000 + 7
  let dp = new Array(rows).fill(0).map(i => new Array(cols).fill(0))
  dp[x][y] = 1;
  let count = 0;
  for (let m = 1; m <= moves; m++) {
    let temp = new Array(rows).fill(0).map(i => new Array(cols).fill(0))
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (i == rows - 1) count = (count + dp[i][j]) % M;
        if (j == cols - 1) count = (count + dp[i][j]) % M;
        if (i == 0) count = (count + dp[i][j]) % M;
        if (j == 0) count = (count + dp[i][j]) % M;
        temp[i][j] = (
          ((i > 0 ? dp[i - 1][j] : 0) + (i < rows - 1 ? dp[i + 1][j] : 0)) % M +
          ((j > 0 ? dp[i][j - 1] : 0) + (j < cols - 1 ? dp[i][j + 1] : 0)) % M
        ) % M
      }
    }
      dp = temp;
  }
  return count
}
