/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let morseArr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let morseDic = {};
    for (let i = 0; i < morseArr.length; i++){
        morseDic[alphabet[i]] = morseArr[i];
    }
    let transforms = new Set();
    for (let w of words){
        transforms.add(w.split("").map(i => morseDic[i]).join(""))
    }
    return transforms.size
};