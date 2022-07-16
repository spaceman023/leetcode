/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase()
    s = s.replace(/[^a-z0-9]/gi, '');
    let p1 = 0
    let p2 = s.length-1
    while (p1 < p2) {
        if (s[p1] !== s[p2]){
            return false
        }
        p1++
        p2--
    }
    return true
};