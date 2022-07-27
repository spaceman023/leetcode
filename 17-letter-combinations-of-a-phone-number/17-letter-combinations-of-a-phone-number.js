/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits == "") return []
    let dic = {
        "2":["a", "b", "c"],
        "3":["d", "e", "f"],
        "4":["g", "h", "i"],
        "5":["j", "k", "l"],
        "6":["m", "n", "o"],
        "7":["p", "q", "r", "s"],
        "8":["t", "u", "v"],
        "9":["w", "x", "y", "z"]
    }
    let output = dic[digits[0]]
    for (let i = 1; i < digits.length; i++){
        let d = digits[i]
        let res = []
        for (let o of output){
            for (let c of dic[d]){
                res.push(o+c)
            }
            output = res
        }

    }
    return output
};