/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {

  if (!node){
      return node
  }
  if (node.neighbors.length < 1){
      let x = new Node(1, node.neighbors)
      return x
  }
  let visited = {};
  let q = [node];
  while (q.length > 0){

    let n = q.shift();
    if (!visited[n.val]){
    visited[n.val] = new Node(n.val, [])
    q = [...q, ...n.neighbors]
    }
    for (let x of n.neighbors){
        if (visited[x.val] && !visited[x.val].neighbors.map(i => i.val).includes(n.val)){
            visited[x.val].neighbors.push(visited[n.val])
        } 
     }
    
  }

  return visited[node.val]
};