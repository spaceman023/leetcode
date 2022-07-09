/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    return operations.map(i => {
      if (i == "++X" || i == "X++") return 1
      if (i == "--X" || i == "X--") return -1
    }).reduce((a,b) => a+b, 0)
};