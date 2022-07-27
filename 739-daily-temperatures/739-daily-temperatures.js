/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack = [];
    for (let i = 0; i < temperatures.length; i++){
        let t = temperatures[i];
        while (stack.length > 0 && stack.at(-1)[0] < t){
            let [, index] = stack.pop();
            temperatures[index] = i - index
        }
        stack.push([t, i]);
    }
    for (let [t, i] of stack){
        temperatures[i] = 0;
    }
    return temperatures;
};