/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let q = ["("];
    let res = [];
    while (q.length > 0){
        let c = q.shift();
        if (c.length == n*2-1){
            res.push(c+")")
            continue;
        }
        if (getCount(c)){
            q.push(c+"(")
        } else {
            q.push(c+"(")
            q.push(c+")")
        }
    }
   
    return  res.filter(i => i.split("(").join("").length == n)
};

var getCount = function (c) {
    return c.split("").filter(i => i == ")").length == c.split("").filter(i => i=="(").length
}