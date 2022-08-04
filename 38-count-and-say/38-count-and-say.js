/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let s = "1"
    for (let i = 1; i < n; i++){
        let count = 1;
        let newS = ""
        for (let j = 1; j <= s.length; j++){
            if (s[j] !== s[j-1]){
                newS += (count + s[j-1]);
                count = 1;
            } else {
                count++
            }
        }
        s = newS
    }
    return s
};