/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const [rows, cols] = [grid.length, grid[0].length]
    const dfs = (r, c) => {
      if (r >= rows || r < 0 || c >= cols || c < 0 || grid[r][c] == 0){
        return 0
      }
      grid[r][c] = 0
      return (1+ dfs(r+1, c) + dfs(r, c+1) + dfs(r-1, c) + dfs(r, c-1))
    }
    let max = 0
    for (let r = 0; r < rows; r++){
      for (let c = 0; c < cols; c++){
        let res = dfs(r,c);
        if (res > max){
          max = res
        }
      }
    }
  return max
};