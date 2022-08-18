/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    let dic = {};
    for (let i = 0; i < arr.length; i ++){
        dic[arr[i]] = (dic[arr[i]] || 0) + 1        
    }
    let steps = []
    for (let [k,v] of Object.entries(dic)){
        steps.push([k, v])
    }
    steps.sort((a,b) => b[1] - a[1])
    let length = arr.length
    let goal = arr.length/2
    let count = 0
    while (length > goal){
        count++
        length -= steps[count-1][1]
        if (length < goal){
            break;
        }
    }
    return count
};