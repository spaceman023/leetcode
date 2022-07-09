/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    let rows = heights.length;
    let cols = heights[0].length;
    function dfs(node, result){
      let entry = createEntry(node)
      if (result.has(entry)) return
      result.add(entry)
      let [r,c] = node;
      if (r + 1 < rows && heights[r+1][c] >= heights[r][c]) dfs([r+1,c], result)
      if (r-1 >= 0 && heights[r-1][c] >= heights[r][c]) dfs([r-1, c], result)
      if (c+1 < cols && heights[r][c+1] >= heights[r][c]) dfs([r, c+1], result)
      if (c-1 >= 0 && heights[r][c-1] >= heights[r][c]) dfs([r, c-1], result)
      return
    }
    let pacific = new Set()
    let atlantic = new Set()
    for (let r = 0; r < rows; r++){
      dfs([r,0], pacific)
      dfs([r, cols-1], atlantic)
    }
    for (let c = 0; c < cols; c++){
      dfs([0,c], pacific)
      dfs([rows-1, c], atlantic)
    }
  let common = [...pacific].filter(i => atlantic.has(i)).map(i => i.split(",").map(i => Number(i)))
  return common
};
  
function createEntry ([r,c]) {
  return `${r},${c}`
}