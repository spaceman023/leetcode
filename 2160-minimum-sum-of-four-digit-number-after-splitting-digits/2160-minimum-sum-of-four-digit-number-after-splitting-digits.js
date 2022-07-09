/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let y = num.toString().split("").sort((a,b) => Number(a) - Number(b));
    let z = Number(y[0]+y[2]) + Number(y[1]+y[3]);
    return z
};