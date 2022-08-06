/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
    let T = minutesToTest/minutesToDie
    let x = 0;
    while (Math.pow(T+1,x) < buckets){
        x++
    }
    return x
};