/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    if (s1.length + s2.length !== s3.length){
      return false
    }
    let cache = {}
    let q = [[0,0]];
    while (q.length > 0){
      let [i,j] = q.shift();
        if (cache[`${i},${j}`] == false){
        continue
      }
      if (i == s1.length && j == s2.length){
        return true
      }
    
      if (i < s1.length && s1[i] == s3[i+j]){
        q.push([i+1, j]);
      }
      if (j < s2.length && s2[j] == s3[i+j]){
        q.push([i, j+1]);
      }
      cache[`${i},${j}`] = false
    }
    return false
};