/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let anamap = new Map();
  for (let s of strs){
    let val = s
    let key = s.split("").sort().join();
    if (anamap.has(key)){
      anamap.set(key, [...anamap.get(key), val])  
    } else {
      anamap.set(key, [val])
    }
  }
  return Array.from(anamap.values())
};