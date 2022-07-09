/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    let rows = heights.length;
    let cols = heights[0].length;
    function dfs(node, result = [], visited = []){
      result.push(node)
      let [r,c] = node;
      if (visited.includes(createEntry(node))) return result;
      visited.push(createEntry(node))
     
      if (r + 1 < rows && heights[r+1][c] >= heights[r][c]) dfs([r+1,c], result, visited)
      if (r-1 >= 0 && heights[r-1][c] >= heights[r][c]) dfs([r-1, c], result, visited)
      if (c+1 < cols && heights[r][c+1] >= heights[r][c]) dfs([r, c+1], result, visited)
      if (c-1 >= 0 && heights[r][c-1] >= heights[r][c]) dfs([r, c-1], result, visited)
      return result
    }
    let final = []
    let pacific = []
    let atlantic = []
    for (let r = 0; r < rows; r++){
      pacific = [...pacific, ...dfs([r,0])]
      atlantic = [...atlantic, ...dfs([r,cols-1])]
    }
    for (let c = 0; c < cols; c++){
      pacific = [...pacific, ...dfs([0,c])]
      atlantic = [...atlantic, ...dfs([rows-1,c])]
    }
  let common = pacific
                  .filter(i => atlantic
                          .some(x => x[0] == i[0] && x[1] == i[1]))
  console.log(common)
  return [...new Set(common
    .map(i => createEntry(i)))]
    .map(i => i
         .split(",")
         .map(i => Number(i)))
};
  
function createEntry (node) {
  let [r,c] = node;
  return `${r},${c}`
}