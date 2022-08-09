/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let res = [];
    for (let i = 0; i < intervals.length; i++){
        let [b1, e1] = newInterval;
        let [b2, e2] = intervals[i];
        if (e1 < b2){
            return [...res, newInterval, ...intervals.slice(i)]
        } else if (
            b1 > e2
        ) {
            res.push(intervals[i])
        } else {
            newInterval = [Math.min(b1, b2), Math.max(e1, e2)]
        }
    }
    res.push(newInterval)
    return res
};