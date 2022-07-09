/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (grid.length < 1){
        return 0
    }
    const [rows, cols] = [grid.length, grid[0].length]
    let visit = new Set();
    let islands = 0;
    for (let r = 0; r < rows; r++){
        for (let c = 0; c < cols; c++){
            if (grid[r][c] == "1" && !visit.has(`${r},${c}`)) {
                let q = [];
                visit.add(`${r},${c}`)
                q.push([r,c])
                while (q.length > 0){
                    let [row, col] = q.shift();
                    const directions = [
                       [1,0], [-1,0], [0,1],[0,-1]
                        ];
                    for (const [dr,dc] of directions){
                        let r = row+dr;
                        let c = col+dc;
                        if (visit.has(`${r}, ${c}` || visit !== "1")){
                            continue
                        }
                        if (r < rows && r >= 0 && c < cols && c >= 0 && grid[r][c] == "1" && !visit.has(`${r},${c}`)) {
                            q.push([r,c])
                            visit.add(`${r},${c}`)
                        }
                    }
                }
                islands++
           }
        }
    }
    return islands
};
