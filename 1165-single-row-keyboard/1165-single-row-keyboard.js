/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function(keyboard, word) {
    let dic = new Map(keyboard.split("").map((v,i) => [v,i]));
    let t = dic.get(word[0]);
    for (let i = 1; i < word.length; i++){
        let c1 = word[i];
        let c2 = word[i-1];
        t+=Math.abs(dic.get(c1) - dic.get(c2));
    }
    return t;
};