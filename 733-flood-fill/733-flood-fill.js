/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let q = [[sr, sc]];
    let rows = image.length;
    let cols = image[0].length;
    let visited = new Map();
    let originalColor = image[sr][sc];
    while (q.length > 0){
        let [sr1, sc1] = q.pop();
        let id = `${sr1},${sc1}`
        if (visited.has(id)) continue;
        visited.set(id, true);
        if (image[sr1][sc1] == originalColor) {
            image[sr1][sc1] = color;
        } else {
            continue;
        }
        if (sr1 + 1 < rows) q.push([sr1+1, sc1]);
        if (sr1 - 1 >= 0) q.push([sr1-1, sc1]);
        if (sc1 + 1 < cols) q.push([sr1, sc1+1]);
        if (sc1 - 1 >= 0) q.push([sr1, sc1-1]);
    }
    return image
};