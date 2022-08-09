/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let ret = []
    let parr = null
    intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < intervals.length; i++){
        let [a,b] = intervals[i];
        if (!parr){
            let c, d
            if (i < intervals.length-1) {
                [c,d] = intervals[i+1];
            } else {
                return [...ret, intervals[i]]
            }
            if (c > b){
                ret.push(intervals[i])
            } else {
                parr = [Math.min(a,c), Math.max(b, d)];
            }
        } else {
            let [pa, pb] = parr;
            if (pb < a){
                ret.push(parr);
                i--
                parr = null;
            } else if (
                pb <= b
            ) {
                parr = [Math.min(a, pa), Math.max(b, pb)]
            }
        }
    }
    if (parr) {
        ret.push(parr)
    }
    return ret
};