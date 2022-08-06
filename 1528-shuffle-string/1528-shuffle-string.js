/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let ret = new Array(s.length);
    for (let i = 0; i < s.length; i++){
        ret[indices[i]] = s[i];
    }
    return ret.join("")
};