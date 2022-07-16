/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0
    let sum = 0
    let j = height.length-1
    let i = 0
    while (j > i){
            sum = (j-i)*Math.min(height[i], height[j])
            if (sum > max){
                max = sum
            }
        if (height[j] > height[i]){
            i++
        }
        else {
            j--
        }
    }
    return max
};